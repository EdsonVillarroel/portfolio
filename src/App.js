import "./App.css";
import React, { Component } from "react";
import HeaderPage from "./header/headerPage";
import About from "./about/about";
import WorkExperience from "work-experience/workExperience";
import MyServices from "my-services/myServices";
import Skills from "skills/skills";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

class App extends Component {
  render() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //   apiKey: "AIzaSyDuglKpJ04Rj4bvzeSDJwq_Eg1ue7HPo_Y",
    //   authDomain: "edson-villarroel.firebaseapp.com",
    //   projectId: "edson-villarroel",
    //   storageBucket: "edson-villarroel.appspot.com",
    //   messagingSenderId: "180075244298",
    //   appId: "1:180075244298:web:1ffe43504d4a65a3f968f3",
    //   measurementId: "G-BYY29BYTS4",
    // };

    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
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
