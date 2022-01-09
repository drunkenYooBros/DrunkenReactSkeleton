import { Routes, Route } from "react-router"
import { useRecoilValue } from "recoil";
import { MainMenuState } from "state";
import React from "react";
import Login from 'pages/login/Login'
import * as dynamicComponents from 'pages/dynamic'

function Content() {
  const menus = useRecoilValue(MainMenuState)

  const routes = menus.map((menu) => {
    const path = menu?.nested ? `${menu.path}/*` : menu.path
    return (
      <Route
        key={menu.name}
        path={path}
        element={React.createElement(dynamicComponents.dynamic[menu.element])}
      />
    )
  })
  return (
    <div className="container is-fluid">
      <Routes>
        {routes}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Content
