import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { ExternalLink } from "../components/externalLink"

const components = {
  ExternalLink: ({ children, href, ...props }) => (
    <ExternalLink href={href} {...props}>
      {children}
    </ExternalLink>
  ),
}

export default ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div>
        <h1>My Layout</h1>
        <div>{children}</div>
      </div>
    </MDXProvider>
  )
}
