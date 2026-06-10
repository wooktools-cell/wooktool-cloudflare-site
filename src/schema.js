import { site } from "./siteData.js";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "wooktools",
  alternateName: "WOOKTOOL",
  url: site.domain,
  logo: new URL("/images/logo/wooktool-logo-new.webp", site.domain).toString(),
  description: site.description,
  email: site.email
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "wooktools",
  alternateName: "WOOKTOOL",
  url: site.domain,
  description: site.description
};

export const breadcrumbSchema = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: new URL(item.path, site.domain).toString()
  }))
});

export const faqSchema = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

export const productCollectionSchema = ({ name, description, path, image }) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url: new URL(path, site.domain).toString(),
  image: image ? new URL(image, site.domain).toString() : undefined,
  publisher: {
    "@type": "Organization",
    name: "wooktools",
    brand: {
      "@type": "Brand",
      name: "WOOKTOOL"
    }
  }
});
