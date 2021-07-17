import { NextPage } from "next"
import type { AppProps } from "next/app"
import React from "react"
import { globalStyles } from "../stitches.config"

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout?: React.FunctionComponent } }) => {
  //   Apply page layout
  const Layout = Component.Layout || (({ children }) => <>{children}</>)

  //   Add global CSS
  globalStyles()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
