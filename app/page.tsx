import Link from "next/link"

import { siteConfig } from "@/config/site"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import BentoGrid from "@/components/ui/bento-grid"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Grid from "@/components/grid"
import InstallCard from "@/components/install-card"

export default function IndexPage() {
  return (
    <>
      <section className="container flex flex-col gap-4 pb-8 pt-6 md:py-10">
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <h1 className="text-[max(30px,min(5vw,60px))] font-extrabold leading-tight tracking-tighter">
            This website template was made using{" "}
            <br className="hidden sm:inline" />
            Next.js and Shadcn UI
          </h1>
          <p className="max-w-full text-lg text-muted-foreground md:max-w-[800px] md:text-xl">
            Shadcn&apos;s components are beautifully designed using Radix UI and
            Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
        <InstallCard />
      </section>

      <BentoGrid className="md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Next.js</CardTitle>
            <CardDescription>
              Next.js enables you to create high-quality web applications with
              the power of React components.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hidden md:col-span-1 md:inline lg:row-span-2">
          <AspectRatio ratio={1 / 1}>
            <Grid />
          </AspectRatio>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Something silly</CardTitle>
          </CardHeader>
        </Card>
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Subscribe to our newsletter!</CardTitle>
          </CardHeader>
          <div className="flex flex-col items-center gap-2 p-4">
            <Input
              disabled
              type="email"
              placeholder="Email"
              className="w-full"
            />
            <Button disabled type="submit" className="w-full">
              Subscribe
            </Button>
          </div>
        </Card>
      </BentoGrid>
    </>
  )
}
