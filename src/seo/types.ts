/**
 * ==========================================================
 * SEO Types
 * ==========================================================
 */

export interface SEOData {
  /**
   * Page title
   */
  title?: string;

  /**
   * Meta description
   */
  description?: string;

  /**
   * Canonical URL
   */
  canonical?: string;

  /**
   * Open Graph image
   */
  image?: string;

  /**
   * Page type
   */
  type?: "website" | "article" | "video.other";

  /**
   * Robots directive
   */
  robots?: string;

  /**
   * Meta keywords
   */
  keywords?: string[];

  /**
   * Prevent indexing
   */
  noIndex?: boolean;
}