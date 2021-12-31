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
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        {menus}
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light active-menu">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
