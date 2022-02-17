import React, { Suspense, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';
import apiPortal from 'api/apiPortal';
import Spinner from 'layout/spinner/Spinner';

export const bootStrapComponent = (Component: any) => (props: any) => {
  const setMainMenuList = useSetRecoilState(MainMenuState)
  useEffect(() => {
    apiPortal.getBootStrapData().then( (data) => {
      setMainMenuList(data.menu)
    })
  }, [])
  return (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  )
}


function App() {
  const Main = bootStrapComponent(React.lazy(() => import('layout/main/Main')));
  return (
    <>
      <Main/>
    </>
  );
}

export default App;
