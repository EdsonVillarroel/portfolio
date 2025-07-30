import { useCallback, useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<Element | null>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

/**
 * Custom hook for intersection observer
 * Provides intersection detection for animations and lazy loading
 */
export const useIntersectionObserver = (
    options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {

    const [isIntersecting, setIsIntersecting] = useState(false),
        [entry, setEntry] = useState<IntersectionObserverEntry | null>(null),
        ref = useRef<Element>(null),

        {threshold = 0, rootMargin = "0px", root = null} = options,

        handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {

            const [entry] = entries;
            setIsIntersecting(entry.isIntersecting);
            setEntry(entry);

        }, []);

    useEffect(() => {

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin,
            root
        });

        observer.observe(element);

        return () => {

            observer.disconnect();

        };

    }, [handleIntersection, threshold, rootMargin, root]);

    return {ref,
        isIntersecting,
        entry};

};
