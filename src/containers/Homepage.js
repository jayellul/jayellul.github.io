import React, { Component } from 'react';
import '../css/Homepage.css';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const half = this.state.height / 2;
    console.log(this.state);
    return (
      <div className='homepage-wrapper' >
        <div style={{ background: '#000', position: 'fixed', left: 0, bottom: 0, width: '100vw', height: '50vh' }} />
        <div style={{ height: '100vh', position: 'relative' }}>
          <div style={{ height: '50%', display: 'flex', }}>
            <h1 className='title-name'>JASON ELLUL</h1>
          </div>
          <div style={{ height: '50%', display: 'flex' }}>
            <div className='text-container'>
              <p className='homepage-text'>User interface designer.</p>
              <p className='homepage-text'>Full stack mobile &amp; web developer.</p>
              <p className='homepage-text'>SoundCloud rapper.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Homepage;
