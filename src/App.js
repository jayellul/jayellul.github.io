import React from 'react';

import './App.css';
import './fonts/tex.css';
import './fonts/inter.css';

import Homepage from './containers/Homepage';
import Aboutpage from './containers/Aboutpage';
import Profilepage from './containers/Profilepage';

function App() {

  return (
    <div className="App">
      <Homepage />
      <Aboutpage />
      <Profilepage />
    </div>
  );
}

export default App;
