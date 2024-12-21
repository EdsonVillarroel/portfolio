import { cloneElement } from "react";
import {
    FaFacebookSquare,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
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
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-white dark:from-gray-800 dark:to-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información del desarrollador */}
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Edson Villarroel Ricaldes. All
            rights reserved.
          </p>

          {/* Enlaces de redes sociales */}
          <ul className="flex space-x-6">
            {socialLinks.map(({ href, icon }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition duration-300"
                >
                  {cloneElement(icon, { size: "1.5rem" })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
