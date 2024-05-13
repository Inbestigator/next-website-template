import Link from "next/link"

import { siteConfig } from "@/config/site"
import BentoGrid from "@/components/ui/bento-grid"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            This website template was made using Next.js and Shadcn UI
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Shadcn&apos;s components are beautifully designed using Radix UI and
            Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://nextjs.org/"
            className={buttonVariants()}
          >
            Nextjs
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://ui.shadcn.com"
            className={buttonVariants()}
          >
            Shadcn UI
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      </section>
      <BentoGrid className="md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>
              Displays a card with header, content, and footer.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Lorem ipsum</CardTitle>
            <CardDescription>Something heartwhelming</CardDescription>
          </CardHeader>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Dolor sit</CardTitle>
            <CardDescription>Something silly</CardDescription>
          </CardHeader>
        </Card>
      </BentoGrid>
    </>
  )
}
