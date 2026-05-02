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

export const Navigation: React.FC<NavigationProps> = memo(({className = ""}) => {

    const [isOpen, setIsOpen] = useState(false),
        [activeSection, setActiveSection] = useState("home"),
        {isScrolled} = useScrollPosition(),

        navItems: NavItem[] = [
            {"href": "#home", "label": "Inicio"},
            {"href": "#about", "label": "Sobre Mí"},
            {"href": "#experience", "label": "Experiencia"},
            {"href": "#skills", "label": "Habilidades"},
            {"href": "#contact", "label": "Contacto"}
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

    // Active section tracker
    useEffect(() => {
        const sections = navItems.map((item) => item.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];

        sections.forEach((sectionId) => {
            const el = document.getElementById(sectionId);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(sectionId);
                    }
                },
                {"threshold": 0.4}
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-800"
                    : "bg-transparent"
            } ${className}`}
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => handleNavClick("#home")}
                            className="flex items-center gap-2 group"
                            aria-label="Ir al inicio"
                        >
                            <span className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform duration-200">
                                EV
                            </span>
                            <span className={`text-sm font-semibold transition-colors duration-200 ${
                                isScrolled
                                    ? "text-gray-900 dark:text-white"
                                    : "text-white"
                            }`}>
                                Edson Villarroel
                            </span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const sectionId = item.href.replace("#", "");
                            const isActive = activeSection === sectionId;
                            return (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                                        isScrolled
                                            ? isActive
                                                ? "text-orange-600 dark:text-orange-400"
                                                : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                                            : isActive
                                                ? "text-orange-400"
                                                : "text-white/70 hover:text-white"
                                    }`}
                                    aria-label={`Ir a sección ${item.label}`}
                                    tabIndex={0}
                                >
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-500 rounded-full" />
                                    )}
                                </button>
                            );
                        })}

                        {/* Hire Me button */}
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="ml-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-orange-500/25"
                        >
                            Contrátame
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 p-2 rounded-md ${
                                isScrolled
                                    ? "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                                    : "text-white/80 hover:text-white"
                            }`}
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
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
                        <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-slate-900 rounded-xl shadow-xl mt-2 border border-gray-100 dark:border-slate-800">
                            {navItems.map((item) => {
                                const sectionId = item.href.replace("#", "");
                                const isActive = activeSection === sectionId;
                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        onKeyDown={(e) => handleKeyDown(e, item.href)}
                                        className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                                            isActive
                                                ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-400"
                                        }`}
                                        role="menuitem"
                                        tabIndex={0}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                            <div className="pt-2 px-2">
                                <button
                                    onClick={() => handleNavClick("#contact")}
                                    className="w-full px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                                >
                                    Contrátame
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

});

Navigation.displayName = "Navigation";
