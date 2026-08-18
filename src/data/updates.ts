export interface CaseUpdate {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  category:
    | "Court"
    | "Website"
    | "Campaign"
    | "Media"
    | "Documents"
    | "Fundraising";
  status:
    | "Active"
    | "New"
    | "Completed"
    | "Upcoming";
  date: string;
  readingTime: string;
  featured: boolean;
}

export const updates: CaseUpdate[] = [
  {
    id: "1",
    slug: "website-campaign-launched",
    title: "Website Campaign Launched",
    summary:
      "The official campaign website has been launched to document the case, share evidence, and provide public updates for supporters and visitors.",
    content: [
      "The official campaign website for The Elephant In The Court Room has been launched as a central resource for documenting the case and following the campaign.",
      "The website brings together information about the case, photographs documenting the property, videos, court documents, campaign updates, and information about ways to support the ongoing legal effort.",
      "The goal is to make the available record easier to review while providing a central location for future developments and campaign information.",
    ],
    category: "Website",
    status: "Active",
    date: "July 2026",
    readingTime: "2 min read",
    featured: true,
  },

  {
    id: "2",
    slug: "case-timeline-published",
    title: "Case Timeline Published",
    summary:
      "A chronological timeline has been published to help visitors understand the history of the legal dispute from the signing of the agreement through the ongoing proceedings.",
    content: [
      "A chronological case timeline has been published to make the history of the legal dispute easier to understand.",
      "The timeline provides a structured overview of the major stages of the case, beginning with the 2010 lease-to-own agreement and continuing through the litigation and ongoing legal effort.",
      "The timeline is intended to provide visitors with a clear starting point before they explore the supporting documents, photographs, videos, and other materials available throughout the website.",
    ],
    category: "Campaign",
    status: "New",
    date: "July 2026",
    readingTime: "3 min read",
    featured: false,
  },

  {
    id: "3",
    slug: "additional-court-documents-coming-soon",
    title: "Additional Court Documents Coming Soon",
    summary:
      "Court filings and supporting legal documents will be added to the website as they become publicly available.",
    content: [
      "Additional court filings and supporting legal documents are planned for publication on the website.",
      "Documents will be added as they become publicly available and authorized for release.",
      "The Documents section is intended to provide visitors with direct access to the available record so they can review the materials connected to the case for themselves.",
    ],
    category: "Court",
    status: "Upcoming",
    date: "Coming Soon",
    readingTime: "1 min read",
    featured: false,
  },

  {
    id: "4",
    slug: "photo-evidence-gallery-expanded",
    title: "Photo Evidence Gallery Expanded",
    summary:
      "Additional before-and-after photographs documenting the property's transformation have been added to strengthen the visual record of the investment made.",
    content: [
      "Additional before-and-after photographs documenting the property's transformation have been added to the website.",
      "The photographs provide visual documentation of the property and help illustrate the investment and work carried out during the transformation.",
      "The expanded gallery gives visitors a broader visual record that can be reviewed alongside the case history and other materials presented on the website.",
    ],
    category: "Documents",
    status: "Completed",
    date: "Coming Soon",
    readingTime: "2 min read",
    featured: false,
  },

  {
    id: "5",
    slug: "campaign-awareness-growing",
    title: "Campaign Awareness Continues to Grow",
    summary:
      "The campaign continues to reach new supporters through the website, social media, and ongoing public awareness efforts.",
    content: [
      "The campaign continues its public awareness efforts through the website, social media, and other outreach channels.",
      "The website provides a central place for visitors who discover the campaign to learn about the case, review available materials, and follow future developments.",
      "As awareness grows, the campaign will continue using these channels to share information about the case and the ongoing legal effort.",
    ],
    category: "Fundraising",
    status: "Active",
    date: "Ongoing",
    readingTime: "2 min read",
    featured: false,
  },

  {
    id: "6",
    slug: "future-media-coverage",
    title: "Future Media Coverage",
    summary:
      "Media interviews, news coverage, and public commentary will be added to this section as they become available.",
    content: [
      "This section is reserved for future media interviews, news coverage, and public commentary relating to the campaign.",
      "Relevant coverage will be added as it becomes available and can be appropriately shared through the website.",
      "Visitors can return to the Updates section for future announcements concerning media coverage and other developments.",
    ],
    category: "Media",
    status: "Upcoming",
    date: "Coming Soon",
    readingTime: "2 min read",
    featured: false,
  },
];