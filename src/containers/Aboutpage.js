import React, { Component } from 'react';

import '../css/Aboutpage.css';

import github from '../img/github.png';
import appstore from '../img/appstore.png';

import motivemap from '../img/motive-map.png';
import motiveposts from '../img/motive-posts.png';
import motiveprofile from '../img/motive-profile.png';

import tidyhome from '../img/tidy-home.png';
import tidyfeed from '../img/tidy-feed.png';

// GIMP Box Shadow: x: 0, y: 20, color: #000, opacity: 25, blur: 40
import securcormission from '../img/securcor-mission-shadow.jpg';

import hlportfolio from '../img/hl.jpg';

class Aboutpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      white: window.scrollY > window.innerHeight / 2,
      motive: false,
      tidy: false,
      securcor: false,
      hl: false,
    };
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
    if (!this.state.motive && scrollHeightRatio >= 0.82) {
      this.setState({ motive: true });
    }
    if (!this.state.tidy && scrollHeightRatio >= 1.82) {
      this.setState({ tidy: true });
    }
    if (!this.state.securcor && scrollHeightRatio >= 2.82) {
      this.setState({ securcor: true });
    }
    if (!this.state.hl && scrollHeightRatio >= 3.82) {
      this.setState({ hl: true });
    }
  }

  render() {
    const { white, motive, tidy, securcor, hl } = this.state;
    return (
      <div className='aboutpage-wrapper' style={{ backgroundColor: white ? '#fff' : '#000' }}>
        <div className='aboutpage-text-wrapper' style={{ color: white ? '#fff' : '#000' }}>
          <p className='aboutpage-text'>Recent Works</p>
          <a href='mailto:jason.j.ellul@gmail.com' className='aboutpage-contact'>Contact Me</a>
        </div>
        <div style={{ padding: '0 5vw', overflow: 'hidden' }}>
          {/* Motive */}
          <div className='project-wrapper'>
            <div className='motive-pic-3' style={{ backgroundImage: `url(${motiveposts})`, backgroundPosition: motive ? 'center bottom' : 'center 100vh', opacity: motive ? 1 : 0 }} />
            <div className='motive-pic-2' style={{ backgroundImage: `url(${motiveprofile})`, backgroundPosition: motive ? 'center bottom' : 'center 100vh', opacity: motive ? 1 : 0 }} />
            <div className='motive-pic-1' style={{ backgroundImage: `url(${motivemap})`, backgroundPosition: motive ? 'center bottom' : 'center 100vh', opacity: motive ? 1 : 0 }} />
            {/* Rellax container for parallax effect */}
            <div className='rellax' data-rellax-speed="5" data-rellax-percentage="0.5">
              <div className='project-text-wrapper' style={{ opacity: motive ? 1 : 0, filter: motive ? 'blur(0px)' : 'blur(5px)' }}>
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
            </div>
          </div>
          {/* Tidy */}
          <div className='project-wrapper'>
            <div className='tidy-pic-2' style={{ backgroundImage: `url(${tidyhome})`, backgroundPosition: tidy ? 'center bottom' : 'center 100vh', opacity: tidy ? 1 : 0 }} />
            <div className='tidy-pic-1' style={{ backgroundImage: `url(${tidyfeed})`, backgroundPosition: tidy ? 'center bottom' : 'center 100vh', opacity: tidy ? 1 : 0 }} />
            <div className='rellax' data-rellax-speed="5" data-rellax-percentage="0.5">
              <div className='project-text-wrapper' style={{ opacity: tidy ? 1 : 0, filter: tidy ? 'blur(0px)' : 'blur(5px)' }}>
                <p className='project-title'>Tidy</p>
                <p className='project-text'>Tidy is an app I created to keep track of chores around the house. Send your housemates friendly reminders in the form of push notifications to let them know they need to do some chores.</p>
                {/* Tidy access buttons */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                  <div onClick={() => window.open("https://testflight.apple.com/join/4RrExVH9", "_blank")} className='button-primary'>
                    <p>Beta Access</p>
                  </div>
                  <div onClick={() => window.open("https://github.com/JasonEllul/Tidy", "_blank")} className='button-github'>
                    <img src={github} style={{ height: '1.2em' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Securcor */}
          <div className='project-wrapper'>
            {/* Pictures of design */}
            <div className='website-pic-2' style={{ backgroundImage: `url(${securcormission})`, opacity: securcor ? 1 : 0 }} />
            <div className='rellax' data-rellax-speed="5" data-rellax-percentage="0.5">
              <div className='project-text-wrapper' style={{ opacity: securcor ? 1 : 0, filter: securcor ? 'blur(0px)' : 'blur(5px)' }}>
                <p className='project-title'>Securcor</p>
                {/* <p className='project-text'>Developed a complete aesthetic and technical overhaul for Securcor Financial Group's external website.</p> */}
                <p className='project-text'>External website for Securcor, a financial group in the securitization industry dedicated to reducing financing costs.</p>
                {/* Securcor access buttons */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                  <div onClick={() => window.open("http://securcor.com", "_blank")} className='button-primary'>
                    <p>Visit Site</p>
                  </div>
                  <div onClick={() => window.open("https://jasonellul.github.io/coop-reports/")} className='button-secondary'>
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HLonHLs */}
          <div className='project-wrapper'>
            {/* Pictures of design */}
            <div className='website-pic-2' style={{ backgroundImage: `url(${hlportfolio})`, opacity: hl ? 1 : 0 }} />
            <div className='rellax' data-rellax-speed="5" data-rellax-percentage="0.5">
              <div className='project-text-wrapper' style={{ opacity: hl ? 1 : 0, filter: hl ? 'blur(0px)' : 'blur(5px)' }}>
                <p className='project-title'>HLonHLs</p>
                <p className='project-text'>Portfolio website for the sports highlight video editor, highlightonhighlights.</p>
                {/* Securcor access buttons */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                  <div onClick={() => window.open("http://highlightonhighlights.com", "_blank")} className='button-primary'>
                    <p>Visit Site</p>
                  </div>
                  <div onClick={() => window.open("https://github.com/JasonEllul/editor-portfolio", "_blank")} className='button-github'>
                    <img src={github} style={{ height: '1.2em' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ minHeight: '20vh' }} />
        </div>
      </div >
    )
  }
}


export default Aboutpage;
