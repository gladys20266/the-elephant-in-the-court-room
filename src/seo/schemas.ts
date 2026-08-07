import { siteConfig } from "@/config/site";

/**
 * ==========================================================
 * Structured Data Schemas
 * ==========================================================
 * Reusable JSON-LD schema generators.
 * ==========================================================
 */

export function websiteSchema() {
  return {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebSite",

        name: siteConfig.siteName,

        url: siteConfig.siteUrl,

        description: siteConfig.seo.defaultDescription,

        inLanguage: siteConfig.language,

        publisher: {
          "@id": `${siteConfig.siteUrl}#organization`,
        },
      },

      {
        "@type": "Organization",

        "@id": `${siteConfig.siteUrl}#organization`,

        name: siteConfig.organization.name,

        url: siteConfig.siteUrl,

        logo: {
          "@type": "ImageObject",

          url: `${siteConfig.siteUrl}${siteConfig.organization.logo}`,
        },
      },
    ],
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",

    name: siteConfig.organization.name,

    url: siteConfig.siteUrl,

    logo: {
      "@type": "ImageObject",

      url: `${siteConfig.siteUrl}${siteConfig.organization.logo}`,
    },
  };
}