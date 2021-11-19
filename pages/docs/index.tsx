import PageLayout from "../../layouts/PageLayout"
import { styled, Box } from "../../stitches.config"

const Headline = styled("div", {
  paddingTop: "48px",

  h1: {
    fontSize: "72px",
    lineHeight: "64px",
    color: "$sand12",
    margin: 0,
  },

  div: {
    color: "$sand11",
  },
})

const H2 = styled("h2", {
  color: "$sand3",
})

const Index = () => {
  return (
    <>
      <Headline>
        <div>Hey there, I&apos;m</div>
        <h1>zeekrey</h1>
      </Headline>
    </>
  )
}

Index.Layout = PageLayout

export default Index
