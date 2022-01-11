import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
// import Main from './layout/main/Main';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';
import Rest, { RestRequestConfig } from 'service/Rest';

async function bootstrapApp() {
  const config = await Rest.get('/config')
  const menus = await Rest.get('/menu')
  // console.log(server_config)
  return {
    config,
    menus
  }
}

function App() {

  // const [loading, setloadStatus] = useState(true)
  const setMainMenuList = useSetRecoilState(MainMenuState)
  // let MainPage = (<></>)
  const Main = React.lazy(() => {
    return bootstrapApp().then(d => {
      console.log(d)
      setMainMenuList(d.menus)
      return import('./layout/main/Main')
    })
  })
  
  return (
    <div className="App">
      <Suspense fallback={<>Loading ...</>}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
