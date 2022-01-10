import React, { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import Main from './layout/main/Main';
import { useSetRecoilState } from 'recoil';
import { MainMenuState } from 'state';
import Rest, { RestRequestConfig } from 'service/Rest';
import withFetchData from 'helpers/withFetchData';

function App() {
  const MainWithMenus = withFetchData(Main, '/menu')
  return (
    <div className="App">
      <MainWithMenus />
    </div>
  );
}

export default App;
