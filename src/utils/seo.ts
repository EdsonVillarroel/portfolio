/**
 * SEO utilities for the portfolio application
 */

/**
 * Generate structured data for the portfolio
 */
export const generateStructuredData = () => {

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Edson Villarroel Ricaldes",
        "jobTitle": "Desarrollador Frontend",
        "description": "Desarrollador frontend con experiencia en Angular, React.js y Next.js. Especializado en desarrollo web de alta calidad con código limpio y arquitectura modular.",
        "url": "https://edsonvillarroel.github.io/portfolio/",
        "image": "https://edsonvillarroel.github.io/portfolio/static/media/user-3.webp",
        "sameAs": [
            "https://www.linkedin.com/in/edsonvillarroelricaldes/",
            "https://github.com/EdsonVillarroel",
            "https://www.facebook.com/edsito.villarroelricaldes",
            "https://www.instagram.com/edson_villarroel_ricaldes/"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "BancoSol",
            "url": "https://www.bancosol.com.bo/"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Universidad Tecnológica Privada De Santa Cruz",
            "url": "https://www.utepsc.edu.bo/"
        },
        "knowsAbout": [
            "Angular",
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Frontend Development",
            "Web Development"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santa Cruz de la Sierra",
            "addressRegion": "Santa Cruz",
            "addressCountry": "Bolivia"
        }
    };

    return structuredData;

};

/**
 * Add structured data to the page
 */
export const addStructuredData = (): void => {

    const structuredData = generateStructuredData(),
        script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

};

/**
 * Generate sitemap data
 */
