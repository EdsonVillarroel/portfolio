import "./App.css";
import React, { Component } from 'react';
import HeaderPage from "./header/headerPage";
import About from "./about/about";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPage></HeaderPage>
        <About></About>
      </div>
    );
  }
}

export default App;
