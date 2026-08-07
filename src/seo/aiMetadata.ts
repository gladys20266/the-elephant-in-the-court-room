import { aiProfile } from "./ai";
import { buildAISummary } from "./aiSummary";

export interface AIMetadataOptions {
  page: string;
  summary: string;
}

export function buildAIMetadata({
  page,
  summary,
}: AIMetadataOptions) {
  return {
    profile: aiProfile,

    summary: buildAISummary({
      page,
      summary,
    }),

    generatedAt: new Date().toISOString(),
  };
}