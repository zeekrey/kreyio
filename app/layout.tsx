import { Work_Sans } from "next/font/google"
import Analytics from "components/Analytics"
import type { Metadata } from "next"

import "./globals.css"

const workSans = Work_Sans({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Christian Krey",
    template: "%s | Christian Krey",
  },
  description: "tbd.",
  openGraph: {
    title: "Christian Krey",
    description: "Something about me and the things I'm building.",
    url: "https://krey.io",
    siteName: "Christian Krey",
    images: [
      {
        url: `https://krey.io/thumbnail.png`,
        width: 1012,
        height: 506,
        alt: "https://krey.io/",
      },
    ],
    locale: "de-DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Christian Krey",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable}`}>
      <body className="bg-zinc-900 font-medium text-zinc-200 antialiased">
        <Analytics />
        <main>{children}</main>
      </body>
    </html>
  )
}
