import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { globalStyles } from "../stitches.config"
import { ThemeProvider } from "next-themes"
import { darkTheme } from "../stitches.config"
import * as Fathom from "fathom-client"

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout?: React.FunctionComponent } }) => {
  const router = useRouter()
  //   Apply page layout
  const Layout = Component.Layout || (({ children }) => <>{children}</>)

  //   Add global CSS
  globalStyles()

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
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
