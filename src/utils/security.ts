/**
 * Security utilities for the portfolio application
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (html: string): string => {

    const div = document.createElement("div");
    div.textContent = html;
    return div.innerHTML;

};

/**
 * Validate and sanitize user input
 */
export const sanitizeInput = (input: string): string => {

    return input
        .trim()
        .replace(/[<>]/g, "") // Remove potential HTML tags
        .replace(/javascript:/gi, "") // Remove javascript: protocol
        .replace(/on\w+=/gi, ""); // Remove event handlers

};

/**
 * Validate email format securely
 */
export const validateEmail = (email: string): boolean => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;

};

/**
 * Validate URL format securely
 */
export const validateUrl = (url: string): boolean => {

    try {

        const urlObj = new URL(url);
        return ["http:", "https:"].includes(urlObj.protocol);

    } catch {

        return false;

    }

};

/**
 * Generate secure random string
 */
export const generateSecureToken = (length: number = 32): string => {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {

        result += chars.charAt(array[i] % chars.length);

    }

    return result;

};

/**
 * Hash sensitive data (basic implementation)
 * In production, use a proper hashing library
 */
export const hashData = async (data: string): Promise<string> => {

    const encoder = new TextEncoder(),
        dataBuffer = encoder.encode(data),
        hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer),
        hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

};

/**
 * Secure storage utilities
 */
export const secureStorage = {
    /**
   * Store data securely in localStorage
   */
    "setItem": (key: string, value: string): void => {

        try {

            const encryptedValue = btoa(encodeURIComponent(value));
            localStorage.setItem(key, encryptedValue);

        } catch (error) {

            console.error("Failed to store data securely:", error);

        }

    },

    /**
   * Retrieve data from secure storage
   */
    "getItem": (key: string): string | null => {

        try {

            const encryptedValue = localStorage.getItem(key);
            if (!encryptedValue) return null;
            return decodeURIComponent(atob(encryptedValue));

        } catch (error) {

            console.error("Failed to retrieve data securely:", error);
            return null;

        }

    },

    /**
   * Remove data from secure storage
   */
    "removeItem": (key: string): void => {

        try {

            localStorage.removeItem(key);

        } catch (error) {

            console.error("Failed to remove data securely:", error);

        }

    },

    /**
   * Clear all secure storage
   */
    "clear": (): void => {

        try {

            localStorage.clear();

        } catch (error) {

            console.error("Failed to clear secure storage:", error);

        }

    }
};

/**
 * Content Security Policy utilities
 */
export const cspUtils = {
    /**
   * Add CSP headers to prevent XSS
   */
    "addCSPHeaders": (): void => {

        const meta = document.createElement("meta");
        meta.httpEquiv = "Content-Security-Policy";
        meta.content = [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self'",
            "connect-src 'self'",
            "media-src 'self'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'"
        ].join("; ");

        document.head.appendChild(meta);

    },

    /**
   * Validate CSP compliance
   */
    "validateCSP": (): boolean => {

        const cspMeta = document.querySelector("meta[http-equiv=\"Content-Security-Policy\"]");
        return !!cspMeta;

    }
};

/**
 * CSRF protection utilities
 */
export const csrfProtection = {
    /**
   * Generate CSRF token
   */
    "generateToken": (): string => {

        return generateSecureToken(32);

    },

    /**
   * Validate CSRF token
   */
    "validateToken": (token: string, storedToken: string): boolean => {

        return token === storedToken && token.length === 64;

    },

    /**
   * Add CSRF token to requests
   */
    "addTokenToRequest": (headers: Headers, token: string): void => {

        headers.append("X-CSRF-Token", token);

    }
};

/**
 * Input validation utilities
 */
export const inputValidation = {
    /**
   * Validate required fields
   */
    "required": (value: any): boolean => {

        return value !== null && value !== undefined && value.toString().trim() !== "";

    },

    /**
   * Validate minimum length
   */
    "minLength": (value: string, min: number): boolean => {

        return value.length >= min;

    },

    /**
   * Validate maximum length
   */
    "maxLength": (value: string, max: number): boolean => {

        return value.length <= max;

    },

    /**
   * Validate pattern matching
   */
    "pattern": (value: string, regex: RegExp): boolean => {

        return regex.test(value);

    },

    /**
   * Validate phone number
   */
    "phone": (value: string): boolean => {

        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(value.replace(/\s/g, ""));

    },

    /**
   * Validate strong password
   */
    "strongPassword": (value: string): boolean => {

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(value);

    }
};

/**
 * Initialize security features
 */
export const initSecurity = (): void => {

    // Add CSP headers
    cspUtils.addCSPHeaders();

    // Prevent right-click context menu (optional)
    document.addEventListener("contextmenu", (e) => {

        e.preventDefault();

    });

    // Prevent F12, Ctrl+Shift+I, Ctrl+U (optional)
    document.addEventListener("keydown", (e) => {

        if (
            e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "u")
        ) {

            e.preventDefault();

        }

    });

};
