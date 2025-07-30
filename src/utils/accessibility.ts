/**
 * Accessibility utilities for the portfolio application
 */

/**
 * Focus management utilities
 */
export const focusManagement = {
    /**
   * Trap focus within a container
   */
    "trapFocus": (container: HTMLElement): (() => void) => {

        const focusableElements = container.querySelectorAll(
                "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"
            ),

            firstElement = focusableElements[0] as HTMLElement,
            lastElement = focusableElements[focusableElements.length - 1] as HTMLElement,

            handleKeyDown = (event: KeyboardEvent) => {

                if (event.key === "Tab") {

                    if (event.shiftKey) {

                        if (document.activeElement === firstElement) {

                            event.preventDefault();
                            lastElement.focus();

                        }

                    } else if (document.activeElement === lastElement) {

                        event.preventDefault();
                        firstElement.focus();

                    }

                }

            };

        container.addEventListener("keydown", handleKeyDown);
        firstElement?.focus();

        return () => {

            container.removeEventListener("keydown", handleKeyDown);

        };

    },

    /**
   * Move focus to next element
   */
    "moveToNext": (currentElement: HTMLElement): void => {

        const focusableElements = document.querySelectorAll(
                "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"
            ),

            currentIndex = Array.from(focusableElements).indexOf(currentElement),
            nextElement = focusableElements[currentIndex + 1] as HTMLElement;

        if (nextElement) {

            nextElement.focus();

        }

    },

    /**
   * Move focus to previous element
   */
    "moveToPrevious": (currentElement: HTMLElement): void => {

        const focusableElements = document.querySelectorAll(
                "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"
            ),

            currentIndex = Array.from(focusableElements).indexOf(currentElement),
            previousElement = focusableElements[currentIndex - 1] as HTMLElement;

        if (previousElement) {

            previousElement.focus();

        }

    },

    /**
   * Focus first focusable element
   */
    "focusFirst": (container: HTMLElement): void => {

        const firstElement = container.querySelector(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"
        ) as HTMLElement;

        if (firstElement) {

            firstElement.focus();

        }

    },

    /**
   * Focus last focusable element
   */
    "focusLast": (container: HTMLElement): void => {

        const focusableElements = container.querySelectorAll(
                "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"
            ),

            lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (lastElement) {

            lastElement.focus();

        }

    }
};

/**
 * ARIA utilities
 */
export const ariaUtils = {
    /**
   * Announce message to screen readers
   */
    "announce": (message: string, priority: "polite" | "assertive" = "polite"): void => {

        const announcement = document.createElement("div");
        announcement.setAttribute("aria-live", priority);
        announcement.setAttribute("aria-atomic", "true");
        announcement.className = "sr-only";
        announcement.textContent = message;

        document.body.appendChild(announcement);

        setTimeout(() => {

            document.body.removeChild(announcement);

        }, 1000);

    },

    /**
   * Set ARIA label
   */
    "setLabel": (element: HTMLElement, label: string): void => {

        element.setAttribute("aria-label", label);

    },

    /**
   * Set ARIA described by
   */
    "setDescribedBy": (element: HTMLElement, descriptionId: string): void => {

        element.setAttribute("aria-describedby", descriptionId);

    },

    /**
   * Set ARIA expanded state
   */
    "setExpanded": (element: HTMLElement, expanded: boolean): void => {

        element.setAttribute("aria-expanded", expanded.toString());

    },

    /**
   * Set ARIA pressed state
   */
    "setPressed": (element: HTMLElement, pressed: boolean): void => {

        element.setAttribute("aria-pressed", pressed.toString());

    },

    /**
   * Set ARIA hidden state
   */
    "setHidden": (element: HTMLElement, hidden: boolean): void => {

        element.setAttribute("aria-hidden", hidden.toString());

    },

    /**
   * Set ARIA current state
   */
    "setCurrent": (element: HTMLElement, current: boolean | "page" | "step" | "location" | "date" | "time"): void => {

        element.setAttribute("aria-current", current.toString());

    }
};

/**
 * Color contrast utilities
 */
