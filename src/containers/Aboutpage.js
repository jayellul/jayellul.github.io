import React, { Component } from 'react';
import Rellax from 'rellax';


import '../css/Aboutpage.css';

import me from '../img/me.png';

import github from '../img/github.png';
import appstore from '../img/appstore.png';

import motivemap from '../img/motive-map.png';
import motiveposts from '../img/motive-posts.png';

import securcorhome from '../img/securcor-home.jpg';
import securcormission from '../img/securcor-mission.jpg';

class Aboutpage extends Component {

  constructor(props) {
    super(props);
    this.state = { white: false, motive: false, securcor: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    // If offset is in component
    if (!this.state.white && (window.scrollY > window.innerHeight / 2)) {
      this.setState({ white: true });
    } else if (this.state.white && (window.scrollY <= window.innerHeight / 2)) {
      this.setState({ white: false });
    }
    const scrollHeightRatio = window.scrollY / window.innerHeight;
    // If is in Motive section
    console.log(scrollHeightRatio);
    if (!this.state.motive && (scrollHeightRatio >= 0.75 && scrollHeightRatio <= 1.25)) {
      this.setState({ motive: true });
    } else if (this.state.motive && (scrollHeightRatio < 0.75 || scrollHeightRatio > 1.25)) {
      this.setState({ motive: false });
    }
    if (!this.state.securcor && (scrollHeightRatio >= 1.75 && scrollHeightRatio <= 2.25)) {
      this.setState({ securcor: true });
    } else if (this.state.securcor && (scrollHeightRatio < 1.75 || scrollHeightRatio > 2.25)) {
      this.setState({ securcor: false });
    }
  }

  render() {
    const { white, motive, securcor } = this.state;
    console.log('rerender');
    return (
      <div className='aboutpage-wrapper' style={{ backgroundColor: white ? '#fff' : '#000' }}>
        <div className='aboutpage-text-wrapper'>
          <p className='aboutpage-text'>Recent Works</p>
        </div>
        {/* <img className='pic-selfie' src={me}></img> */}
        {/* Motive */}
        <div className='project-wrapper'>
          <div className='project-text-wrapper rellax2' style={{ opacity: motive ? 1 : 0, WebkitFilter: motive ? 'blur(0px)' : 'blur(5px)' }}>
            <p className='project-title'>Motive</p>
            <p className='project-text'>Motive is a map-based social network I founded where users post events onto a map for their friends and followers to see.
                Other users can then comment on or announce that they are going to the posts.</p>
            {/* Motive access buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
              <div onClick={() => window.open("https://apps.apple.com/us/app/motive/id1448925991", "_blank")} className='button-appstore'>
                <img src={appstore} style={{ height: '2.4em' }} />
              </div>
              <div onClick={() => window.open("https://github.com/JasonEllul/Motive", "_blank")} className='button-github'>
                <img src={github} style={{ height: '1.2em' }} />
              </div>
            </div>
          </div>
          <div className='motive-pic-wrapper'>
            <div className='motive-pic-2' style={{ backgroundImage: `url(${motiveposts})`, backgroundPosition: motive ? 'center bottom' : 'center 100vh', opacity: motive ? 1 : 0 }} />
            <div className='motive-pic-1' style={{ backgroundImage: `url(${motivemap})`, backgroundPosition: motive ? 'center bottom' : 'center 100vh', opacity: motive ? 1 : 0 }} />
          </div>
        </div>
        {/* Securcor */}
        <div className='project-wrapper'>
          <div className='project-text-wrapper rellax2' style={{ opacity: securcor ? 1 : 0, WebkitFilter: securcor ? 'blur(0px)' : 'blur(5px)' }}>
            <p className='project-title'>Securcor</p>
            <p className='project-text'>Designed and implemented the external website for Securcor Financial Group. </p>
            {/* Securcor access buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
              <div onClick={() => window.open("https://securcor.com", "_blank")} className='button-primary'>
                <p>Visit Site</p>
              </div>
              <div onClick={() => window.open("coop", "_blank")} className='button-secondary'>
                <p>Read More</p>
              </div>
            </div>
          </div>
          {/* Pictures of design */}
          <div className='securcor-pic-2' style={{ backgroundImage: `url(${securcormission})`, opacity: securcor ? 1 : 0 }} />
        </div>
      </div >
    )
  }
}


export default Aboutpage;
