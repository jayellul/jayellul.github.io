import React, { Component } from 'react';
import Rellax from 'rellax';


import '../css/Aboutpage.css';

import me from '../img/me.png';

import github from '../img/github.png';
import appstore from '../img/appstore.png';

import motivemap from '../img/motive-map.png';
import motiveprofile from '../img/motive-profile.png';

class Aboutpage extends Component {

  constructor(props) {
    super(props);
    this.state = { white: false, motive: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => this.handleScroll(e));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => this.handleScroll(e));
  }

  handleScroll(e) {
    if (!this.state.white && (window.scrollY > window.innerHeight / 2)) {
      this.setState({ white: true });
    } else if (this.state.white && (window.scrollY <= window.innerHeight / 2)) {
      this.setState({ white: false });
    }
    console.log(window.scrollY, window.innerHeight, window.scrollY / window.innerHeight);
    if (!this.state.motive && (window.scrollY / window.innerHeight >= 0.5 && window.scrollY / window.innerHeight <= 1.2)) {
      this.setState({ motive: true });
    } else if (this.state.motive && (window.scrollY / window.innerHeight < 0.5 || window.scrollY / window.innerHeight > 1.2)) {
      this.setState({ motive: false });
    }
  }

  render() {
    const { white, motive } = this.state;
    console.log('rerender');
    return (
      <div className='aboutpage-wrapper' style={{ backgroundColor: white ? '#fff' : '#000' }}>
        <p className='aboutpage-text rellax-0-5'>Recent Works</p>
        {/* <img className='pic-selfie' src={me}></img> */}
        {/* Motive */}
        <div className='project-wrapper'>
          <div className='motive-pic-2' style={{ backgroundImage: `url(${motiveprofile})`, backgroundPosition: motive ? 'center bottom' : 'center 100vh', opacity: motive ? 1 : 0 }} />
          <div className='motive-pic-1' style={{ backgroundImage: `url(${motivemap})`, backgroundPosition: motive ? 'center bottom' : 'center 100vh', opacity: motive ? 1 : 0 }} />
          <div className='project-text-wrapper rellax0-5'>
            <p className='project-title'>Motive</p>
            <p className='project-text'>Motive is a map-based social network I founded where users post events onto a map for their friends and followers to see.
                Other users can then comment on or announce that they are going to the posts.</p>
            {/* Motive access buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 26 }}>
              <div onClick={() => window.open("https://apps.apple.com/us/app/motive/id1448925991", "_blank")} className='button-appstore'>
                <img src={appstore} style={{ height: '2.4em' }} />
              </div>
              <div onClick={() => window.open("https://github.com/JasonEllul/Motive", "_blank")} className='button-github'>
                <img src={github} style={{ height: '1.2em' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='project-wrapper'>

        </div>
      </div>
    )
  }
}


export default Aboutpage;
