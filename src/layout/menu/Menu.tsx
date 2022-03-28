import apiPortal from 'api/apiPortal';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue, selector } from 'recoil';
import { mainMenuState } from 'state';

const menuSelector = selector({
  key: 'menuSelector',
  get: async ({get}) => {
    const response = await apiPortal.getMenu()
    return response
  },
});

function Menu() {
  const menus = useRecoilValue(menuSelector)
  const activeStyle: any = {
    textDecoration: "underline",
    textDecorationLine: 'overline',
    textDecorationThickness: '2px',
    textDecorationColor: "#00d1b2"
  }
  const menuList: Array<any> = menus.map((d: {id: number, name: string, path: string}) => 
    <li key={d.name} className="navbar-item">  
      <NavLink
        to={d.path}
        style={({ isActive }) => isActive ? activeStyle : {}}
      >
        {d.name}
      </NavLink>
    </li>
  )
  return (
    <>
      {menuList}
    </>
  );
}

export default Menu;
