export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next Template",
  description:
    "A Next.js 14 template for building apps with Shadcn components",
  footer: "Built by Inbestigator.",
  mainNav: [
    {
      title: "Nextjs",
      href: "https://nextjs.org/",
      external: true,
    },
    {
      title: "Shadcn UI",
      href: "https://ui.shadcn.com",
      external: true,
    },
  ],
  links: {
    github: "https://github.com/inbestigator/next-website-template",
  },
}
