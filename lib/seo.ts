export const SITE_URL = "https://krishnanand-portfolio-theta.vercel.app";
export const BRAND_NAME = "Krishna Nand Yadav";
export const BRAND_TITLE = "Cricket & Sports Data Analyst";
export const BRAND_ORIGIN = "Ghazipur, Uttar Pradesh, India";
export const BRAND_BASE = "Noida, India";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Krishna Nand Yadav",
    givenName: "Krishna Nand",
    familyName: "Yadav",
    jobTitle: "Cricket & Sports Data Analyst",
    description:
      "Krishna Nand Yadav is a Cricket & Sports Data Analyst originally from Ghazipur, Uttar Pradesh, currently based in Noida, India. He specializes in international cricket match analysis, ball-by-ball data, performance analytics, video tagging, quality control, and data visualization.",
    url: SITE_URL,
    image: `${SITE_URL}/profile/krishna-nand-yadav.jpg`,
    homeLocation: {
      "@type": "Place",
      name: "Ghazipur, Uttar Pradesh, India"
    },
    workLocation: {
      "@type": "Place",
      name: "Noida, Uttar Pradesh, India"
    },
    worksFor: {
      "@type": "Organization",
      name: "Lifease Solutions LLP",
      jobTitle: "Principal Cricket Analyst"
    },
    knowsAbout: [
      "Cricket Analytics",
      "Ball-by-Ball Data Analysis",
      "International Match Analysis",
      "Cricket Performance Analytics",
      "False Shot Induced Rate",
      "Sports Technology",
      "Power BI",
      "Tableau",
      "Python",
      "SQL",
      "Streamlit",
      "Video Tagging & Quality Control"
    ],
    sameAs: [
      "https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/",
      "https://github.com/thekngroup7622-creator",
      "https://cricnexora.vercel.app/"
    ]
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Krishna Nand Yadav | Cricket & Sports Data Analyst",
    description:
      "Official portfolio and personal brand of Krishna Nand Yadav — Cricket & Sports Data Analyst and Sports Technology Entrepreneur.",
    publisher: {
      "@id": `${SITE_URL}/#person`
    },
    inLanguage: "en-US"
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function getProfilePageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@id": `${SITE_URL}/#person`
    },
    url: `${SITE_URL}${path}`,
    name: title,
    description: description
  };
}

