import React, { Component } from "react";
import "./headerPage.css";
// import { FaBeer } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  // FaBriefcase
} from 'react-icons/fa';


class HeaderPage extends Component {
  render() {
    return (
      <div id="page">
        <header className="container header">
          <div className="overlay"></div>
          <div className="content">
            <div className="table">
              <div className="display">
                <div className="profile"></div>
                <h1>
                  <span className="span-text">-Edson Villarroel Ricaldes-</span>
                </h1>
                <h3 className="h3-text">
                  {" "}
                  <span className="span-text">Web developer / mobile developer</span>
                </h3>
                <p></p>
                <ul className="icon-container">
                  <li className="icon" >
                    <a  href="https://www.facebook.com/edsito.villarroelricaldes">

                  <FaFacebookSquare color="white" size={'2rem'}/>
                    </a>
                  </li>
                  <li className="icon">
                    <a href="https://www.linkedin.com/in/edsonvillarroelricaldes/">
                    <FaLinkedin color="white" size={'2rem'} />

                    </a>
                  </li>
                  <li className="icon">
                    <a href="www.facebook.com">
                    <FaTwitter color="white" size={'2rem'} />

                    </a>
                  </li>
                  <li className="icon">
                    <a href="https://www.instagram.com/edson_villarroel_ricaldes/?next=%2F">
                    <FaInstagram color="white" size={'2rem'} />

                    </a>
                  </li>
                  <li className="icon">
                    <a href="https://github.com/EdsonVillarroel">
                    <FaGithub color="white" size={'2rem'} />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default HeaderPage;
