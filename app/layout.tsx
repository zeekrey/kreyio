import type { Metadata } from "next"

import { Analytics } from "@/components/analytics"
import { ColorModeToggle } from "@/components/color-mode-toggle"
import { Separator } from "@/components/ui/separator"
import "@/styles/globals.css"
import { Work_Sans } from "next/font/google"

import { ThemeProvider } from "../components/providers"

const workSans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["200", "400", "600"],
})

export const metadata: Metadata = {
  description: "Something about me and the things I'm building.",
  icons: {
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://krey.io"),
  openGraph: {
    description: "Something about me and the things I'm building.",
    images: [
      {
        alt: "https://krey.io/",
        height: 506,
        url: `https://krey.io/thumbnail.png`,
        width: 1012,
      },
    ],
    locale: "de-DE",
    siteName: "Christian Krey",
    title: "Christian Krey",
    type: "website",
    url: "https://krey.io",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: "Christian Krey",
    template: "%s | Christian Krey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Krey",
  },
  verification: {},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${workSans.variable}`} lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-medium antialiased">
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <main className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
            {children}
          </main>
          <Separator />
          <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-4 md:py-8 flex items-center justify-between">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Christian Krey
            </p>
            <ColorModeToggle />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
