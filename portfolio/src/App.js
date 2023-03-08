import "./App.css";
import React, { Component } from 'react';
import HeaderPage from "./header/headerPage";
import About from "./about/about";
import WorkExperience from "work-experience/workExperience";
import  MyServices from "my-services/myServices";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPage></HeaderPage>
        <About></About>
        <WorkExperience></WorkExperience>
        <MyServices></MyServices>
      </div>
    );
  }
}

export default App;
