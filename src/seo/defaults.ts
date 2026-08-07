/**
 * ==========================================================
 * Default SEO Configuration
 * ==========================================================
 */

import { siteConfig } from "@/config/site";
import type { SEOData } from "./types";

export const defaultSEO: SEOData = {
  title: siteConfig.seo.defaultTitle,

  description: siteConfig.seo.defaultDescription,

  image: siteConfig.seo.defaultImage,

  robots: siteConfig.seo.robots,

  type: "website",
};