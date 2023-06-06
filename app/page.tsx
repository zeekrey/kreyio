import Link from "next/link"
import PostPreview from "../components/PostPreview"
import { graphql } from "@octokit/graphql"
import Project, { type GithubProject } from "../components/Project"
import Button from "../components/Button"
import ProjectPreview from "../components/ProjectPreview"
import { allPosts, allProjects } from "contentlayer/generated"
import { compareDesc } from "date-fns"

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
      owner: "zeekrey",
      count: 10,
      headers: {
        authorization: `token ${process.env.github_token}`,
      },
    }
  )

  return result.user.pinnedItems.edges
}

const Index = async () => {
  const projects = (await getGithubRepos()).sort(
    ({ node: prevNode }, { node }) =>
      prevNode.stargazers.totalCount < node.stargazers.totalCount ? 1 : -1
  )
  const commercialProjects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.published), new Date(b.published))
  )
  const posts = allPosts
    .filter(a => !a.isDraft)
    .sort((a, b) => compareDesc(new Date(a.published), new Date(b.published)))

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="relative">
          {/* Headline */}
          <div className="pt-16">
            <div className="text-zinc-400">Hey there, I&apos;m</div>
            <h1 className="m-0 text-6xl font-bold leading-normal text-zinc-50">
              Christian 👋🏻
            </h1>
          </div>
          <p className="py-16">
            Software developer by trade, but I&apos;ve been known to take a stab
            at anything - even if it&apos;s way over my head. 👷🏻‍♂️ Currently
            I&apos;m freelancing, mostly working with React and Svelte.
          </p>

          {/* Blog */}
          <section className="py-6">
            <h2 className="my-4 text-xl font-semibold text-zinc-700">Blog</h2>
            <ul className="m-0 list-none p-0">
              {posts.map(post => (
                <PostPreview post={post} key={post._id} />
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
            {projects.map(({ node }) => (
              <Project {...node} key={node.id} />
            ))}
          </section>

          {/* Commercial Projects */}
          <section className="py-6">
            <h2 className="my-4 text-xl font-semibold text-zinc-700">
              Commercial Projects (Freelance)
            </h2>
            <ul className="m-0 list-none p-0">
              {commercialProjects.map(project => (
                <ProjectPreview project={project} key={project._id} />
              ))}
            </ul>
            <div className="float-right pt-2">
              <Link href="/projects" passHref>
                <Button as="a">See all</Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Index
