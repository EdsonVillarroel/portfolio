import Footer from "footer/footer";
import { DarkModeProvider } from "hooks/DarkModeProvider";
import GitHubRepositories from "my-services/myServices";
import SkillsSection from "skills/skills";
import WorkExperience from "work-experience/workExperience";
import About from "./about/about";
import "./App.css";
import HeaderPage from "./header/headerPage";
const App = () => {

  return (
    <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Contenido de la aplicación */}
       <DarkModeProvider>
        <HeaderPage />
        <About />
        <WorkExperience />
        <GitHubRepositories />
        <SkillsSection />
        <Footer/>
       </DarkModeProvider>
    </div>
  );
};

export default App;
