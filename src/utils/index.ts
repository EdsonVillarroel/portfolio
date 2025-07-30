/**
 * Utility functions for the portfolio application
 */

import { AppError } from "../types";

/**
 * Debounce function to limit the rate at which a function can fire
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
 * Throttle function to limit the rate at which a function can fire
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
 * Format date to a readable string
 */
export const formatDate = (date: string | Date): string => {

    const d = new Date(date);
    return d.toLocaleDateString("es-ES", {
        "year": "numeric",
        "month": "long",
        "day": "numeric"
    });

};

/**
 * Format relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: string | Date): string => {

    const now = new Date(),
        past = new Date(date),
        diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 60) return "justo ahora";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutos atrás`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} horas atrás`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} días atrás`;

    return formatDate(date);

};

/**
 * Truncate text to a specified length
 */
export const truncateText = (text: string, maxLength: number): string => {

    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";

};

/**
 * Generate a random ID
 */
export const generateId = (): string => {

    return Math.random().toString(36)
        .substr(2, 9);

};

/**
 * Check if device is mobile
 */
export const isMobile = (): boolean => {

    return window.innerWidth <= 768;

};

/**
 * Check if device supports touch
 */
export const isTouchDevice = (): boolean => {

    return "ontouchstart" in window || navigator.maxTouchPoints > 0;

};

/**
 * Get viewport dimensions
 */
export const getViewportDimensions = () => ({
    "width": window.innerWidth,
    "height": window.innerHeight
});

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string, offset = 0): void => {

    const element = document.getElementById(elementId);
    if (element) {

        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            "top": elementPosition,
            "behavior": "smooth"
        });

    }

};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {

    try {

        await navigator.clipboard.writeText(text);
        return true;

    } catch (error) {

        console.error("Failed to copy text:", error);
        return false;

    }

};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

};

/**
 * Validate phone number format
 */
export const isValidPhone = (phone: string): boolean => {

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));

};

/**
 * Sanitize HTML content
 */
export const sanitizeHtml = (html: string): string => {

    const div = document.createElement("div");
    div.textContent = html;
    return div.innerHTML;

};

/**
 * Calculate reading time for text
 */
export const calculateReadingTime = (text: string): number => {

    const wordsPerMinute = 200,
        wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);

};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {

    if (bytes === 0) return "0 Bytes";
    const k = 1024,
        sizes = ["Bytes", "KB", "MB", "GB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];

};

/**
 * Create a class name utility
 */
export const classNames = (...classes: (string | undefined | null | false)[]): string => {

    return classes.filter(Boolean).join(" ");

};

/**
 * Handle async errors gracefully
 */
export const handleAsyncError = async <T>(
    promise: Promise<T>
): Promise<{ data: T | null; error: AppError | null }> => {

    try {

        const data = await promise;
        return {data,
            "error": null};

    } catch (error) {

        const appError: AppError = {
            "message": error instanceof Error ? error.message : "An unknown error occurred",
            "code": error instanceof Error ? error.name : "UNKNOWN_ERROR"
        };
        return {"data": null,
            "error": appError};

    }

};

/**
 * Retry function with exponential backoff
 */
export const retry = async <T>(
    fn: () => Promise<T>,
    retries = 3,
    delay = 1000
): Promise<T> => {

    try {

        return await fn();

    } catch (error) {

        if (retries === 0) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        return retry(fn, retries - 1, delay * 2);

    }

};

/**
 * Memoize function results
 */
export const memoize = <T extends (...args: any[]) => any>(
    fn: T
): T => {

    const cache = new Map();
    return ((...args: Parameters<T>) => {

        const key = JSON.stringify(args);
        if (cache.has(key)) {

            return cache.get(key);

        }
        const result = fn(...args);
        cache.set(key, result);
        return result;

    }) as T;

};

/**
 * Deep clone object
 */
export const deepClone = <T>(obj: T): T => {

    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj.getTime()) as T;
    if (obj instanceof Array) return obj.map(item => deepClone(item)) as T;
    if (typeof obj === "object") {

        const clonedObj = {} as T;
        for (const key in obj) {

            if (obj.hasOwnProperty(key)) {

                clonedObj[key] = deepClone(obj[key]);

            }

        }
        return clonedObj;

    }
    return obj;

};
