import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MainMenuState } from "state";
import React from "react";
import Login from 'pages/login/Login'
// import * as dynamicComponents from 'pages/dynamic'

  const xx = 'pages/hongPlay/HongPlay'
  const Component = React.lazy(() => import('pages/hongPlay/HongPlay'))
  // const Component = React.lazy(() => import(xx))

function Content() {
    
  const menus = useRecoilValue(MainMenuState)
  // const routes2 = menus.map((menu: any) => {
  //   const path = menu?.nested ? `${menu.path}/*` : menu.path
  //   // const componentPath = 'pages/hongPlay/HongPlay'
  //   // const Comp = React.lazy(() => import(menu.componentPath))
  //   // const p = 'pages/hongPlay/HongPlay'
  //   // const ComponentA = React.lazy(() => import('pages/hongPlay/HongPlay'))
  //   // const ComponentB = React.lazy(() => import(`${p}`))
  //   // const Compb = React.lazy(() => import(`${menu.componentPath}`))
  //   return (
  //     <Route
  //       path={path}
  //       element={
  //         <React.Suspense fallback={<>...</>}>
  //           <Component />
  //         </React.Suspense>
  //       }
  //       // element={React.createElement(dynamicComponents.dynamic[menu.element])}
  //     />
  //   )
  // })
  return (
    <div className="container is-fluid">
      <Routes>
        {/* {routes} */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/hongPlay"
          element={
            <React.Suspense fallback={<>...</>}>
              <Component />
            </React.Suspense>
          }
          // element={React.createElement(dynamicComponents.dynamic[menu.element])}
        />
      </Routes>
    </div>
  );
}

export default Content