export const generateSitemapData = () => {

    const baseUrl = "https://edsonvillarroel.github.io/portfolio/",
        currentDate = new Date().toISOString();

    return [
        {
            "url": baseUrl,
            "lastModified": currentDate,
            "changeFrequency": "monthly",
            "priority": 1.0
        },
        {
            "url": `${baseUrl}#about`,
            "lastModified": currentDate,
            "changeFrequency": "monthly",
            "priority": 0.8
        },
        {
            "url": `${baseUrl}#experience`,
            "lastModified": currentDate,
            "changeFrequency": "monthly",
            "priority": 0.8
        },
        {
            "url": `${baseUrl}#skills`,
            "lastModified": currentDate,
            "changeFrequency": "monthly",
            "priority": 0.7
        },
        {
            "url": `${baseUrl}#education`,
            "lastModified": currentDate,
            "changeFrequency": "yearly",
            "priority": 0.6
        },
        {
            "url": `${baseUrl}#contact`,
            "lastModified": currentDate,
            "changeFrequency": "monthly",
            "priority": 0.7
        }
    ];

};

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = (): string => {

    return `User-agent: *
Allow: /

Sitemap: https://edsonvillarroel.github.io/portfolio/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

};

/**
 * Generate sitemap XML
 */
export const generateSitemapXml = (): string => {

    const sitemapData = generateSitemapData();

    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

    sitemapData.forEach((item) => {

        xml += "  <url>\n";
        xml += `    <loc>${item.url}</loc>\n`;
        xml += `    <lastmod>${item.lastModified}</lastmod>\n`;
        xml += `    <changefreq>${item.changeFrequency}</changefreq>\n`;
        xml += `    <priority>${item.priority}</priority>\n`;
        xml += "  </url>\n";

    });

    xml += "</urlset>";

    return xml;

};

/**
 * Add meta tags for social media
 */
export const addSocialMetaTags = (): void => {

    const metaTags = [
    // Open Graph
        {"property": "og:type",
            "content": "website"},
        {"property": "og:url",
            "content": "https://edsonvillarroel.github.io/portfolio/"},
        {"property": "og:title",
            "content": "Edson Villarroel Ricaldes - Desarrollador Frontend"},
        {"property": "og:description",
            "content": "Portfolio de Edson Villarroel Ricaldes, desarrollador frontend con experiencia en Angular, React.js y Next.js."},
        {"property": "og:image",
            "content": "https://edsonvillarroel.github.io/portfolio/static/media/user-3.webp"},
        {"property": "og:image:width",
            "content": "800"},
        {"property": "og:image:height",
            "content": "600"},
        {"property": "og:locale",
            "content": "es_ES"},
        {"property": "og:site_name",
            "content": "Portfolio Edson Villarroel"},

        // Twitter Card
        {"property": "twitter:card",
            "content": "summary_large_image"},
        {"property": "twitter:url",
            "content": "https://edsonvillarroel.github.io/portfolio/"},
        {"property": "twitter:title",
            "content": "Edson Villarroel Ricaldes - Desarrollador Frontend"},
        {"property": "twitter:description",
            "content": "Portfolio de Edson Villarroel Ricaldes, desarrollador frontend con experiencia en Angular, React.js y Next.js."},
        {"property": "twitter:image",
            "content": "https://edsonvillarroel.github.io/portfolio/static/media/user-3.webp"},
        {"property": "twitter:creator",
            "content": "@edsonvillarroel"},

        // Additional SEO
        {"name": "author",
            "content": "Edson Villarroel Ricaldes"},
        {"name": "robots",
            "content": "index, follow"},
        {"name": "googlebot",
            "content": "index, follow"},
        {"name": "theme-color",
            "content": "#f97316"},
        {"name": "msapplication-TileColor",
            "content": "#f97316"},
        {"name": "apple-mobile-web-app-capable",
            "content": "yes"},
        {"name": "apple-mobile-web-app-status-bar-style",
            "content": "default"},
        {"name": "apple-mobile-web-app-title",
            "content": "Edson Villarroel Portfolio"}
    ];

    metaTags.forEach((tag) => {

        const meta = document.createElement("meta");
        if (tag.property) {

            meta.setAttribute("property", tag.property);

        } else if (tag.name) {

            meta.setAttribute("name", tag.name);

        }
        meta.setAttribute("content", tag.content);
        document.head.appendChild(meta);

    });

};

/**
 * Add canonical URL
 */
export const addCanonicalUrl = (): void => {

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = "https://edsonvillarroel.github.io/portfolio/";
    document.head.appendChild(canonical);

};

/**
 * Add language alternatives
 */
export const addLanguageAlternatives = (): void => {

    const hreflang = document.createElement("link");
    hreflang.rel = "alternate";
    hreflang.hreflang = "es";
    hreflang.href = "https://edsonvillarroel.github.io/portfolio/";
    document.head.appendChild(hreflang);

};

/**
 * Track page views for analytics
 */
export const trackPageView = (page: string): void => {

    // Google Analytics 4
    if (typeof window !== "undefined" && (window as any).gtag) {

        (window as any).gtag("config", "GA_MEASUREMENT_ID", {
            "page_title": page,
            "page_location": window.location.href
        });

    }

    // Custom analytics
    console.log("Page view:", page);

};

/**
 * Track custom events
 */
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}): void => {

    // Google Analytics 4
    if (typeof window !== "undefined" && (window as any).gtag) {

        (window as any).gtag("event", eventName, parameters);

    }

    // Custom analytics
    console.log("Event:", eventName, parameters);

};

/**
 * Initialize SEO features
 */
export const initSEO = (): void => {

    // Add structured data
    addStructuredData();

    // Add social meta tags
    addSocialMetaTags();

    // Add canonical URL
    addCanonicalUrl();

    // Add language alternatives
    addLanguageAlternatives();

    // Track initial page view
    trackPageView("Portfolio Home");

};

/**
 * Update meta tags dynamically
 */
export const updateMetaTags = (title: string, description: string, image?: string): void => {

    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector("meta[name=\"description\"]");
    if (!metaDescription) {

        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);

    }
    metaDescription.setAttribute("content", description);

    // Update Open Graph tags
    const ogTitle = document.querySelector("meta[property=\"og:title\"]");
    if (ogTitle) {

        ogTitle.setAttribute("content", title);

    }

    const ogDescription = document.querySelector("meta[property=\"og:description\"]");
    if (ogDescription) {

        ogDescription.setAttribute("content", description);

    }

    if (image) {

        const ogImage = document.querySelector("meta[property=\"og:image\"]");
        if (ogImage) {

            ogImage.setAttribute("content", image);

        }

    }

};

/**
 * Generate meta description from content
 */
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {

    // Remove HTML tags
    const textContent = content.replace(/<[^>]*>/g, ""),

        // Remove extra whitespace
        cleanContent = textContent.replace(/\s+/g, " ").trim();

    // Truncate to max length
    if (cleanContent.length <= maxLength) {

        return cleanContent;

    }

    // Truncate at word boundary
    const truncated = cleanContent.substring(0, maxLength),
        lastSpace = truncated.lastIndexOf(" ");

    return lastSpace > 0 ? truncated.substring(0, lastSpace) + "..." : truncated + "...";

};

/**
 * Check if page is being crawled by search engine
 */
export const isSearchEngineCrawler = (): boolean => {

    const userAgent = navigator.userAgent.toLowerCase(),
        crawlers = [
            "googlebot",
            "bingbot",
            "slurp",
            "duckduckbot",
            "baiduspider",
            "yandexbot",
            "facebookexternalhit",
            "twitterbot",
            "linkedinbot"
        ];

    return crawlers.some(crawler => userAgent.includes(crawler));

};

/**
 * Add preconnect hints for performance
 */
export const addPreconnectHints = (): void => {

    const domains = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://www.google-analytics.com"
    ];

    domains.forEach(domain => {

        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = domain;
        document.head.appendChild(link);

    });

};
