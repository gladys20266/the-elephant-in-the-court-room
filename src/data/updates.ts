export interface CaseUpdate {
  id: string;
  slug: string;
  title: string;
  summary: string;
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
    category: "Media",
    status: "Upcoming",
    date: "Coming Soon",
    readingTime: "2 min read",
    featured: false,
  },
];