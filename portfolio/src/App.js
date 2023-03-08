import "./App.css";
import React, { Component } from 'react';
import HeaderPage from "./header/headerPage";
import About from "./about/about";
import WorkExperience from "work-experience/workExperience";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPage></HeaderPage>
        <About></About>
        <WorkExperience></WorkExperience>
      </div>
    );
  }
}

export default App;
