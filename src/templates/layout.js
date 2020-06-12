import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { ExternalLink } from "../components/externalLink.jsx"

const shortcodes = {
  // eslint-disable-next-line react/display-name
  ExternalLink: function ({ children, href, ...props }) {
    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    )
  },
  a: props => <a {...props} style={{ color: "red" }}></a>,
}

export default props => (
  <MDXProvider components={shortcodes}>
    <main {...props} />
  </MDXProvider>
)
