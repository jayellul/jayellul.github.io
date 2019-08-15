import React, { Component } from 'react';
import Rellax from 'rellax';


import '../css/Aboutpage.css';

import me from '../img/me.png';

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
        <div className='project-wrapper'>
          <div className='project-text-wrapper'>
            <p className='project-title'>Motive</p>
            <p className='project-text'>Motive is a map-based social network I founded where users post events onto a map for their friends and followers to see.
                Other users can then comment on or announce that they are going to the posts.</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Aboutpage;
