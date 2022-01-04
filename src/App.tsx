import React, { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import Main from './layout/main/Main';
import Http from 'service/Http';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';

function App() {
  const [loading, setloadStatus] = useState(true)
  const setMainMenuList = useSetRecoilState(MainMenuState)
  useEffect(() => {
    Http.get('/menu')
    .then((res: any) => {
      setMainMenuList(res.body.menus)
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
