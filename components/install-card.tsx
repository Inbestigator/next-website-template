"use client"

import React from "react"

export default function InstallCard() {
  return (
    <div
      onClick={() =>
        navigator.clipboard.writeText(
          "npx create-next-app -e https://github.com/inbestigator/next-website-template"
        )
      }
      className="cursor-pointer overflow-hidden text-ellipsis text-nowrap rounded-lg border bg-[hsl(var(--secondary))] px-6 py-3 font-mono text-sm text-card-foreground transition-all active:opacity-50"
    >
      npx create-next-app -e
      https://github.com/inbestigator/next-website-template
    </div>
  )
}