export const contrastUtils = {
    /**
   * Calculate relative luminance
   */
    "getRelativeLuminance": (r: number, g: number, b: number): number => {

        const [rs, gs, bs] = [r, g, b].map(c => {

            c /= 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;

    },

    /**
   * Calculate contrast ratio
   */
    "getContrastRatio": (l1: number, l2: number): number => {

        const lighter = Math.max(l1, l2),
            darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);

    },

    /**
   * Check if contrast ratio meets WCAG AA standards
   */
    "meetsWCAGAA": (contrastRatio: number, isLargeText: boolean = false): boolean => {

        const minimumRatio = isLargeText ? 3 : 4.5;
        return contrastRatio >= minimumRatio;

    },

    /**
   * Check if contrast ratio meets WCAG AAA standards
   */
    "meetsWCAGAAA": (contrastRatio: number, isLargeText: boolean = false): boolean => {

        const minimumRatio = isLargeText ? 4.5 : 7;
        return contrastRatio >= minimumRatio;

    }
};

/**
 * Keyboard navigation utilities
 */
export const keyboardNavigation = {
    /**
   * Handle arrow key navigation
   */
    "handleArrowKeys": (event: KeyboardEvent, items: HTMLElement[], currentIndex: number): number => {

        let newIndex = currentIndex;

        switch (event.key) {

        case "ArrowDown":
        case "ArrowRight":
            event.preventDefault();
            newIndex = (currentIndex + 1) % items.length;
            break;
        case "ArrowUp":
        case "ArrowLeft":
            event.preventDefault();
            newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            break;
        case "Home":
            event.preventDefault();
            newIndex = 0;
            break;
        case "End":
            event.preventDefault();
            newIndex = items.length - 1;
            break;

        }

        if (newIndex !== currentIndex) {

            items[newIndex].focus();

        }

        return newIndex;

    },

    /**
   * Handle enter and space key activation
   */
    "handleActivation": (event: KeyboardEvent, callback: () => void): void => {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();
            callback();

        }

    },

    /**
   * Handle escape key
   */
    "handleEscape": (event: KeyboardEvent, callback: () => void): void => {

        if (event.key === "Escape") {

            event.preventDefault();
            callback();

        }

    }
};

/**
 * Screen reader utilities
 */
export const screenReaderUtils = {
    /**
   * Hide element from screen readers
   */
    "hideFromScreenReader": (element: HTMLElement): void => {

        element.setAttribute("aria-hidden", "true");

    },

    /**
   * Show element to screen readers
   */
    "showToScreenReader": (element: HTMLElement): void => {

        element.removeAttribute("aria-hidden");

    },

    /**
   * Make element focusable for screen readers
   */
    "makeFocusable": (element: HTMLElement): void => {

        element.setAttribute("tabindex", "0");

    },

    /**
   * Remove element from tab order
   */
    "removeFromTabOrder": (element: HTMLElement): void => {

        element.setAttribute("tabindex", "-1");

    },

    /**
   * Add skip link
   */
    "addSkipLink": (targetId: string, text: string = "Skip to main content"): void => {

        const skipLink = document.createElement("a");
        skipLink.href = `#${targetId}`;
        skipLink.textContent = text;
        skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded";

        document.body.insertBefore(skipLink, document.body.firstChild);

    }
};

/**
 * Form accessibility utilities
 */
export const formAccessibility = {
    /**
   * Associate label with form control
   */
    "associateLabel": (label: HTMLLabelElement, control: HTMLElement): void => {

        const controlId = control.id || `control-${Math.random().toString(36)
            .substr(2, 9)}`;
        control.id = controlId;
        label.setAttribute("for", controlId);

    },

    /**
   * Add error message association
   */
    "addErrorMessage": (control: HTMLElement, message: string): void => {

        const errorId = `error-${control.id || Math.random().toString(36)
                .substr(2, 9)}`,
            errorElement = document.createElement("div");
        errorElement.id = errorId;
        errorElement.className = "text-red-600 text-sm mt-1";
        errorElement.textContent = message;
        errorElement.setAttribute("role", "alert");

        control.setAttribute("aria-describedby", errorId);
        control.parentNode?.insertBefore(errorElement, control.nextSibling);

    },

    /**
   * Remove error message
   */
    "removeErrorMessage": (control: HTMLElement): void => {

        const errorId = control.getAttribute("aria-describedby");
        if (errorId) {

            const errorElement = document.getElementById(errorId);
            if (errorElement) {

                errorElement.remove();

            }
            control.removeAttribute("aria-describedby");

        }

    },

    /**
   * Set field as required
   */
    "setRequired": (control: HTMLElement, required: boolean = true): void => {

        if (required) {

            control.setAttribute("required", "");
            control.setAttribute("aria-required", "true");

        } else {

            control.removeAttribute("required");
            control.removeAttribute("aria-required");

        }

    },

    /**
   * Set field as invalid
   */
    "setInvalid": (control: HTMLElement, invalid: boolean = true): void => {

        control.setAttribute("aria-invalid", invalid.toString());

    }
};

/**
 * Initialize accessibility features
 */
export const initAccessibility = (): void => {

    // Add skip link
    screenReaderUtils.addSkipLink("main", "Saltar al contenido principal");

    // Announce page load
    ariaUtils.announce("Página cargada completamente");

    // Set document language
    document.documentElement.setAttribute("lang", "es");

    // Add focus visible styles
    const style = document.createElement("style");
    style.textContent = `
    .focus-visible:focus {
      outline: 2px solid #f97316;
      outline-offset: 2px;
    }
  `;
    document.head.appendChild(style);

};
