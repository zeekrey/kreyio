import { CustomMDX } from "components/custom-mdx"
import { formatDate, getBlogPosts } from "lib/db"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export const generateStaticParams = async () => {
  const publishedPosts = getBlogPosts().filter(post => !post.metadata.isDraft)

  return publishedPosts.map(post => ({
    slug: post.slug,
  }))
}

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  let post = getBlogPosts().find(post => post.slug === params.slug)

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const { publishedAt, summary, title } = post.metadata

  return {
    description: summary,
    openGraph: {
      description: summary,
      publishedTime: publishedAt,
      title,
      type: "article",
      url: `https://krey.io/posts/${params.slug}`,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description: summary,
      title,
    },
  }
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  let post = getBlogPosts().find(post => post.slug === params.slug)

  if (!post) notFound()

  return (
    <section className="py-6 md:py-10">
      <h1 className="title font-bold text-3xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt).formattedDate}
          </p>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
