// Schema Markup Functions for SEO and Rich Snippets
// This file contains reusable schema markup that can be dynamically added to pages

// FAQ Schema Generator
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Common FAQ data for AI/ML topics
const commonFAQs = [
  {
    question: "What is Medical AI?",
    answer: "Medical AI refers to the application of artificial intelligence and machine learning techniques to healthcare, including medical imaging analysis, drug discovery, patient diagnosis, and treatment planning."
  },
  {
    question: "How does Bioimage Analysis work?",
    answer: "Bioimage Analysis uses computer vision and machine learning algorithms to automatically analyze and extract meaningful information from biological images, such as microscopy images, medical scans, and cellular imagery."
  },
  {
    question: "What are Large Language Models (LLMs)?",
    answer: "Large Language Models are AI systems trained on vast amounts of text data that can understand, generate, and manipulate human language for various applications like text generation, translation, and question answering."
  },
  {
    question: "How can AI improve healthcare?",
    answer: "AI can improve healthcare through faster diagnosis, personalized treatment plans, drug discovery, medical image analysis, predictive analytics for patient outcomes, and automation of routine tasks."
  }
];

// Event Schema Generator
function generateEventSchema(event) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": {
      "@type": "Place",
      "name": event.location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": event.location.streetAddress,
        "addressLocality": event.location.city,
        "addressRegion": event.location.state,
        "postalCode": event.location.postalCode,
        "addressCountry": event.location.country
      }
    },
    "organizer": {
      "@type": "Person",
      "name": "Ranit Karmakar"
    },
    "url": event.url
  };
}

// Product/Service Schema Generator
function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Person",
      "name": "Ranit Karmakar",
      "jobTitle": "AI Researcher and Consultant",
      "worksFor": {
        "@type": "Organization",
        "name": "Harvard University"
      }
    },
    "serviceType": service.type,
    "areaServed": service.areaServed || "Worldwide",
    "url": service.url
  };
}

// Article Schema Generator
function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": "Ranit Karmakar"
    },
    "publisher": {
      "@type": "Person",
      "name": "Ranit Karmakar"
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "articleSection": article.section,
    "keywords": article.keywords,
    "wordCount": article.wordCount,
    "image": article.image
  };
}

// Research Project Schema Generator
function generateResearchProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": project.name,
    "description": project.description,
    "funder": {
      "@type": "Organization",
      "name": project.funder || "Harvard University"
    },
    "researchArea": project.researchAreas,
    "principalInvestigator": {
      "@type": "Person",
      "name": "Ranit Karmakar"
    },
    "url": project.url,
    "startDate": project.startDate,
    "endDate": project.endDate
  };
}

// Organization Schema Generator
function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ranit Karmakar Portfolio",
    "url": "https://ranitkarmakar.com",
    "logo": "https://ranitkarmakar.com/assets/images/ranit.png",
    "description": "Personal portfolio and professional services in AI, Machine Learning, and Medical AI innovation",
    "founder": {
      "@type": "Person",
      "name": "Ranit Karmakar"
    },
    "sameAs": [
      "https://github.com/ranitkarmakar",
      "https://linkedin.com/in/ranitkarmakar",
      "https://twitter.com/ranitkarmakar"
    ]
  };
}

// Breadcrumb Schema Generator
function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Local Business Schema Generator (for consulting services)
function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ranit Karmakar AI Consulting",
    "description": "Professional AI strategy consulting and machine learning implementation services",
    "url": "https://ranitkarmakar.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boston",
      "addressRegion": "MA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.3601",
      "longitude": "-71.0589"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "42.3601",
        "longitude": "-71.0589"
      },
      "geoRadius": "50000"
    }
  };
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateFAQSchema,
    generateEventSchema,
    generateServiceSchema,
    generateArticleSchema,
    generateResearchProjectSchema,
    generateOrganizationSchema,
    generateBreadcrumbSchema,
    generateLocalBusinessSchema,
    commonFAQs
  };
}
