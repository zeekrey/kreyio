import Footer from "../components/Footer"
import Nav from "../components/Nav"

const BlogLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="relative">
        <Nav />
        <main className="leading-relaxed">{children}</main>
        <Footer />
      </div>
    </div>
  </div>
)

export default BlogLayout
