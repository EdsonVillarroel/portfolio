import React, { Component } from "react";
import "./headerPage.css";
import { FaBeer } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaBriefcase
} from 'react-icons/fa';


class HeaderPage extends Component {
  render() {
    return (
      <div id="page">
        <header className="container">
          <div className="overlay"></div>
          <div className="content">
            {/* <div className="row"> */}
            <div className="table">
              <div className="display">
                <div className="profile"></div>
                <h1>
                  <span>-Edson Villarroel Ricaldes-</span>
                </h1>
                <h3>
                  {" "}
                  <span>Web developer / mobile developer</span>
                </h3>
                <p></p>
                <ul className="icon-container">
                  <li className="icon">
                  <FaFacebookSquare color="white" size={'2rem'} />
                  </li>
                  <li className="icon">
                    <a href="www.facebook.com">
                    <FaLinkedin color="white" size={'2rem'} />

                    </a>
                  </li>
                  <li className="icon">
                    <a href="www.facebook.com">
                    <FaTwitter color="white" size={'2rem'} />

                    </a>
                  </li>
                  <li className="icon">
                    <a href="www.facebook.com">
                    <FaInstagram color="white" size={'2rem'} />

                    </a>
                  </li>
                  <li className="icon">
                    <a href="www.facebook.com">
                    <FaGithub color="white" size={'2rem'} />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}
        </header>
      </div>
    );
  }
}
export default HeaderPage;
