import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Head from "next/head"
import path from "path"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils"
import BlogLayout from "../../layouts/BlogLayout"
import rehypePrettyCode from "rehype-pretty-code"
import Link from "next/link"

const components = {
  a: Link,
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
      <div id="blog">
        <h1 className="text-2xl">{frontMatter.title}</h1>
        <MDXRemote {...source} components={components} />
      </div>
    </>
  )
}

PostPage.Layout = BlogLayout

export default PostPage

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const options = {
    theme: "github-dark",
    onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }]
      }
    },
    // Feel free to add classNames that suit your docs
    // onVisitHighlightedLine(node) {
    //   node.properties.className.push('highlighted');
    // },
    // onVisitHighlightedWord(node) {
    //   node.properties.className = ['word'];
    // },
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options]],
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
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    }
  }

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
