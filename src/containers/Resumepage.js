import React, { Component } from "react";

import "../css/Resumepage.css";

class Resumepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: false,
      link1: false,
      link2: false,
      link3: false,
      link4: false,
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
    // If text block is in viewport then animate in
    if (
      !this.state.title1 &&
      this.title1 &&
      this.title1.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ title1: true });
    }
    if (
      !this.state.link1 &&
      this.link1 &&
      this.link1.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ link1: true });
    }
    if (
      !this.state.link2 &&
      this.link2 &&
      this.link2.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ link2: true });
    }
    if (
      !this.state.link3 &&
      this.link3 &&
      this.link3.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ link3: true });
    }
    if (
      !this.state.link4 &&
      this.link4 &&
      this.link4.getBoundingClientRect().top - window.innerHeight < -100
    ) {
      this.setState({ link4: true });
    }
  }

  render() {
    const { title1, link1, link2, link3, link4 } = this.state;
    return (
      <div className="resumepage-wrapper">
        <div className="resumepage-text-container">
          {/* Add div separators so highlight doesnt span entire width */}
          <div
            className="animated-text"
            ref={(r) => (this.link1 = r)}
            style={{
              opacity: link1 ? 1 : 0,
              transform: link1 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            <a
              href={
                process.env.PUBLIC_URL + "/resources/Jason-Ellul-Resume.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="resumepage-title"
            >
              VIEW MY RESUME
            </a>
          </div>
          <div
            className="animated-text"
            ref={(r) => (this.link2 = r)}
            style={{
              opacity: link2 ? 1 : 0,
              transform: link2 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            <a
              href="https://github.com/jayellul"
              target="_blank"
              rel="noopener noreferrer"
              className="resumepage-title"
            >
              GITHUB
            </a>
          </div>
          <div
            className="animated-text"
            ref={(r) => (this.link3 = r)}
            style={{
              opacity: link3 ? 1 : 0,
              transform: link3 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            <a
              href="https://www.linkedin.com/in/jay-ellul/"
              target="_blank"
              rel="noopener noreferrer"
              className="resumepage-title"
            >
              LINKEDIN
            </a>
          </div>
          <div
            className="animated-text"
            ref={(r) => (this.link4 = r)}
            style={{
              opacity: link4 ? 1 : 0,
              transform: link4 ? "translateY(0)" : "translateY(60px)",
            }}
          >
            <a
              href="https://stackoverflow.com/users/10153065/hackerman58888"
              target="_blank"
              rel="noopener noreferrer"
              className="resumepage-title"
            >
              STACKOVERFLOW
            </a>
          </div>
        </div>
        <div className="resumepage-footer">
          <p className="resumepage-footer-text">2022&copy; Jay Ellul</p>
          <a
            href="mailto:jellul146@gmail.com"
            className="resumepage-footer-text"
          >
            Contact me
          </a>
        </div>
      </div>
    );
  }
}

export default Resumepage;
