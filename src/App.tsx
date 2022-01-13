import React, { Suspense } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';
import apiPortal from 'api/apiPortal';
import Spinner from 'layout/spinner/Spinner';

function App() {
  const setMainMenuList = useSetRecoilState(MainMenuState)
  const Main = React.lazy(async () => {
    const data = await apiPortal.getBootStrapData();
    setMainMenuList(data.menu);
    return await import('./layout/main/Main');
  })
  return (
    <div className="App">
      <Suspense fallback={Spinner}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
