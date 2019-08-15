import React, { Component } from 'react';
import Rellax from 'rellax';


import '../css/Aboutpage.css';

import me from '../img/me.png';

import github from '../img/github.png';
import appstore from '../img/appstore.png';

class Aboutpage extends Component {

  constructor(props) {
    super(props);
    this.state = { white: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll(event) {
    if (!this.state.white && (window.scrollY > window.innerHeight / 2)) {
      this.setState({ white: true });
    } else if (this.state.white && (window.scrollY <= window.innerHeight / 2)) {
      this.setState({ white: false });
    }
  }

  render() {
    const { white } = this.state;
    console.log(white);
    return (
      <div className='aboutpage-wrapper' style={{ backgroundColor: white ? '#fff' : '#000' }}>
        <p className='aboutpage-text rellax-1'>Recent Works</p>
        {/* <img className='pic-selfie' src={me}></img> */}
        {/* Motive */}
        <div className='project-wrapper'>
          <div className='project-text-wrapper'>
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
      </div>
    )
  }
}


export default Aboutpage;
