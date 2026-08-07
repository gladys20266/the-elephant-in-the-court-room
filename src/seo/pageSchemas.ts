import { siteConfig } from "@/config/site";

export interface PageSchemaOptions {
  title: string;
  description: string;
  path: string;
}

export function webPageSchema({
  title,
  description,
  path,
}: PageSchemaOptions) {
  return {
    "@type": "WebPage",

    "@id": `${siteConfig.siteUrl}${path}`,

    url: `${siteConfig.siteUrl}${path}`,

    name: title,

    description,

    isPartOf: {
      "@id": `${siteConfig.siteUrl}#website`,
    },

    about: {
      "@id": `${siteConfig.siteUrl}#organization`,
    },

    inLanguage: siteConfig.language,
  };
}