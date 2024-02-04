import { Button } from "@/components/ui/button"
import { graphql } from "@octokit/graphql"
import { compareDesc } from "date-fns"
import Link from "next/link"

import {
  GithubProject,
  OssProjectPreview,
} from "../components/oss-project-preview"
import PostPreview from "../components/post-preview"
import ProjectPreview from "../components/project-preview"
import { getBlogPosts } from "../lib/db"

async function getGithubRepos() {
  const result = await graphql<{
    user: {
      pinnedItems: {
        edges: {
          node: GithubProject
        }[]
      }
    }
  }>(
    `
      query repos($owner: String!, $count: Int!) {
        user(login: $owner) {
          pinnedItems(first: $count) {
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
    `,
    {
      count: 10,
      headers: {
        authorization: `token ${process.env.github_token}`,
      },
      owner: "zeekrey",
    },
  )

  return result.user.pinnedItems.edges
}

const Index = async () => {
  const projects = (await getGithubRepos()).sort(
    ({ node: prevNode }, { node }) =>
      prevNode.stargazers.totalCount < node.stargazers.totalCount ? 1 : -1,
  )
  const commercialProjects = getBlogPosts()
    .filter(a => a.metadata.type === "Project")
    .sort((a, b) =>
      compareDesc(
        new Date(a.metadata.publishedAt),
        new Date(b.metadata.publishedAt),
      ),
    )

  const posts = getBlogPosts()
    .filter(a => a.metadata.type === "Post")
    .filter(a => !a.metadata.isDraft)
    .sort((a, b) =>
      compareDesc(
        new Date(a.metadata.publishedAt),
        new Date(b.metadata.publishedAt),
      ),
    )
    .slice(0, 4)

  return (
    <div className="">
      {/* Headline */}
      <div className="pt-6 md:pt-16 flex justify-between">
        <h1 className="m-0 text-2xl font-bold leading-normal dark:text-zinc-50">
          Christian Krey
        </h1>
        <ul className="flex justify-center items-center space-x-3">
          <li>
            <Button
              asChild
              className="dark:fill-zinc-50"
              size="icon"
              variant="ghost"
            >
              <a href="https://twitter.com/zeekrey_">
                <svg
                  className="h-4 w-4"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="dark:fill-zinc-50"
              size="icon"
              variant="ghost"
            >
              <a href="https://www.linkedin.com/in/christiankrey/">
                <svg
                  className="h-4 w-4"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="dark:fill-zinc-50"
              size="icon"
              variant="ghost"
            >
              <a href="https://github.com/zeekrey">
                <svg
                  className="h-4 w-4"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </Button>
          </li>
        </ul>
      </div>
      <p className="py-6 md:py-12">
        Software developer by trade, but I&apos;ve been known to take a stab at
        anything - even if it&apos;s way over my head. 👷🏻‍♂️ Currently I&apos;m
        freelancing, mostly working with React and Svelte.
      </p>
      {/* Blog */}
      <section className="">
        <h2 className="text-2xl font-semibold dark:text-zinc-50">Blog</h2>
        <ul className="list-none divide-y py-2">
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </ul>
        <div className="pt-2 flex justify-end">
          <Button asChild variant="outline">
            <Link href="/blog" passHref>
              All Blog Posts
            </Link>
          </Button>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold dark:text-zinc-50">
          Open Source Projects
        </h2>
        <ul className="list-none divide-y py-2">
          {projects.map(({ node }) => (
            <OssProjectPreview {...node} key={node.id} />
          ))}
        </ul>
      </section>

      {/* Commercial Projects */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold dark:text-zinc-50">
          Commercial Projects (Freelance)
        </h2>
        <ul className="list-none">
          {commercialProjects.map(project => (
            <ProjectPreview key={project.slug} project={project} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Index
