import { cloneElement } from "react";
import {
    FaFacebookSquare,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {

    const socialLinks = [
        {
            "href": "https://www.facebook.com/edsito.villarroelricaldes",
            "icon": <FaFacebookSquare />,
            "ariaLabel": "Facebook"
        },
        {
            "href": "https://www.linkedin.com/in/edsonvillarroelricaldes/",
            "icon": <FaLinkedin />,
            "ariaLabel": "LinkedIn"
        },
        {
            "href": "https://twitter.com",
            "icon": <FaTwitter />,
            "ariaLabel": "Twitter"
        },
        {
            "href": "https://www.instagram.com/edson_villarroel_ricaldes/",
            "icon": <FaInstagram />,
            "ariaLabel": "Instagram"
        },
        {
            "href": "https://github.com/EdsonVillarroel",
            "icon": <FaGithub />,
            "ariaLabel": "GitHub"
        }
    ];

    return (
        <footer className="w-full bg-slate-900 dark:bg-slate-950 py-8 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                            EV
                        </span>
                        <span className="text-white/70 text-sm">
                            Edson Villarroel Ricaldes
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-500 text-xs">
                        &copy; {new Date().getFullYear()} · Todos los derechos reservados
                    </p>

                    {/* Social Links */}
                    <ul className="flex items-center space-x-4">
                        {socialLinks.map(({href, icon, ariaLabel}, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-orange-400 transition-all duration-300 hover:scale-110 block"
                                    aria-label={ariaLabel}
                                >
                                    {cloneElement(icon, {"size": "1.1rem"})}
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
