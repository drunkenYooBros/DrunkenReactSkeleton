import React, { Suspense } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';
import apiPortal from 'api/apiPortal';
import Spinner from 'layout/spinner/Spinner';

function App() {
  let menus
  const setMainMenuList = useSetRecoilState(MainMenuState)
  const Main = React.lazy(async () => {
    // menu 가져옴
    // user 정보 필요
    // code 정보
    const data = await apiPortal.getBootStrapData();
    setMainMenuList(data.menu);
    menus = data.menu
    return await import('./layout/main/Main');
  })
  return (
    <Suspense fallback={Spinner}>
      <div className="App">
        <Main/>
      </div>
    </Suspense>
  );
}

export default App;
