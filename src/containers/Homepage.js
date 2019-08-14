import React, { Component } from 'react';
import '../css/Homepage.css';

import Dimensions from 'react-dimensions'

class Homepage extends Component {

  render() {
    const half = this.props.containerHeight / 2;
    console.log(this.props);
    return (
      <div className='homepage-wrapper'>
        <div style={{ background: '#000', position: 'fixed', left: 0, bottom: 0, width: '100vw', height: half }} />
        <div style={{ height: half, display: 'flex' }}>
          <h1 className='title-name'>JASON ELLUL</h1>
        </div>
        <div style={{ height: half, display: 'flex' }}>
          <div className='text-container'>
            <p className='homepage-text'>User interface designer.</p>
            <p className='homepage-text'>Full stack mobile &amp; web developer.</p>
            <p className='homepage-text'>SoundCloud rapper.</p>
          </div>
        </div>
      </div >
    )
  }
}


export default Dimensions()(Homepage);
