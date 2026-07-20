export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Yugam Sharma",
  title: "Yugam Sharma — Sr. Cloud Infrastructure / SRE Engineer",
  description:
    "Senior Cloud Infrastructure / SRE Engineer with 8+ years building scalable, highly available platforms on AWS and Kubernetes.",
  // Update after the first Vercel deploy if the assigned URL differs.
  url: "https://yugam-sharma-site.vercel.app",
  email: "yugam.sharma@yahoo.com",
  github: "https://github.com/ysharma-dev",
  linkedin: "https://linkedin.com/in/yugamsharma",
  // Add new top-level sections here and they appear in the header nav.
  nav: [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Blog", href: "/blog" },
  ] satisfies NavItem[],
};
