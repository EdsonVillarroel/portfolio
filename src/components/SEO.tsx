import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

/**
 * SEO component for managing meta tags and social media sharing
 * Uses React Helmet for dynamic meta tag management
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author = 'Edson Villarroel Ricaldes',
  image = 'https://edsonvillarroel.github.io/portfolio/static/media/user-3.webp',
  url = 'https://edsonvillarroel.github.io/portfolio/',
  type = 'website'
}) => {
  const fullTitle = `${title} | Edson Villarroel Ricaldes - Desarrollador Frontend`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#f97316" />
      
      {/* Language and encoding */}
      <html lang="es" />
      <meta charSet="utf-8" />
    </Helmet>
  );
}; 