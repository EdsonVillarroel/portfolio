import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="container-about">
        <div className="container-title">
          <div className="title">
            <h2 className="about-title">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="container-personal-info">
            <ul className="info">
              <li className="personal-data">
                <span className="first-block span">Full Name:</span>
                <span className="second-block span">
                  Edson Villarroel Ricaldes
                </span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Phone:</span>
                <span className="second-block span">+591 73690866</span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Email:</span>
                <span className="second-block span">villarroel@gmail.com</span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Website:</span>
                <span className="second-block span">www.yoursite.com</span>
              </li>
              <li className="personal-data">
                <span className="first-block span">Address:</span>
                <span className="second-block span">Santa Cruz de la sierra Av. libertad N.- 18</span>
              </li>
            </ul>
          </div>
          <div className="container-presentaion">
            <h2 className="title-hello">Hello There!</h2>
            <p className="content-presetation">
              There live the blind texts far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in
              bookmarksgrove there live the blind texts far from the countries.
            </p>
            <p className="content-presetation">
              Far far away, behind the word mountains, Quos quia provident
              consequuntur culpa facere ratione maxime commodi voluptates id
              repellat velit eaque aspernatur expedita. Possimus itaque adipisci
              there live the blind texts from the countries Vokalia and
              Consonantia, there live the blind texts. Quos quia provident
              consequuntur culpa facere ratione maxime commodi voluptates id
              repellat velit eaque aspernatur expedita. Possimus itaque
              adipisci.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
