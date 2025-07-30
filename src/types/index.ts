// Core application types
export interface AppConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  image: string;
}

// Personal information types
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

// Experience types
export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

// Education types
export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

// Skills types
export interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  category: "frontend" | "backend" | "tools" | "database";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

// Contact types
export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

// Social media types
export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Navigation types
export interface NavItem {
  href: string;
  label: string;
}

// Dark mode context types
export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Component props types
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

// Animation types
export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

// GitHub repository types
export interface GitHubRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Error types
export interface AppError {
  message: string;
  code?: string;
  status?: number;
}

// Theme types
export interface Theme {
  name: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

// Performance types
export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

// Accessibility types
export interface A11yProps {
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-hidden"?: boolean;
  role?: string;
  tabIndex?: number;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    message?: string;
  };
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Event types
export interface MouseEvent<T = Element> extends React.MouseEvent<T> {}
export interface KeyboardEvent<T = Element> extends React.KeyboardEvent<T> {}
export interface ChangeEvent<T = Element> extends React.ChangeEvent<T> {}
