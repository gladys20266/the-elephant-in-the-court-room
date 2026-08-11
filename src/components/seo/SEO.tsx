import { Helmet } from "react-helmet-async";
import { defaultSEO } from "@/seo/defaults";
import type { SEOData } from "@/seo/types";
import { siteConfig } from "@/config/site";

interface SEOProps {
  data?: SEOData;
}

export default function SEO({ data }: SEOProps) {
  const seo = {
    ...defaultSEO,
    ...data,
  };

  const canonical = seo.canonical
    ? seo.canonical.startsWith("http")
      ? seo.canonical
      : `${siteConfig.siteUrl}${
          seo.canonical.startsWith("/")
            ? seo.canonical
            : `/${seo.canonical}`
        }`
    : `${siteConfig.siteUrl}${window.location.pathname}`;

  const imageUrl = seo.image
    ? seo.image.startsWith("http")
      ? seo.image
      : `${siteConfig.siteUrl}${
          seo.image.startsWith("/")
            ? seo.image
            : `/${seo.image}`
        }`
    : undefined;

  return (
    <Helmet>
      {/* Title */}
      <title>{seo.title}</title>

      {/* Basic SEO */}
      <meta
        name="description"
        content={seo.description}
      />

      {seo.keywords && seo.keywords.length > 0 && (
        <meta
          name="keywords"
          content={seo.keywords.join(", ")}
        />
      )}

      <meta
        name="robots"
        content={seo.robots}
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href={canonical}
      />

      {/* Open Graph */}
      <meta
        property="og:site_name"
        content={siteConfig.siteName}
      />

      <meta
        property="og:locale"
        content={siteConfig.locale}
      />

      <meta
        property="og:title"
        content={seo.title}
      />

      <meta
        property="og:description"
        content={seo.description}
      />

      <meta
        property="og:type"
        content={seo.type}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      {imageUrl && (
        <meta
          property="og:image"
          content={imageUrl}
        />
      )}

      {/* X (Twitter) */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={seo.title}
      />

      <meta
        name="twitter:description"
        content={seo.description}
      />

      {imageUrl && (
        <meta
          name="twitter:image"
          content={imageUrl}
        />
      )}
    </Helmet>
  );
}