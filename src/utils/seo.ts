import { site } from "~/data/site";

/**
 * Builds the <meta> tag list for a route's `head()`. Titles are suffixed with
 * the company name. Pass `path` for a correct og:url.
 */
export const seo = ({
  title,
  description,
  keywords,
  image,
  path,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  path?: string;
}) => {
  const fullTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;
  const desc = description ?? site.description;
  const img = image ?? `${site.url}/logo.png`;
  const url = path ? `${site.url}${path}` : site.url;

  return [
    { title: fullTitle },
    { name: "description", content: desc },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: site.name },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: desc },
    { property: "og:url", content: url },
    { property: "og:image", content: img },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: desc },
    { name: "twitter:image", content: img },
  ];
};
