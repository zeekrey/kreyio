import { styled } from "../stitches.config"

import Nav from "../components/Nav"

const Container = styled("div", {
  display: "grid",
  backgroundColor: "$sand1",
  gridTemplateColumns: "repeat(12, 1fr)",
  minHeight: "100vh",
})

const Body = styled("main", {
  padding: "2rem",

  gridColumn: "1/13",

  "@medium": {
    gridColumn: "3/11",
  },

  "@large": {
    gridColumn: "3/10",
  },

  color: "$sand12",
})

const PageLayout: React.FunctionComponent = ({ children }) => (
  <Container>
    <Body>
      <Nav />
      {children}
    </Body>
  </Container>
)

export default PageLayout
