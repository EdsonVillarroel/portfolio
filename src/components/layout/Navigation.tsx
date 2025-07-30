import React, { memo, useCallback, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScrollPosition } from "../../hooks/useScrollPosition";

interface NavItem {
  href: string;
  label: string;
}

interface NavigationProps {
  className?: string;
}

/**
 * Optimized Navigation component with TypeScript and performance optimizations
 * Features smooth scrolling, mobile responsiveness, and accessibility
 */
export const Navigation: React.FC<NavigationProps> = memo(({className = ""}) => {

    const [isOpen, setIsOpen] = useState(false),
        {isScrolled} = useScrollPosition(),

        navItems: NavItem[] = [
            {"href": "#home",
                "label": "Inicio"},
            {"href": "#about",
                "label": "Sobre Mí"},
            {"href": "#experience",
                "label": "Experiencia"},
            {"href": "#skills",
                "label": "Habilidades"},
            {"href": "#education",
                "label": "Educación"},
            {"href": "#contact",
                "label": "Contacto"}
        ],

        handleNavClick = useCallback((href: string) => {

            setIsOpen(false);
            const element = document.querySelector(href);
            if (element) {

                element.scrollIntoView({"behavior": "smooth"});

            }

        }, []),

        handleKeyDown = useCallback((event: React.KeyboardEvent, href: string) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();
                handleNavClick(href);

            }

        }, [handleNavClick]);

    // Close mobile menu on escape key
    useEffect(() => {

        const handleEscape = (event: KeyboardEvent) => {

            if (event.key === "Escape" && isOpen) {

                setIsOpen(false);

            }

        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);

    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            } ${className}`}
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-orange-600 dark:text-orange-400">
              Edson Villarroel
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    aria-label={`Ir a sección ${item.label}`}
                                    tabIndex={0}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2 rounded-md"
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div
                        className="md:hidden"
                        id="mobile-menu"
                        role="menu"
                        aria-label="Menú móvil"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    role="menuitem"
                                    tabIndex={0}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

});

Navigation.displayName = "Navigation";
