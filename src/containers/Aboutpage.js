import React, { Component } from 'react';

import '../css/Aboutpage.css';

import me from '../img/me.png';

import github from '../img/github.png';
import appstore from '../img/appstore.png';

import motivemap from '../img/motive-map.png';
import motiveposts from '../img/motive-posts.png';
import motiveprofile from '../img/motive-profile.png';

import tidyhome from '../img/tidy-home.png';
import tidyfeed from '../img/tidy-feed.png';

import securcorhome from '../img/securcor-home.jpg';
import securcormission from '../img/securcor-mission-shadow.jpg';

class Aboutpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      white: window.scrollY > window.innerHeight / 2,
      motive: false,
      tidy: false,
      securcor: false
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
    if (!this.state.motive && scrollHeightRatio >= 0.9) {
      this.setState({ motive: true });
    }
    if (!this.state.tidy && scrollHeightRatio >= 1.75) {
      this.setState({ tidy: true });
    }
    if (!this.state.securcor && scrollHeightRatio >= 2.65) {
      this.setState({ securcor: true });
    }
  }

  render() {
    const { white, motive, tidy, securcor } = this.state;
    console.log('rerender', motive, tidy, securcor);
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
                <p className='project-text'>Tidy is an app I created to keep track of chores around the house. Send your housemates push notifications to remind them to do their assigned chores.</p>
                {/* Tidy access buttons */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                  <div onClick={() => window.open("https://apps.apple.com/us/app/motive/id1448925991", "_blank")} className='button-primary'>
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
            <div className='securcor-pic-2' style={{ backgroundImage: `url(${securcormission})`, opacity: securcor ? 1 : 0 }} />
            <div className='rellax' data-rellax-speed="5" data-rellax-percentage="0.5">
              <div className='project-text-wrapper' style={{ opacity: securcor ? 1 : 0, filter: securcor ? 'blur(0px)' : 'blur(5px)' }}>
                <p className='project-title'>Securcor</p>
                <p className='project-text'>Developed a complete aesthetic and technical overhaul for Securcor Financial Group's external website.</p>
                {/* Securcor access buttons */}
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                  <div onClick={() => window.open("http://securcor.com", "_blank")} className='button-primary'>
                    <p>Visit Site</p>
                  </div>
                  <div onClick={() => window.open("coop", "_blank")} className='button-secondary'>
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}


export default Aboutpage;
