import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { mainMenuState } from "state";
import React, {Suspense} from "react";
import Login from 'pages/login/Login'
// import * as dynamicComponents from 'pages/dynamic'

const LazyComponent = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<>...</>}>
      <Component {...props} />
    </Suspense>
  )
}

function Content() {
    
  // const xx = 'pages/hongPlay/HongPlay'
  // // const Component = React.lazy(() => import('pages/hongPlay/HongPlay'))
  // // const Component = React.lazy(() => import(`${xx}`))
  // const Component = LazyComponent(React.lazy(() => import(`${xx}`)))

  // console.log('--------------------------');
  // console.log(Component);

  const menus = useRecoilValue(mainMenuState)
  const routes = menus.map((menu: any) => {
    const path = menu?.nested ? `${menu.path}/*` : menu.path
    const key = menu.id
    const title = menu.name
    // const componentPath = 'pages/hongPlay/HongPlay'
    // const Comp = React.lazy(() => import(menu.componentPath))
    // const p = 'pages/hongPlay/HongPlay'
    const Component = React.lazy(() => import(`pages/${menu.component}`))
    return (
      <Route
        key={key}
        path={path}
        element={
          <React.Suspense fallback={<>...</>}>
            <Component
              title={title}
            />
          </React.Suspense>
        }
      />
    )
  })

  return (
    <div className="container is-fluid">
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {routes}
      </Routes>
    </div>
  );
}

export default Content
