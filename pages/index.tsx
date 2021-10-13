import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import PageLayout from "../layouts/PageLayout"
import { styled } from "../stitches.config"
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import PostPreview from "../components/PostPreview"
import { Octokit } from "octokit"
import Box from "../components/Box"
import Project from "../components/Project"

const sortByPublished = (a, b) =>
  Date.parse(b.data.published) - Date.parse(a.data.published)

const Headline = styled("div", {
  paddingTop: "48px",

  h1: {
    fontSize: "72px",
    lineHeight: "64px",
    color: "$sand12",
    margin: 0,
  },

  div: {
    color: "$sand11",
  },
})

const H2 = styled("h2", {
  color: "$sand3",
})

const octokit = new Octokit({
  auth: process.env.github_token,
})

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  const {
    user: { pinnedItems },
  } = await octokit.graphql(
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

  return { props: { posts: posts, projects: pinnedItems.edges } }
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
          // images: [
          //   {
          //     url: `https://krey.io${asPath}.png`,
          //     width: 1012,
          //     height: 506,
          //     alt: "Og Image Alt",
          //   },
          // ],
          site_name: "krey.io",
        }}
        twitter={{
          handle: "@zeekrey_",
          site: "@zeekrey_",
          cardType: "summary_large_image",
        }}
      />
      <Headline>
        <div>Hey there, I&apos;m</div>
        <h1>zeekrey</h1>
      </Headline>
      <Box as="p" css={{ padding: "48px 0" }}>
        I&apos;m a selfthought developer focusing on stuff humans can use and
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
      </Box>
      <H2>Blog</H2>
      <Box as="ul" css={{ margin: 0, padding: 0, listStyle: "none" }}>
        {posts.sort(sortByPublished).map(post => (
          <PostPreview post={post} key={post.data.title} />
        ))}
      </Box>
      <H2>Open Source Projects</H2>
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
