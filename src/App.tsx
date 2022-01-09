import React, { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import Main from './layout/main/Main';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';
import Rest, { RestRequestConfig } from 'service/Rest';

function App() {
  const [loading, setloadStatus] = useState(true)
  const setMainMenuList = useSetRecoilState(MainMenuState)
  useEffect(() => {
    const restParams: RestRequestConfig = {
      url: '/menu'
    }
    Rest.get(restParams)
    .then((res: any) => {
      setMainMenuList(res)
      setloadStatus(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="App">
        Loading ...
      </div>
    )
  }
  
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
