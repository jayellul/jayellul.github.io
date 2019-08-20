import React from 'react';

import './App.css';
import './fonts/tex.css';
import './fonts/inter.css';

import Homepage from './containers/Homepage';
import Aboutpage from './containers/Aboutpage';
import Profilepage from './containers/Profilepage';

import Resumepage from './containers/Resumepage';


function App() {

  return (
    <div className="App">
      <Homepage />
      <Aboutpage />
      <Profilepage />
      <Resumepage />
    </div>
  );
}

export default App;
