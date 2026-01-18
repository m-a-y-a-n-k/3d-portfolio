/**
 * Prefix a public asset path with Vite's runtime base URL.
 *
 * This is required for GitHub Project Pages where the site is served from a
 * sub-path like `/3d-portfolio/` (not `/`).
 *
 * Usage:
 *   asset("images/foo.png") -> "/3d-portfolio/images/foo.png" in production
 */
export function asset(path) {
  const normalized = String(path ?? "").replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}

