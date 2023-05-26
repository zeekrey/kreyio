import { useEffect } from "react"
import { useRouter } from "next/router"
import * as Fathom from "fathom-client"
import { Work_Sans } from "next/font/google"

const workSans = Work_Sans({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

//FIXME: SEO Stuff
export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  /**
   * Fathom analytics - should run client side only
   *
   */
  const router = useRouter()
  useEffect(() => {
    // Test if the fathom key is available within process.env
    if (process.env.NEXT_PUBLIC_FATHOM) {
      // !!! Don't forget the NEXT_PUBLIC_* since only this will make the variable available to your frontend
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM, {
        includedDomains: ["krey.io"],
      })
    } else {
      // If it is not available, print a message.
      console.warn("Tried to load Fathom but no key was provided.")
    }

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <html lang="en" className={`${workSans.variable}`}>
      <body className="bg-zinc-900 font-medium text-zinc-200 antialiased">
        {children}
      </body>
    </html>
  )
}
