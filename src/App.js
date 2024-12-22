import AppLayout from "components/layout/AppLayout";
import GitHubRepositories from "components/sections/GitHubRepositoriesCarousel";
import SkillsSection from "components/sections/SkillsSection";
import WorkExperience from "components/sections/workExperience";
import { DarkModeProvider } from "context/DarkModeProvider";
import "./App.css";
import About from "./components/sections/about";
const App = () => {
  return (
    <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Contenido de la aplicación */}
      <DarkModeProvider>
        <AppLayout>
          <About />
          <WorkExperience />
          <GitHubRepositories username={"EdsonVillarroel"}/>
          <SkillsSection />
        </AppLayout>
      </DarkModeProvider>
    </div>
  );
};

export default App;
