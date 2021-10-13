import { NextPage } from "next"
import type { AppProps } from "next/app"
import React from "react"
import { globalStyles } from "../stitches.config"
import { ThemeProvider } from "next-themes"
import { darkTheme } from "../stitches.config"

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout?: React.FunctionComponent } }) => {
  //   Apply page layout
  const Layout = Component.Layout || (({ children }) => <>{children}</>)

  //   Add global CSS
  globalStyles()

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
