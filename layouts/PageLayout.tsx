// import { styled } from "../stitches.config"

import Nav from "../components/Nav"

// const Container = styled("div", {
//   display: "grid",
//   backgroundColor: "$sand1",
// })

// const Body = styled("main", {
//   padding: "2rem",

//   gridColumn: "1/13",

//   "@medium": {
//     gridColumn: "3/11",
//   },

//   "@large": {
//     gridColumn: "3/10",
//   },

//   color: "$sand12",
// })

const PageLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="relative">
        <Nav />
        <main>{children}</main>
      </div>
    </div>
  </div>
)

export default PageLayout
