import React, { Component } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGit,FaAngular } from 'react-icons/fa';
import './skills.css';

class skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      offsets: [0, 0, 0, 0],
    };
    this.skillsRef = React.createRef();
    this.skillsOffset = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.skillsOffset = this.skillsRef.current.offsetTop - window.innerHeight / 2;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    const visible = scrollTop > this.skillsOffset;
    if (visible) {
      this.animateSkills();
    }
    this.setState({ visible });
  };

  animateSkills = () => {
    const intervals = [];
    const { offsets } = this.state;
    const percentages = [90, 85, 80, 70];
    percentages.forEach((percent, i) => {
      intervals[i] = setInterval(() => {
        if (offsets[i] >= percent) {
          clearInterval(intervals[i]);
          return;
        }
        offsets[i] += 1;
        this.setState({ offsets });
      }, 10);
    });
  };

  render() {
    const { visible, offsets } = this.state;
    return (
      <section id="skills" className="skills" ref={this.skillsRef}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <Skill icon={<FaHtml5 />} percent={offsets[0]} visible={!visible} />
          <Skill icon={<FaCss3Alt />} percent={offsets[1]} visible={!visible} />
          <Skill icon={<FaReact />} percent={offsets[2]} visible={!visible} />
          <Skill icon={<FaGit />} percent={offsets[3]} visible={!visible} />
          <Skill icon={<FaAngular />} percent={offsets[3]} visible={!visible} />
          {/* <Skill icon={<FaJavaScript />} percent={offsets[3]} visible={!visible} /> */}
        </div>
      </section>
    );
  }
}

class Skill extends Component {
  render() {
    const { icon, percent, visible } = this.props;
    const svgClass = `progress-ring__circle ${visible ? 'visible' : ''}`;
    const percentageClass = `skill-percentage ${visible ? '' : 'visible'}`;
    return (
      <div className="skill">
        <div className="skill-icon">{icon}</div>
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring__circle--bg"
            stroke="#ddd"
            strokeWidth="8"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"
          />
          <circle
            className={svgClass}
            stroke="#f9423a"
            strokeWidth="8"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"
            strokeDasharray="326"
            strokeDashoffset={326 - (326 * percent) / 100}
          />
        </svg>
        <div className={percentageClass}>
          <div className="percentage-text">{`${percent}%`}</div>
        </div>
      </div>
    );
  }
}

export default skills;
