import { useEffect } from "react";
import { siteConfig } from "../data/siteData.js";

// A tiny hand-rolled substitute for react-helmet: sets the tab title and
// the meta description for whichever page is currently mounted. Kept
// dependency-free so the whole site only needs one extra package
// (react-router-dom) added to package.json.
export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.brandName}`
      : siteConfig.defaultTitle;
    document.title = fullTitle;

    const metaDescription = description || siteConfig.defaultDescription;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", metaDescription);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", fullTitle);

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", metaDescription);
  }, [title, description]);

  return null;
}
