import { siteConfig } from "@/config/site";

export interface PageSchemaOptions {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "Article" | "CollectionPage";
  datePublished?: string;
  articleSection?: string;
}

export function webPageSchema({
  title,
  description,
  path,
  type = "WebPage",
  datePublished,
  articleSection,
}: PageSchemaOptions) {
  const schema: Record<string, unknown> = {
    "@type": type,

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

  if (type === "Article") {
    if (datePublished) {
      schema.datePublished = datePublished;
    }

    if (articleSection) {
      schema.articleSection = articleSection;
    }

    schema.mainEntityOfPage = {
      "@id": `${siteConfig.siteUrl}${path}`,
    };
  }

  return schema;
}

export interface VideoSchemaOptions {
  name: string;
  description: string;
  path: string;
  contentUrl: string;
  thumbnailUrl: string;
  duration?: string;
}

export function videoSchema({
  name,
  description,
  path,
  contentUrl,
  thumbnailUrl,
  duration,
}: VideoSchemaOptions) {
  const schema: Record<string, unknown> = {
    "@type": "VideoObject",

    "@id": `${siteConfig.siteUrl}${path}#video`,

    name,

    description,

    thumbnailUrl: `${siteConfig.siteUrl}${thumbnailUrl}`,

    contentUrl: `${siteConfig.siteUrl}${contentUrl}`,

    url: `${siteConfig.siteUrl}${path}`,

    publisher: {
      "@id": `${siteConfig.siteUrl}#organization`,
    },

    inLanguage: siteConfig.language,
  };

  if (duration) {
    schema.duration = duration;
  }

  return schema;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbSchemaOptions {
  items: BreadcrumbItem[];
}

export function breadcrumbSchema({
  items,
}: BreadcrumbSchemaOptions) {
  return {
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}