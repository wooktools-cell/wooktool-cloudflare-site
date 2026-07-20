import { site } from "./siteData.js";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "wooktools",
  alternateName: "WOOKTOOL",
  url: site.domain,
  logo: new URL("/images/logo/wooktool-logo-new.webp", site.domain).toString(),
  description: site.description,
  email: site.email,
  brand: {
    "@type": "Brand",
    name: "WOOKTOOL"
  },
  sameAs: [site.linkedinUrl, site.facebookUrl, site.alibabaUrl].filter(Boolean),
  knowsAbout: [
    "hand tools manufacturing",
    "custom tape measures",
    "utility knives",
    "screwdriver sets",
    "OEM hand tools",
    "ODM hand tools",
    "private label tool packaging",
    "hand tool quality control"
  ],
  areaServed: "Global"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "wooktools",
  alternateName: "WOOKTOOL",
  url: site.domain,
  description: site.description,
  publisher: {
    "@type": "Organization",
    name: "wooktools",
    brand: {
      "@type": "Brand",
      name: "WOOKTOOL"
    }
  }
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

export const articleSchema = ({ title, description, path, image, datePublished, dateModified }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: image ? new URL(image, site.domain).toString() : undefined,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Organization",
    name: "wooktools"
  },
  publisher: {
    "@type": "Organization",
    name: "wooktools",
    logo: {
      "@type": "ImageObject",
      url: new URL("/images/logo/wooktool-logo-new.webp", site.domain).toString()
    }
  },
  mainEntityOfPage: new URL(path, site.domain).toString()
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
