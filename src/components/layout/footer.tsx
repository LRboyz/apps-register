import { HTMLAttributes } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"

export function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const classes = cn(
    className,
    "flex flex-col items-center justify-center px-4 py-6"
  )

  return (
    <footer className={classes} {...props}>
      <h3>{siteConfig.title}</h3>
      <Link
        href={siteConfig.links.telegram}
        target="_blank"
        rel="noreferrer noopenner"
        className={cn(buttonVariants({ variant: "link", size: "sm" }))}
      >
        Built by AppsPlayer @2024
      </Link>
    </footer>
  )
}
