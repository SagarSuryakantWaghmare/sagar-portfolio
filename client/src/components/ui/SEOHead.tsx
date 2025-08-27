import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({
  title = "Sagar Waghmare | Full Stack Developer & UI/UX Enthusiast",
  description = "Experienced Full Stack Developer specializing in MERN stack, React.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords = "Full Stack Developer, MERN Stack, React Developer, Node.js, JavaScript, TypeScript, Web Development, UI/UX Design, Frontend Developer, Backend Developer, Sagar Waghmare",
  image = "/logo.png",
  url = "https://sagar-portfolio-dun.vercel.app"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };
    
    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Sagar Waghmare');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags for social media
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Sagar Waghmare Portfolio', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Additional performance and SEO tags
    updateMetaTag('theme-color', '#ff8911');
    updateMetaTag('msapplication-TileColor', '#ff8911');
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
    
    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sagar Waghmare",
      "jobTitle": "Full Stack Developer",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/SagarSuryakantWaghmare",
        "https://www.linkedin.com/in/sagarwaghmare44/"
      ],
      "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Full Stack Development",
        "UI/UX Design"
      ]
    };
    
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, image, url]);
  
  return null;
};

export default SEOHead;
