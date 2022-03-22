import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mainMenuState } from 'state';

function Menu() {
  const menus = useRecoilValue(mainMenuState)
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
