import GitHubRepositories from "components/sections/GitHubRepositoriesCarousel";
import { Helmet } from "react-helmet";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import About from "./components/sections/about";
import Contact from "./components/sections/Contact";
import SkillsSection from "./components/sections/SkillsSection";
import WorkExperience from "./components/sections/workExperience";

const App = () => {

  return (
    <>
      <Helmet>
        <title>Edson Villarroel Ricaldes - Desarrollador Frontend | Angular | React.js | Next.js</title>
        <meta name="description" content="Portfolio de Edson Villarroel Ricaldes, desarrollador frontend con experiencia en Angular, React.js y Next.js. Especializado en desarrollo web de alta calidad con código limpio y arquitectura modular." />
        <meta name="keywords" content="desarrollador frontend, angular, react.js, next.js, javascript, typescript, bolivia, santa cruz" />
        <meta name="author" content="Edson Villarroel Ricaldes" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edsonvillarroel.github.io/portfolio/" />
        <meta property="og:title" content="Edson Villarroel Ricaldes - Desarrollador Frontend" />
        <meta property="og:description" content="Portfolio de Edson Villarroel Ricaldes, desarrollador frontend con experiencia en Angular, React.js y Next.js." />
        <meta property="og:image" content="https://edsonvillarroel.github.io/portfolio/static/media/user-3.webp" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edsonvillarroel.github.io/portfolio/" />
        <meta property="twitter:title" content="Edson Villarroel Ricaldes - Desarrollador Frontend" />
        <meta property="twitter:description" content="Portfolio de Edson Villarroel Ricaldes, desarrollador frontend con experiencia en Angular, React.js y Next.js." />
        <meta property="twitter:image" content="https://edsonvillarroel.github.io/portfolio/static/media/user-3.webp" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://edsonvillarroel.github.io/portfolio/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f97316" />
      </Helmet>

      <div className="App min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <AppLayout>
          <About />
          <WorkExperience />
          <SkillsSection />
          {/* <Education /> */}
          <Contact />
          <GitHubRepositories username="EdsonVillarroel" />
        </AppLayout>
      </div>
    </>
  );

};

export default App;
