import React, { Component } from "react";
import "./workExperience.css";
import { FaBriefcase } from "react-icons/fa";

class workExperience extends Component {
  render() {
    return (
      <div>
        <div className="title-work-experience"><h3>My Resume</h3></div>
        <div>
          <div className="container-experience">
            <ul className="timeline">
              <li className="timeline-heading">
                <div>
                  <h3>Work Experience</h3>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <FaBriefcase color="white" size={"2rem"} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Senior Developer</h3>
                    <span className="company">
                      Company Name - 2016 - Current
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <FaBriefcase color="white" size={"2rem"} />
                </div>
                <div className="timeline-panel text-start">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Junior Developer</h3>
                    <span className="company">Company Name - 2013 - 2015</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <FaBriefcase color="white" size={"2rem"} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Senior Developer</h3>
                    <span className="company">
                      Company Name - 2016 - Current
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li>

              {/* <li class="timeline-heading text-center animate-box">
							<div><h3>Education</h3></div>
						</li>
              <li class="timeline-inverted animate-box">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Masters Degree</h3>
									<span class="company">University Name - 2007 - 2009</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li> */}
              {/* <li class="animate-box timeline-unverted">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Bachelors Degree</h3>
									<span class="company">University Name - 2002 - 2006</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li> */}
              {/* <li class="timeline-inverted animate-box">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Diploma Course</h3>
									<span class="company">College Name - 1999 - 2001</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li> */}
              {/* <li class="animate-box timeline-unverted">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Graduation</h3>
									<span class="company">College Name - 1994 - 1998</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default workExperience;
