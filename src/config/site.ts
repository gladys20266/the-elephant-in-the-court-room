
/**
 * ==========================================================
 * THE ELEPHANT IN THE COURT ROOM
 * Global Website Configuration
 * ==========================================================
 *
 * This file is the single source of truth for:
 * - Website identity
 * - Organization information
 * - SEO defaults
 * - Social links
 * - Contact information
 * - Welcome popup
 * *
 * Future packages will also use this file for:
 * - Structured Data
 * - AI (GEO) configuration
 * - llms.txt generation
 * ==========================================================
 */

export const siteConfig = {
  // ==========================================================
  // WEBSITE
  // ==========================================================
  siteName: "The Elephant In The Court Room",

  shortName: "The Elephant",

  description:
    "Official website documenting The Elephant In The Court Room campaign, including the case background, court documents, videos, photographs, updates and crowdfunding information.",

  language: "en",

  locale: "en_US",

  /**
   * Update this after your final production domain is live.
   * Example:
   * https://www.theelephantinthecourtroom.com
   */
  siteUrl: "https://the-elephant-in-the-court-room-7i3j.vercel.app",

  // ==========================================================
  // ORGANIZATION
  // ==========================================================
  organization: {
  name: "The Elephant In The Court Room",

  email: "",

  logo: "/assets/logo.webp",
},

  // ==========================================================
  // SOCIAL LINKS
  // ==========================================================
  social: {
    youtube: "",
    goFundMe: "",
    facebook: "",
    x: "",
    linkedin: "",
  },

  // ==========================================================
  // SEO DEFAULTS
  // ==========================================================
  seo: {
    defaultTitle: "The Elephant In The Court Room",

    titleTemplate: "%s | The Elephant In The Court Room",

    defaultDescription:
      "Learn about The Elephant In The Court Room campaign through official documents, videos, photographs, timeline, updates and educational resources.",

    defaultImage: "/assets/banner.webp",

    robots: "index,follow",
  },

  // ==========================================================
  // WELCOME POPUP
  // ==========================================================
  welcome: {
    title: "Welcome",

    message:
      "Watch this short introduction before exploring the website.",

    watchButtonText: "▶ Watch Introduction",

    continueButtonText: "Continue to Website",

    showDelay: 1000,

    video: "/videos/welcome.mp4",

    poster: "/assets/welcome-poster.webp",
  },

  // ==========================================================
  // RESERVED FOR FUTURE AI IMPLEMENTATION
  // ==========================================================
  ai: {
    enabled: true,
  },
};