import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(() => {

        const savedTheme = localStorage.getItem("theme"),
            prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches,
            initialMode = savedTheme === "dark" || (!savedTheme && prefersDark);
        console.log("Initial dark mode:", initialMode);
        return initialMode;

    });

    useEffect(() => {

        console.log("Dark mode changed to:", isDarkMode);
        if (isDarkMode) {

            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");

        } else {

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");

        }

    }, [isDarkMode]);

    const toggleDarkMode = () => {

        console.log("Toggle dark mode called, current state:", isDarkMode);
        setIsDarkMode((prev) => !prev);

    };

    return (
        <DarkModeContext.Provider value={{isDarkMode,
            toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );

};

export const useDarkMode = () => {

    const context = useContext(DarkModeContext);
    if (context === undefined) {

        throw new Error("useDarkMode must be used within a DarkModeProvider");

    }
    return context;

};
