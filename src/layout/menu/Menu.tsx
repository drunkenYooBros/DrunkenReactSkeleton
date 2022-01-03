import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Http from 'service/Http';

function Menu() {
  const [loading, setloadStatus] = useState(true)
  const [menuList, setMenuList] = useState([])
  useEffect(() => {
    Http.get('/menu')
    .then((res: any) => {
      setMenuList(res.body.menus)
      setloadStatus(false)
    })
  }, [])


  if (loading) return <></>

  const activeStyle: any = {
    textDecoration: "underline",
    textDecorationLine: 'overline',
    textDecorationThickness: '2px',
    textDecorationColor: "#00d1b2"
  }
  const menus: Array<any> = menuList.map((d: {id: number, name: string, path: string}, i) => 
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
      {menus}
    </>
    
  );
}

export default Menu;
