import "@/styles/app.css"
import "@/styles/globals.css"

import { ReactNode } from "react"
import { env } from "@/env.mjs"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import RootProvider from "@/components/providers/root-provider"
import Script from "next/script"

const url = env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(url),
  title: `${siteConfig.name} - ${siteConfig.description}`,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Script defer src="https://us.umami.is/script.js" data-website-id="7fb2b625-dbaa-4454-a588-af3aebdf33a3"></Script>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <RootProvider>{children}</RootProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
