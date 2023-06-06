import { allProjects } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { format, parseISO } from "date-fns"
import { notFound } from "next/navigation"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}

export const generateStaticParams = async () =>
  allProjects.map(project => ({ slug: project._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    project => project._raw.flattenedPath === params.slug
  )
  if (!project) throw new Error(`Project not found for slug: ${params.slug}`)
  return { title: project.title }
}

export default function Project({ params }: { params: { slug: string } }) {
  const project = allProjects.find(
    project => project._raw.flattenedPath === params.slug
  )
  if (!project) notFound()

  const MDXContent = useMDXComponent(project.body.code)

  return (
    <article className="prose mx-auto max-w-4xl px-4 py-16 dark:prose-invert lg:prose-lg sm:px-6 md:px-8">
      <div className="mb-8 text-center">
        <time
          dateTime={project.published}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(project.published), "LLLL d, yyyy")}
        </time>
        {/* @ts-ignore text-wrap: balance is to new for TS. 🙃 */}
        <h1 style={{ textWrap: "balance" }}>{project.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  )
}
