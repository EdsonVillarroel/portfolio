/**
 * Performance monitoring utilities for the portfolio application
 */

import { PerformanceMetrics } from "../types";

/**
 * Measure and report Core Web Vitals
 */
export const measureCoreWebVitals = (): void => {

    // First Contentful Paint (FCP)
    new PerformanceObserver((list) => {

        for (const entry of list.getEntries()) {

            console.log("FCP:", entry.startTime);
            // Send to analytics service
            // analytics.track('FCP', entry.startTime);

        }

    }).observe({"entryTypes": ["paint"]});

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {

        for (const entry of list.getEntries()) {

            console.log("LCP:", entry.startTime);
            // Send to analytics service
            // analytics.track('LCP', entry.startTime);

        }

    }).observe({"entryTypes": ["largest-contentful-paint"]});

    // First Input Delay (FID)
    new PerformanceObserver((list) => {

        for (const entry of list.getEntries()) {

            const firstInputEntry = entry as PerformanceEventTiming;
            console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime);
            // Send to analytics service
            // analytics.track('FID', firstInputEntry.processingStart - firstInputEntry.startTime);

        }

    }).observe({"entryTypes": ["first-input"]});

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((list) => {

        for (const entry of list.getEntries()) {

            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {

                clsValue += layoutShiftEntry.value;
                console.log("CLS:", clsValue);
                // Send to analytics service
                // analytics.track('CLS', clsValue);

            }

        }

    }).observe({"entryTypes": ["layout-shift"]});

};

/**
 * Measure component render time
 */
export const measureComponentRender = (componentName: string): (() => void) => {

    const startTime = performance.now();

    return () => {

        const endTime = performance.now(),
            renderTime = endTime - startTime;
        console.log(`${componentName} render time:`, renderTime);

        // Send to analytics if render time is too high
        if (renderTime > 16) { // 60fps threshold

            console.warn(`${componentName} render time exceeded 16ms:`, renderTime);

        }

    };

};

/**
 * Measure API call performance
 */
export const measureApiCall = async <T>(
    apiCall: () => Promise<T>,
    endpoint: string
): Promise<T> => {

    const startTime = performance.now();

    try {

        const result = await apiCall(),
            endTime = performance.now(),
            duration = endTime - startTime;

        console.log(`${endpoint} API call duration:`, duration);

        // Send to analytics
        // analytics.track('API_CALL', { endpoint, duration });

        return result;

    } catch (error) {

        const endTime = performance.now(),
            duration = endTime - startTime;

        console.error(`${endpoint} API call failed after ${duration}ms:`, error);

        // Send error to analytics
        // analytics.track('API_ERROR', { endpoint, duration, error });

        throw error;

    }

};

/**
 * Get current performance metrics
 */
export const getPerformanceMetrics = (): PerformanceMetrics => {

    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

    return {
        "fcp": navigation?.domContentLoadedEventEnd || 0,
        "lcp": 0, // Will be updated by observer
        "fid": 0, // Will be updated by observer
        "cls": 0, // Will be updated by observer
        "ttfb": navigation?.responseStart - navigation?.requestStart || 0
    };

};

/**
 * Monitor memory usage
 */
export const monitorMemoryUsage = (): void => {

    if ("memory" in performance) {

        const memory = (performance as any).memory;
        console.log("Memory usage:", {
            "usedJSHeapSize": memory.usedJSHeapSize,
            "totalJSHeapSize": memory.totalJSHeapSize,
            "jsHeapSizeLimit": memory.jsHeapSizeLimit
        });

    }

};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {

    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {

        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);

    };

};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {

    let inThrottle: boolean;
    return (...args: Parameters<T>) => {

        if (!inThrottle) {

            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);

        }

    };

};

/**
 * Lazy load images for better performance
 */
export const lazyLoadImage = (img: HTMLImageElement): void => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const img = entry.target as HTMLImageElement;
                img.src = img.dataset.src || "";
                img.classList.remove("lazy");
                observer.unobserve(img);

            }

        });

    });

    observer.observe(img);

};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = (): void => {

    const criticalResources = [
        "/static/media/user-3.webp",
        "/static/media/capyWeb.webp"
    ];

    criticalResources.forEach((resource) => {

        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = resource;
        document.head.appendChild(link);

    });

};

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = (): void => {

    // Only in production
    if (process.env.NODE_ENV === "production") {

        measureCoreWebVitals();
        monitorMemoryUsage();
        preloadCriticalResources();

    }

};
