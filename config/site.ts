export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next Template",
  description:
    "A Next.js 13 template for building apps with Radix UI and Tailwind CSS",
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
