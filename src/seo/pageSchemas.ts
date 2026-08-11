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
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    "@type": "WebPage",

    "@id": `${url}#webpage`,

    url,

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