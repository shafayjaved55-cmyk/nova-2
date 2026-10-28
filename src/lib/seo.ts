import { useEffect } from "react";

export const SITE_URL = "https://www.softaxes.com";

type Seo = {
  title: string;
  description: string;
  path: string;
  /** Optional JSON-LD blocks rendered for this page only. */
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function applySchema(id: string, data?: Record<string, unknown> | Record<string, unknown>[]) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (!data) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Per-route SEO: title, description, canonical, OG/Twitter tags and JSON-LD.
 * Also pushes a dataLayer event so GA4 records one page_view per route change.
 */
export function useSeo({ title, description, path, schema }: Seo) {
  // Serialised so the effect only re-runs when the schema genuinely changes,
  // not on every render caused by forms or accordions.
  const schemaKey = schema ? JSON.stringify(schema) : "";

  useEffect(() => {
    const parsed = schemaKey ? (JSON.parse(schemaKey) as Seo["schema"]) : undefined;
    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", `${SITE_URL}${path}`);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path}`;

    applySchema("page-schema", parsed);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: path,
      page_title: title,
    });

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [title, description, path, schemaKey]);
}

/** Lightweight conversion event — wire to GA4 / Google Ads in GTM. */
export function track(event: string, payload: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
