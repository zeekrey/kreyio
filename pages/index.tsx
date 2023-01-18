import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import Link from "next/link"
import PageLayout from "../layouts/PageLayout"
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import PostPreview from "../components/PostPreview"
import { Octokit } from "octokit"
import type { GraphQlQueryResponseData } from "@octokit/graphql"
import Project from "../components/Project"
import Button from "../components/Button"

const sortByPublished = (a, b) =>
  Date.parse(b.data.published) - Date.parse(a.data.published)

const octokit = new Octokit({
  auth: process.env.github_token,
})

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths
    .map(filePath => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .slice(0, 5)

  const {
    user: { pinnedItems },
  } = await octokit.graphql<{ user: { pinnedItems: { edges: unknown } } }>(
    `
    {
      user(login: "zeekrey") {
        pinnedItems(first: 10) {
          edges {
            node {
              ... on Repository {
                id
                name
                createdAt
                description
                forkCount
                primaryLanguage {
                  name
                  color
                }
                pushedAt
                stargazers {
                  totalCount
                }
                updatedAt
                url
              }
            }
          }
        }
      }
    }
    
    `
  )

  return {
    props: {
      posts: posts.filter(post => !post.data.isDraft),
      projects: pinnedItems.edges,
    },
    // revalidate: 60 * 60, Once per hour 60seconds * 60minutes REMOVE THIS FOR NOW, DEPLOYMENT FAILS IF ENABLED
  }
}

const Index = ({ posts, projects }) => {
  return (
    <>
      <NextSeo
        title="Christian Krey"
        description="Something about me and the things I'm building."
        canonical="https://krey.io"
        openGraph={{
          type: "website",
          url: "https://krey.io",
          title: "Christian Krey",
          description: "Something about me and the things I'm building.",
          images: [
            {
              url: `https://krey.io/thumbnail.png`,
              width: 1012,
              height: 506,
              alt: "https://krey.io/",
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
      {/* Headline */}
      <div className="pt-16">
        <div>Hey there, I&apos;m</div>
        <h1 className="text-3xl leading-normal text-blue-500 m-0">
          Christian 👋🏻
        </h1>
      </div>
      <div className="px-16">
        I&apos;m a frontend developer focusing on stuff humans can use and
        interact with. I&apos;m currently into{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React"
        >
          Nextjs
        </a>{" "}
        and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React"
        >
          Vercel
        </a>
        .
      </div>
      <h2>Blog</h2>
      <ul className="m-0 p-0 list-none">
        {posts.sort(sortByPublished).map(post => (
          <PostPreview post={post} key={post.data.title} />
        ))}
      </ul>
      <div className="flex content-end pt-2">
        <Link href="/blog" passHref>
          <Button as="a">See all</Button>
        </Link>
      </div>

      <h2>Open Source Projects</h2>
      {projects
        .sort(({ node: prevNode }, { node }) =>
          prevNode.stargazers.totalCount < node.stargazers.totalCount ? 1 : -1
        )
        .map(({ node }) => (
          <Project {...node} key={node.id} />
        ))}
    </>
  )
}

Index.Layout = PageLayout

export default Index
