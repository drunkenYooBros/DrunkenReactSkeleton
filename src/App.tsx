<<<<<<< HEAD
import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import Main from './layout/main/Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
=======
import React from 'react'
import './App.css'
import { RecoilRoot } from 'recoil'
import CharacterCounter from 'components/CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
>>>>>>> origin/main
  );
}

export default App;
