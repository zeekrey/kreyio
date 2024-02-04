"use client"

import { load, trackPageview } from "fathom-client"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"

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

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageview />
    </Suspense>
  )
}
