import { aiProfile } from "./ai";

export interface AISummaryOptions {
  page: string;
  summary: string;
}

export function buildAISummary({
  page,
  summary,
}: AISummaryOptions) {
  return {
    entity: aiProfile.entity,

    page,

    summary,

    topics: aiProfile.topics,

    audience: aiProfile.audience,

    language: aiProfile.language,
  };
}