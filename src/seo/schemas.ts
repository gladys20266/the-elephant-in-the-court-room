import { siteConfig } from "@/config/site";
import { aiProfile } from "@/seo/ai";

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
        "@id": `${siteConfig.siteUrl}#website`,
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

        /**
         * GEO / Entity Understanding
         *
         * Reuse the existing AI profile as the single
         * source of truth for the organization's primary
         * subject areas.
         */
        knowsAbout: aiProfile.topics,
      },
    ],
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}#organization`,
    name: siteConfig.organization.name,
    url: siteConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}${siteConfig.organization.logo}`,
    },

    /**
     * GEO / Entity Understanding
     *
     * Keep the standalone Organization schema consistent
     * with the Organization entity used in websiteSchema().
     */
    knowsAbout: aiProfile.topics,
  };
}