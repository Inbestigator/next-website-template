import Link from "next/link"

import { siteConfig } from "@/config/site"
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
            Header line one <br className="hidden sm:inline" />
            Header line two
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Login
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
      <section className="container mx-auto flex flex-col items-center justify-between">
        <Card className="m-4 w-full">
          <CardHeader>
            <CardTitle>We&apos;re doing it better</CardTitle>
            <CardDescription>Here&apos;s why...</CardDescription>
          </CardHeader>
        </Card>
      </section>
    </>
  )
}
