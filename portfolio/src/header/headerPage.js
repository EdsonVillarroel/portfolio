import React, { Component } from "react";
import "./headerPage.css";
// import "./../icomoon.css";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

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
                <p></p><ul>
                <li><a href="#"><i className="icon-twitter2"></i></a></li>
									<li><a href="#"><i className="icon-facebook2"></i></a></li>
									<li><a href="#"><i className="icon-linkedin2"></i></a></li>
									<li><a href="#"><i className="icon-dribbble2"></i></a></li>
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
