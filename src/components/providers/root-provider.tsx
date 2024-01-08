"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import { useIsMounted } from "@/lib/hooks/use-is-mounted"

interface RootProviderProps {
  children: ReactNode
}

export default function RootProvider({ children }: RootProviderProps) {
  const isMounted = useIsMounted()
  return isMounted ? (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  ) : null
}
