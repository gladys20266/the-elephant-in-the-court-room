/**
 * Safely validates URLs coming from CMS-controlled content.
 *
 * Only HTTP(S) URLs and safe relative URLs are allowed.
 * Dangerous protocols such as javascript:, data:, vbscript:, and file:
 * are rejected and replaced with "#".
 */
export function safeExternalUrl(
  value: string | null | undefined,
): string {
  if (!value) {
    return "#";
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return "#";
  }

  // Allow safe relative URLs and hash links.
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../") ||
    trimmed.startsWith("#")
  ) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);

    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.href;
    }

    return "#";
  } catch {
    return "#";
  }
}