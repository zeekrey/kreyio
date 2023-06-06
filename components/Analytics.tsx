"use client"

import { load, trackPageview } from "fathom-client"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function TrackPageview() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_FATHOM) {
      load(process.env.NEXT_PUBLIC_FATHOM || "", {
        includedDomains: ["krey.io"],
      })
    } else {
      console.warn("Tried to load Fathom but no key was provided.")
    }
  }, [])

  useEffect(() => {
    trackPageview()
  }, [pathname, searchParams])

  return null
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageview />
    </Suspense>
  )
}
