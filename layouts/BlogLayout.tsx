import Nav from "../components/Nav"

const BlogLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-screen h-screen bg-slate-200">
    <main className="max-w-xl px-7 py-5 m-auto leading-relaxed text-cyan-600">
      <Nav />
      {children}
    </main>
  </div>
)

export default BlogLayout
