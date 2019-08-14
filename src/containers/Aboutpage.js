import React, { Component } from 'react';


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
        <p className='aboutpage-text'>Hello</p>
        {/* <img className='pic-selfie' src={me}></img> */}
      </div>
    )
  }
}


export default Aboutpage;
