import { CustomMDX } from "@/components/custom-mdx"
import { getBlogPosts } from "@/lib/db"
import { formatDate } from "@/lib/db"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export const generateStaticParams = async () =>
  getBlogPosts().map(project => ({ slug: project.slug }))

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const project = getBlogPosts().find(
    project => project.slug === params.slug
  )
  if (!project) throw new Error(`Project not found for slug: ${params.slug}`)
  return { title: project.metadata.title }
}

export default async function Project(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getBlogPosts().find(
    project => project.slug === params.slug
  )
  if (!project) notFound()

  return (
    <section className="py-6 md:py-10">
    <h1 className="title font-bold text-3xl tracking-tighter max-w-[650px]">
      {project.metadata.title}
    </h1>
    <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
      <Suspense fallback={<p className="h-5" />}>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(project.metadata.publishedAt).formattedDate}
        </p>
      </Suspense>
    </div>
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <CustomMDX source={project.content} />
    </article>
  </section>
  )
}
