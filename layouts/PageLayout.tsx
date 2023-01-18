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
  <div className="grid min-h-screen grid-cols-12">
    <main className="p-8 col-start-1 col-end-13 md:col-start-3 md:col-end-11 lg:col-start-3 lg:col-end-10">
      <Nav />
      {children}
    </main>
  </div>
)

export default PageLayout
