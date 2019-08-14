import React, { Component } from 'react';


import '../css/Homepage.css';

import me from '../img/me.png';
import jg from '../img/jg.jpeg';

class Homepage extends Component {
  render() {
    return (
      <div className='homepage-wrapper'>
        {/* <div className='homepage-background' style={{ backgroundImage: `url(${me})` }} /> */}
        <div style={{ background: '#000', position: 'fixed', left: 0, bottom: 0, width: '100vw', height: '50vh' }} />
        {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '50vw', height: '50vh' }} className='gradient-pink' /> */}
        <div style={{ position: 'relative' }}>
          <h1 className='title-name'>JASON <span>ELLUL</span></h1>
          <div className='text-container'>
            <p className='homepage-text'>User interface designer.</p>
            <p className='homepage-text'>Full stack mobile &amp; web developer.</p>
            <p className='homepage-text'>Cool guy.</p>
          </div>
        </div>
      </div >
    )
  }
}


export default Homepage;
