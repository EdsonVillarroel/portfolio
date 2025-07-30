import React, { forwardRef, memo } from "react";
import { classNames } from "../../utils";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
  "aria-describedby"?: string;
  role?: string;
  tabIndex?: number;
}

/**
 * Optimized Button component with TypeScript and accessibility
 * Supports different variants, sizes, and accessibility features
 */
export const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        children,
        onClick,
        className = "",
        disabled = false,
        type = "button",
        variant = "primary",
        size = "md",
        ...ariaProps
    }, ref) => {

        const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",

            variantClasses = {
                "primary": "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
                "secondary": "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
                "outline": "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500"
            },

            sizeClasses = {
                "sm": "px-3 py-1.5 text-sm",
                "md": "px-4 py-2 text-base",
                "lg": "px-6 py-3 text-lg"
            },

            buttonClasses = classNames(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                className
            );

        return (
            <button
                ref={ref}
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={buttonClasses}
                {...ariaProps}
            >
                {children}
            </button>
        );

    }
));

Button.displayName = "Button";
