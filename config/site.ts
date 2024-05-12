export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Website name",
  description: "Site description",
  mainNav: [
    {
      title: "Home",
      href: "/",
      external: true,
    }
  ],
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/inbestigator/website-template",
    docs: "/docs",
  },
}
