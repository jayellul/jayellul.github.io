import React, { Component } from "react";

import Resumepage from "./Resumepage";

import "../css/Profilepage.css";

import me from "../img/me.jpg";

class Profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: false,
      title2: false,
      text1: false,
      text2: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    // If text block is in viewport...
    if (
      !this.state.title1 &&
      this.title1 &&
      this.title1.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ title1: true });
    }
    if (
      !this.state.title2 &&
      this.title2 &&
      this.title2.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ title2: true });
    }
    if (
      !this.state.text1 &&
      this.text1 &&
      this.text1.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ text1: true });
    }
    if (
      !this.state.text2 &&
      this.text2 &&
      this.text2.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ text2: true });
    }
  }

  render() {
    const { title1, title2, text1, text2 } = this.state;
    console.log("rerender profilepage");
    return (
      <div className="profilepage-wrapper">
        <img
          className="profilepage-image rellax"
          data-rellax-speed="-5"
          data-rellax-percentage="0.5"
          src={me}
        />
        <div className="profilepage-text-container">
          <h1
            className="profilepage-title"
            ref={(r) => (this.title1 = r)}
            style={{
              opacity: title1 ? 1 : 0,
              transform: title1 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            CLEAN DESIGN
          </h1>
          <h1
            className="profilepage-title"
            ref={(r) => (this.title2 = r)}
            style={{
              opacity: title2 ? 1 : 0,
              transform: title2 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            &amp; CONCISE CODE
          </h1>
          <div
            className="profilepage-text-block"
            ref={(r) => (this.text1 = r)}
            style={{
              opacity: text1 ? 1 : 0,
              transform: text1 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            <p className="profilepage-text" style={{ marginTop: 18 }}>
              Experienced &amp; passionate individual
            </p>
            <p className="profilepage-text" style={{ marginBottom: 18 }}>
              looking for <span>design or development work.</span>
            </p>
          </div>
          <div
            className="profilepage-text-block"
            ref={(r) => (this.text2 = r)}
            style={{
              opacity: text2 ? 1 : 0,
              transform: text2 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            <p className="profilepage-text" style={{ marginTop: 18 }}>
              Can work alone or alongside your team
            </p>
            <p className="profilepage-text" style={{ marginBottom: 18 }}>
              <span>I'm also available for freelance.</span>
            </p>
          </div>
        </div>
        {/* Put resumepage within this page so that the text can overlap the picture */}
        <Resumepage />
      </div>
    );
  }
}

export default Profilepage;
