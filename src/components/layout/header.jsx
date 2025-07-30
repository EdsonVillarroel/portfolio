import { useDarkMode } from "context/DarkModeProvider";
import { cloneElement } from "react";
import {
    FaFacebookSquare,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMoon,
    FaSun,
    FaTwitter
} from "react-icons/fa";
import capyBackground from "../../assets/imgs/capyWeb.webp";
import userProfile from "../../assets/imgs/user-3.webp";
import TypingEffect from "../ui/TypingEffect";

const Header = () => {

    const {isDarkMode, toggleDarkMode} = useDarkMode(),

        socialLinks = [
            {
                "href": "https://www.facebook.com/edsito.villarroelricaldes",
                "icon": <FaFacebookSquare />,
                "label": "Facebook"
            },
            {
                "href": "https://www.linkedin.com/in/edsonvillarroelricaldes/",
                "icon": <FaLinkedin />,
                "label": "LinkedIn"
            },
            {
                "href": "https://twitter.com",
                "icon": <FaTwitter />,
                "label": "Twitter"
            },
            {
                "href": "https://www.instagram.com/edson_villarroel_ricaldes/",
                "icon": <FaInstagram />,
                "label": "Instagram"
            },
            {
                "href": "https://github.com/EdsonVillarroel",
                "icon": <FaGithub />,
                "label": "GitHub"
            }
        ],

        handleToggleDarkMode = () => {

            console.log("Toggle dark mode clicked, current mode:", isDarkMode);
            toggleDarkMode();

        };

    return (
        <div id="home" className="relative w-full h-screen overflow-hidden">
            <div
                className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed"
                style={{"backgroundImage": `url(${capyBackground})`}}
                loading="lazy"
            >
                {/* Dark Mode Toggle */}
                <button
                    aria-label="Toggle dark mode"
                    onClick={handleToggleDarkMode}
                    className={`absolute top-6 right-6 z-50 p-3 rounded-full transition duration-300 transform hover:scale-105 shadow-lg ${
                        isDarkMode
                            ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                            : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                >
                    {!isDarkMode ? (
                        <FaSun size={20} />
                    ) : (
                        <FaMoon size={20} />
                    )}
                </button>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-400/90 to-orange-200/90" />

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    {/* Profile Image */}
                    <div className="mb-8">
                        <div
                            className="w-32 h-32 mx-auto rounded-full bg-cover bg-center bg-no-repeat border-4 border-white shadow-2xl"
                            style={{"backgroundImage": `url(${userProfile})`}}
                            loading="lazy"
                        />
                    </div>

                    {/* Typing Effect */}
                    <TypingEffect />

                    {/* Title */}
                    <h3 className="text-2xl text-white font-semibold mt-6 mb-2">
            Desarrollador Frontend
                    </h3>

                    {/* Subtitle */}
                    <p className="text-lg text-white/90 font-medium mb-8">
            Angular • React.js • Next.js • JavaScript
                    </p>

                    {/* Social Links */}
                    <ul className="flex justify-center space-x-6">
                        {socialLinks.map(({href, icon, label}, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-orange-300 transition duration-300 transform hover:scale-110"
                                    aria-label={label}
                                >
                                    {cloneElement(icon, {"size": "1.75rem"})}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Header;
