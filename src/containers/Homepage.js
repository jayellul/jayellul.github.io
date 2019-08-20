import React, { Component } from 'react';
import Rellax from 'rellax';
import '../css/Homepage.css';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    // Add Rellax style to components
    new Rellax('.rellax', { center: true });
    // Not centered rellax
    new Rellax('.rellax-default', {});
    // window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    const { height } = this.state;
    const half = height / 2;
    console.log(this.state);
    return (
      <div className='homepage-wrapper'>
        <div style={{ background: '#000', position: 'fixed', left: 0, bottom: 0, width: '100vw', height: '50%' }} />
        <div style={{ height: '100vh', position: 'relative' }}>
          <div style={{ height: '50%', display: 'flex' }}>
            <h1 className='title-name'>JASON ELLUL</h1>
          </div>
          <div style={{ height: '50%', display: 'flex' }}>
            <div className='text-container'>
              <p className='homepage-text rellax-default' data-rellax-speed="-0.5" data-rellax-percentage="0.5">User interface designer.</p>
              <p className='homepage-text rellax-default' data-rellax-speed="-1.0" data-rellax-percentage="0.5">Full stack mobile &amp; web developer.</p>
              <p className='homepage-text rellax-default' data-rellax-speed="-1.5" data-rellax-percentage="0.5">SoundCloud artist.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Homepage;
