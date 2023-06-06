import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { format, parseISO } from "date-fns"
import { notFound } from "next/navigation"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}

export const generateStaticParams = async () => {
  const publishedPosts = allPosts.filter(post => !post.isDraft)

  return publishedPosts.map(post => ({
    slug: post.slug,
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(post => post.slug === params.slug)

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const { title, published, description } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: published,
      url: `https://krey.io/posts/${params.slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [ogImage],
    },
  }
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find(post => post.slug === params.slug)

  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="prose mx-auto max-w-4xl px-4 py-16 dark:prose-invert lg:prose-lg sm:px-6 md:px-8">
      <div className="mb-8 text-center">
        <time dateTime={post.published} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.published), "LLLL d, yyyy")}
        </time>
        {/* @ts-ignore text-wrap: balance is to new for TS. 🙃 */}
        <h1 style={{ textWrap: "balance" }}>{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  )
}
