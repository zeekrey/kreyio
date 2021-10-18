import { styled } from "../stitches.config"

import Nav from "../components/Nav"

const Container = styled("div", {
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "$sand1",
})

const Body = styled("main", {
  maxWidth: "70ch",
  padding: "3em 1em",
  margin: "auto",
  lineHeight: 1.75,

  color: "$sand12",
})

const BlogLayout: React.FunctionComponent = ({ children }) => (
  <Container>
    <Body>
      <Nav />
      {children}
    </Body>
  </Container>
)

export default BlogLayout
