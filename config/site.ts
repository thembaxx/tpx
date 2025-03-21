export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TPX",
  description: "Still designing the future",
  version: "0.0.1",
  baseUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://mmx.vercel.app",
  url: "https://mmx.vercel.app",
  links: {
    github: "https://github.com/thembaxx",
    twitter: "https://twitter.com/thembaxx",
    discord: "https://discord.gg/thembax",
    linkedIn: "https://www.linkedin.com/in/themba_p",
  },
  profile: {
    name: "Themba Mndebele",
    email: "work@themba.dev",
    website: "https://themba.dev",
  },
};
