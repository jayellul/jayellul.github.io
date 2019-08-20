import React, { Component } from 'react';

import '../css/Resumepage.css';

class Resumepage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='resumepage-wrapper'>

        <div className='resumepage-footer'>
          <p className='resumepage-footer-text'>2019 &copy; Jason Ellul</p>
          <a href='mailto:jason.j.ellul@gmail.com' className='resumepage-footer-text'>Contact me</a>
        </div>
      </div>
    )
  }
}


export default Resumepage;
