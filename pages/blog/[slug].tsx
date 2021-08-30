import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import path from "path"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

import CustomLink from "../../components/CustomLink"
import PageLayout from "../../layouts/PageLayout"
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils"
import { shikiRemarkPlugin } from "../../utils/mdxUtils"

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
}

const PostPage = ({ source, frontMatter }) => {
  const { asPath, basePath, pathname } = useRouter()
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://krey.io${asPath}`}
        openGraph={{
          type: "website",
          url: `https://krey.io${asPath}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://krey.io${asPath}.png`,
              width: 1012,
              height: 506,
              alt: "Og Image Alt",
            },
          ],
          site_name: "krey.io",
        }}
        twitter={{
          handle: "@zeekrey_",
          site: "@zeekrey_",
          cardType: "summary_large_image",
        }}
      />
      <div>
        <h1>{frontMatter.title}</h1>
        <main>
          <MDXRemote {...source} components={components} />
        </main>
      </div>
    </>
  )
}

PostPage.Layout = PageLayout

export default PostPage

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const shiki = await import("shiki")
  const highlighter = await shiki.getHighlighter({
    theme: "github-dark",
  })

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[shikiRemarkPlugin, { highlighter }]],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
