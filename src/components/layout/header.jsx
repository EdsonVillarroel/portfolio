import { useDarkMode } from "context/DarkModeProvider";
import { cloneElement } from "react";
import {
    FaChevronDown,
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

        techStack = ["Angular", "React.js", "Next.js", ".NET", "TypeScript"];

    return (
        <div id="home" className="relative w-full h-screen overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{"backgroundImage": `url(${capyBackground})`}}
            />

            {/* Dark sophisticated overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/92 via-slate-900/80 to-slate-900/95" />

            {/* Orange accent stripe at top */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            {/* Dark Mode Toggle */}
            <button
                aria-label="Toggle dark mode"
                onClick={toggleDarkMode}
                className="absolute top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
            >
                {!isDarkMode ? (
                    <FaSun size={18} />
                ) : (
                    <FaMoon size={18} />
                )}
            </button>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-16">

                {/* Availability Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white/90 text-sm font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400" />
                    Disponible para nuevas oportunidades
                </div>

                {/* Profile Image */}
                <div className="mb-7 relative">
                    <div className="relative w-36 h-36 md:w-40 md:h-40">
                        {/* Animated outer ring */}
                        <div
                            className="absolute -inset-2 rounded-full animate-pulse-ring"
                            style={{"border": "2px solid rgba(249,115,22,0.35)"}}
                        />
                        {/* Profile photo with ring */}
                        <img
                            src={userProfile}
                            alt="Edson Villarroel"
                            className="w-full h-full rounded-full object-cover ring-4 ring-orange-400 ring-offset-4 ring-offset-slate-900 shadow-2xl"
                        />
                    </div>
                </div>

                {/* Name */}
                <h1 className="font-bold text-white text-2xl md:text-4xl mb-3 whitespace-nowrap tracking-tight">
                    Edson Villarroel Ricaldes
                </h1>

                {/* Role */}
                <p className="text-lg md:text-xl text-white/85 font-medium mb-4 tracking-wide">
                    Full Stack Developer
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-orange-500 mb-5" />

                {/* Tech stack pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-lg">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 backdrop-blur-sm border border-white/20 rounded-full text-white/75 text-xs font-medium tracking-wide"
                            style={{"background": "rgba(255,255,255,0.1)"}}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contact")?.scrollIntoView({"behavior": "smooth"});
                        }}
                        className="px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 text-sm"
                    >
                        Contáctame
                    </a>
                    <a
                        href="#experience"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#experience")?.scrollIntoView({"behavior": "smooth"});
                        }}
                        className="px-7 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm"
                    >
                        Ver Experiencia
                    </a>
                </div>

                {/* Social Links */}
                <ul className="flex justify-center space-x-5">
                    {socialLinks.map(({href, icon, label}, index) => (
                        <li key={index}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-orange-400 transition-all duration-300 hover:scale-110 block"
                                aria-label={label}
                            >
                                {cloneElement(icon, {"size": "1.4rem"})}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
                <span className="tracking-widest uppercase text-[10px]">Scroll</span>
                <FaChevronDown className="animate-scroll-down" size={12} />
            </div>
        </div>
    );

};

export default Header;
