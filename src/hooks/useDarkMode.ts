import { useCallback, useEffect, useState } from "react";

interface UseDarkModeReturn {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

/**
 * Custom hook for managing dark mode state
 * Provides dark mode functionality with localStorage persistence
 */
export const useDarkMode = (): UseDarkModeReturn => {

    const [isDarkMode, setIsDarkMode] = useState(() => {

        // Check localStorage first, then system preference
        const savedTheme = localStorage.getItem("theme"),
            prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return savedTheme === "dark" || (!savedTheme && prefersDark);

    });

    useEffect(() => {

        // Update document class and localStorage when dark mode changes
        if (isDarkMode) {

            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");

        } else {

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");

        }

    }, [isDarkMode]);

    const toggleDarkMode = useCallback(() => {

        setIsDarkMode(prev => !prev);

    }, []);

    return {isDarkMode,
        toggleDarkMode};

};
