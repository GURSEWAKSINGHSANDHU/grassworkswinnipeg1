import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

export default function SEOHead({ title, description, canonicalUrl }: SEOHeadProps) {
  const baseUrl = 'https://grassworkswinnipeg.ca';
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Helmet>
      <title>{`${title} | GrassWorks Winnipeg`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={`${title} | GrassWorks Winnipeg`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | GrassWorks Winnipeg`} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GrassWorks Winnipeg",
            "image": "https://grassworkswinnipeg.ca/images/logo.png",
            "telephone": "4387971777",
            "email": "grassworkswinnipeg@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Winnipeg",
              "addressRegion": "MB",
              "addressCountry": "CA"
            },
            "url": "https://grassworkswinnipeg.ca",
            "priceRange": "$$"
          }
        `}
      </script>
    </Helmet>
  );
}