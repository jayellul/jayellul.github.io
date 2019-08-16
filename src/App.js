import React from 'react';

import './App.css';
import './fonts/tex.css';
import './fonts/inter.css';

import Homepage from './containers/Homepage';
import Aboutpage from './containers/Aboutpage';



function App() {

  return (
    <div className="App">
      <Homepage />
      <Aboutpage />
    </div>
  );
}

export default App;
