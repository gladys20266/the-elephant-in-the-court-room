import { client } from "../../tina/__generated__/client";

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
  featured: boolean;
  image?: string;
}

type UpdateCategory = CaseUpdate["category"];
type UpdateStatus = CaseUpdate["status"];

interface LegacyUpdateMetadata {
  id?: string;
}

const updateFiles = import.meta.glob(
  "@/content/updates/*.json",
  {
    eager: true,
    import: "default",
  },
) as Record<string, LegacyUpdateMetadata>;

const legacyIdsByFilename = Object.entries(updateFiles).reduce<
  Record<string, string>
>((result, [path, update]) => {
  const filename = path.split("/").pop()?.replace(/\.json$/, "");

  if (filename && update?.id) {
    result[filename] = update.id;
  }

  return result;
}, {});

const categories: UpdateCategory[] = [
  "Court",
  "Website",
  "Campaign",
  "Media",
  "Documents",
  "Fundraising",
];

const statuses: UpdateStatus[] = [
  "Active",
  "New",
  "Completed",
  "Upcoming",
];

function normalizeCategory(value: string | null | undefined): UpdateCategory {
  return categories.includes(value as UpdateCategory)
    ? (value as UpdateCategory)
    : "Campaign";
}

function normalizeStatus(value: string | null | undefined): UpdateStatus {
  return statuses.includes(value as UpdateStatus)
    ? (value as UpdateStatus)
    : "Active";
}

function normalizeContent(
  content:
    | Array<{ text: string | null } | null>
    | null
    | undefined,
): string[] {
  if (!Array.isArray(content)) {
    return [];
  }

  return content
    .map((paragraph) => paragraph?.text ?? "")
    .filter(Boolean);
}

export async function fetchUpdates(): Promise<CaseUpdate[]> {
  const response = await client.queries.updatesConnection({
    first: 100,
  });

  const edges = response.data.updatesConnection.edges ?? [];

  return edges
    .map((edge) => edge?.node)
    .filter((update): update is NonNullable<typeof update> => Boolean(update))
    .map((update) => {
      const filename = update._sys.filename.replace(/\.json$/, "");

      return {
        id: legacyIdsByFilename[filename] ?? update._sys.filename,
        slug: update.slug ?? filename,
        title: update.title ?? "",
        summary: update.summary ?? "",
        content: normalizeContent(update.content),
        category: normalizeCategory(update.category),
        status: normalizeStatus(update.status),
        date: update.date ?? "",
        featured: update.featured ?? false,
        ...(update.image ? { image: update.image } : {}),
      };
    })
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      return a.id.localeCompare(b.id, undefined, {
        numeric: true,
      });
    });
}