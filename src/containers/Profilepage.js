import React, { Component } from 'react';

import '../css/Profilepage.css';

import me from '../img/me.png';

class Profilepage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='profilepage-wrapper'>
        <img className='profilepage-image' src={me} />
        <div className='profilepage-text-container'>
          <h1 className='profilepage-title'>CLEAN DESIGNS</h1>
          <h1 className='profilepage-title'>&amp; SIMPLE CODE</h1>
          <p className='profilepage-text'>User interface designer.</p>
        </div>
      </div>
    )
  }
}


export default Profilepage;
