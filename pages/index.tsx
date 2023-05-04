import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import Link from "next/link"
import PageLayout from "../layouts/PageLayout"
import {
  postFilePaths,
  POSTS_PATH,
  PROJECTS_PATH,
  projectFilePaths,
} from "../utils/mdxUtils"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import PostPreview from "../components/PostPreview"
import { Octokit } from "octokit"
import type { GraphQlQueryResponseData } from "@octokit/graphql"
import Project from "../components/Project"
import Button from "../components/Button"
import ProjectPreview from "../components/ProjectPreview"

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

  const commercialProjects = projectFilePaths
    .map(filePath => {
      const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath))
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
      commercialProjects: commercialProjects.filter(
        project => !project.data.isDraft
      ),
      projects: pinnedItems.edges,
    },
    // revalidate: 60 * 60, Once per hour 60seconds * 60minutes REMOVE THIS FOR NOW, DEPLOYMENT FAILS IF ENABLED
  }
}

const Index = ({ posts, projects, commercialProjects }) => {
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
        <div className="text-zinc-400">Hey there, I&apos;m</div>
        <h1 className="m-0 text-6xl font-bold leading-normal text-zinc-50">
          Christian 👋🏻
        </h1>
      </div>
      <p className="py-16">
        Software developer by trade, but I&apos;ve been known to take a stab at
        anything - even if it&apos;s way over my head. 👷🏻‍♂️ Currently I&apos;m
        freelancing, mostly working with React and Svelte.
      </p>

      {/* Blog */}
      <section className="py-6">
        <h2 className="my-4 text-xl font-semibold text-zinc-700">Blog</h2>
        <ul className="m-0 list-none p-0">
          {posts.sort(sortByPublished).map(post => (
            <PostPreview post={post} key={post.data.title} />
          ))}
        </ul>
        <div className="float-right pt-2">
          <Link href="/blog" passHref>
            <Button as="a">See all</Button>
          </Link>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-6">
        <h2 className="my-4 text-xl font-semibold text-zinc-700">
          Open Source Projects
        </h2>
        {projects
          .sort(({ node: prevNode }, { node }) =>
            prevNode.stargazers.totalCount < node.stargazers.totalCount ? 1 : -1
          )
          .map(({ node }) => (
            <Project {...node} key={node.id} />
          ))}
      </section>

      {/* Commercial Projects */}
      <section className="py-6">
        <h2 className="my-4 text-xl font-semibold text-zinc-700">
          Commercial Projects (Freelance)
        </h2>
        <ul className="m-0 list-none p-0">
          {commercialProjects.sort(sortByPublished).map(project => (
            <ProjectPreview project={project} key={project.data.title} />
          ))}
        </ul>
        <div className="float-right pt-2">
          <Link href="/projects" passHref>
            <Button as="a">See all</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

Index.Layout = PageLayout

export default Index
