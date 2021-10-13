import fs from "fs"
import { styled } from "../../stitches.config"
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

const components = {
  a: CustomLink,
  Head,
}

const H1 = styled("h1", {
  fontSize: "45px",
  padding: "32px 0",
})

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
        <H1>{frontMatter.title}</H1>
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
