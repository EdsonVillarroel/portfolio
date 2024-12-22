import TypingEffect from "components/ui/TypingEffect";
import { useDarkMode } from "context/DarkModeProvider";
import { cloneElement } from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTwitter,
} from "react-icons/fa";
import capyBackground from "../../assets/imgs/capyWeb.webp";
import userProfile from "../../assets/imgs/user-3.jpg";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div id="page" className="relative w-full h-screen overflow-hidden">
      <div
        className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${capyBackground})` }}
      >
        <button
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full transition duration-300 transform hover:scale-105 ${
            isDarkMode
              ? "bg-gray-800 text-yellow-400"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {!isDarkMode ? (
            <FaSun size={24} className="text-3xl text-orange-500" />
          ) : (
            <FaMoon size={24} className="text-3xl text-orange-500" />
          )}
        </button>

        <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-200 opacity-90"></div>

        <div className="relative z-10 text-center">
          <div
            className="w-48 h-48 mx-auto mb-8 rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${userProfile})` }}
          ></div>

          <TypingEffect />

          <h3 className="text-2xl text-white font-mono mt-4">
            <span>Web Developer / Mobile Developer</span>
          </h3>

          <ul className="flex justify-center mt-6 space-x-6">
            {[
              {
                href: "https://www.facebook.com/edsito.villarroelricaldes",
                icon: <FaFacebookSquare />,
              },
              {
                href: "https://www.linkedin.com/in/edsonvillarroelricaldes/",
                icon: <FaLinkedin />,
              },
              { href: "https://twitter.com", icon: <FaTwitter /> },
              {
                href: "https://www.instagram.com/edson_villarroel_ricaldes/",
                icon: <FaInstagram />,
              },
              {
                href: "https://github.com/EdsonVillarroel",
                icon: <FaGithub />,
              },
            ].map(({ href, icon }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition duration-300"
                >
                  {cloneElement(icon, { size: "2rem" })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header
;
