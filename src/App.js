import "./App.css";
import React, { Component } from "react";
import HeaderPage from "./header/headerPage";
import About from "./about/about";
import WorkExperience from "work-experience/workExperience";
import MyServices from "my-services/myServices";
import Skills from "skills/skills";


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPage></HeaderPage>
        <About></About>
        <WorkExperience></WorkExperience>
        <MyServices></MyServices>
        <Skills></Skills>
      </div>
    );
  }
}

export default App;
