import { useCallback, useEffect, useState } from "react";

interface UseScrollPositionReturn {
  scrollY: number;
  scrollX: number;
  isScrolled: boolean;
}

/**
 * Custom hook for tracking scroll position
 * Provides scroll coordinates and whether page has been scrolled
 */
export const useScrollPosition = (): UseScrollPositionReturn => {

    const [scrollY, setScrollY] = useState(0),
        [scrollX, setScrollX] = useState(0),

        handleScroll = useCallback(() => {

            setScrollY(window.scrollY);
            setScrollX(window.scrollX);

        }, []);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll, {"passive": true});
        return () => window.removeEventListener("scroll", handleScroll);

    }, [handleScroll]);

    const isScrolled = scrollY > 50;

    return {scrollY,
        scrollX,
        isScrolled};

};
