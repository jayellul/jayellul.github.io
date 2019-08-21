import React, { Component } from 'react';

import '../css/Resumepage.css';

class Resumepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: false
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
  }


  render() {
    const { title1 } = this.state;
    return (
      <div className='resumepage-wrapper'>
        <div className='resumepage-text-container'
          ref={r => this.title1 = r}
          style={{
            opacity: title1 ? 1 : 0,
            transform: title1 ? 'translateY(0)' : 'translateY(50%)'
          }}
        >
          {/* Add div separators so highlight doesnt span entire width */}
          <div>
            <p className='resumepage-text'>I have over <span>8 years of experience</span> in software development.</p>
          </div>
          <div>
            <a className='resumepage-title'>VIEW MY RESUME</a>
          </div>
          <div>
            <a href='https://github.com/JasonEllul'
              target='_blank'
              rel='noopener noreferrer'
              className='resumepage-title'
            >
              GITHUB
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/jason-ellul/'
              target='_blank'
              rel='noopener noreferrer'
              className='resumepage-title'
            >
              LINKEDIN
            </a>
          </div>
          <div>
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
