import Nav from "../components/Nav"
import Footer from "../components/Footer"

const PageLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="relative">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  </div>
)

export default PageLayout
