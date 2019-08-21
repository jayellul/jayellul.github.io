import React, { Component } from 'react';

import '../css/Resumepage.css';

class Resumepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: false,
      link1: false,
      link2: false,
      link3: false,
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
    // If text block is in viewport...
    if (!this.state.title1 && this.title1 && this.title1.getBoundingClientRect().top - window.innerHeight < -200) {
      this.setState({ title1: true });
    }
    if (!this.state.link1 && this.link1 && this.link1.getBoundingClientRect().top - window.innerHeight < -200) {
      this.setState({ link1: true });
    }
    if (!this.state.link2 && this.link2 && this.link2.getBoundingClientRect().top - window.innerHeight < -200) {
      this.setState({ link2: true });
    }
    if (!this.state.link3 && this.link3 && this.link3.getBoundingClientRect().top - window.innerHeight < -200) {
      this.setState({ link3: true });
    }
  }


  render() {
    const { title1, link1, link2, link3, link4 } = this.state;
    return (
      <div className='resumepage-wrapper'>
        <div className='resumepage-text-container'>
          {/* Add div separators so highlight doesnt span entire width */}
          <div
            className='animated-text'
            ref={r => this.title1 = r}
            style={{
              opacity: title1 ? 1 : 0,
              transform: title1 ? 'translateY(0)' : 'translateY(60px)'
            }}
          >
            <p className='resumepage-text'>I have over <span>8 years of experience</span> in software development.</p>
          </div>
          <div
            className='animated-text'
            ref={r => this.link1 = r}
            style={{
              opacity: link1 ? 1 : 0,
              transform: link1 ? 'translateY(0)' : 'translateY(60px)'
            }}
          >
            <a className='resumepage-title'>VIEW MY RESUME</a>
          </div>
          <div
            className='animated-text'
            ref={r => this.link2 = r}
            style={{
              opacity: link2 ? 1 : 0,
              transform: link2 ? 'translateY(0)' : 'translateY(60px)'
            }}
          >
            <a href='https://github.com/JasonEllul'
              target='_blank'
              rel='noopener noreferrer'
              className='resumepage-title'
            >
              GITHUB
            </a>
          </div>
          <div
            className='animated-text'
            ref={r => this.link3 = r}
            style={{
              opacity: link3 ? 1 : 0,
              transform: link3 ? 'translateY(0)' : 'translateY(60px)'
            }}
          >
            <a href='https://www.linkedin.com/in/jason-ellul/'
              target='_blank'
              rel='noopener noreferrer'
              className='resumepage-title'
            >
              LINKEDIN
            </a>
          </div>
          <div
            className='animated-text'
            style={{
              opacity: link3 ? 1 : 0,
              transform: link3 ? 'translateY(0)' : 'translateY(60px)',
              transitionDelay: '0.15s'
            }}
          >
            <a href='https://stackoverflow.com/users/10153065/hackerman58888'
              target='_blank'
              rel='noopener noreferrer'
              className='resumepage-title'
            >
              STACKOVERFLOW
            </a>
          </div>
        </div>
        <div className='resumepage-footer'>
          <p className='resumepage-footer-text'>2019 &copy; Jason Ellul</p>
          <a href='mailto:jason.j.ellul@gmail.com' className='resumepage-footer-text'>Contact me</a>
        </div>
      </div>
    )
  }
}


export default Resumepage;
