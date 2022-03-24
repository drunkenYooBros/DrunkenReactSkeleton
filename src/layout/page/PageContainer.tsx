import React from 'react';
import { useRecoilValue } from 'recoil';
import { mainMenuState } from "state";
import { Routes, Route, Outlet, Link } from "react-router-dom";


function PageContainer(props: any) {
  const menus = useRecoilValue(mainMenuState)
  const routes = menus.map((menu: any) => {
    const path = menu?.nested ? `${menu.path}/*` : menu.path
    const key = menu.id
    const title = menu.name
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
        {routes}
      </Routes>
    </div>
  );
}

export default PageContainer