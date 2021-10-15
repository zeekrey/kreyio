import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import Image from "next/image"
import Link from "next/link"
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
import Button from "../components/Button"

import TeiniImage from "../public/portfolio/teini.png"

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

const portfolioItems = [
  {
    id: 1,
    name: "Teini",
    description:
      "Teini (tiny, [ˈtīnē]) is an extremely small webshop leveraging awesome and free solutions like Github and Vercel.",
    techStack: ["Nextjs", "React", "Typescript", "Prisma"],
    duration: "3 Month",
    employment: "Freelancer",
    href: "https://github.com/zeekrey/teini",
    image: TeiniImage,
  },
  {
    id: 2,
    name: "Sterch Shop",
    description:
      "Online Shop für mittelständisches Unternehmen, welches Kennzeichnungstechnik verkauft.",
    techStack: ["Nextjs", "React", "Typescript", "BigCommerce", "GraphQl"],
    duration: "6 Month",
    employment: "Freelancer",
    href: "https://shop.sterch.de/",
    image: TeiniImage,
  },
]

const Wrapper = styled("div", {
  display: "flex",
  paddingBottom: "46px",

  "&:last-of-type": {
    paddingBottom: "0px",
  },
})

const PortfolioName = styled("h2", {
  margin: 0,
  fontSize: "32px",
})

const PortfolioMeta = styled("small", {
  all: "unset",
  display: "block",
  color: "$sand10",
  paddingBottom: "3px",
})

const Tag = styled("div", {
  padding: "5px 12px",
  background: "$yellow4",
  color: "$yellow12",
  borderRadius: "2px",
  fontSize: "12px",
})

const PortfolioItem: React.FunctionComponent<{
  id: number
  name: string
  description: string
  techStack: string[]
  image: StaticImageData
  href: string
  employment: string
  duration: string
}> = ({
  id,
  name,
  description,
  techStack,
  image,
  href,
  duration,
  employment,
}) => {
  return (
    <Wrapper>
      <Box
        css={{
          position: "relative",
          width: "540px",
          borderRadius: "2px",
          overflow: "hidden",

          display: "none",
          "@medium": {
            display: "inherit",
          },
        }}
      >
        <Image src={image} layout="fill" objectFit="cover" />
      </Box>
      <Box css={{ "@medium": { padding: "20px 32px" } }}>
        <PortfolioName>{name}</PortfolioName>
        <PortfolioMeta as="a" css={{ cursor: "pointer" }} href={href}>
          {href}
        </PortfolioMeta>
        <p>{description}</p>
        <PortfolioMeta>Duration: {duration}</PortfolioMeta>
        <PortfolioMeta>Employment: {employment}</PortfolioMeta>
        <Box css={{ display: "flex", gap: "10px", paddingTop: "1em" }}>
          {techStack.map(tech => (
            <Tag>{tech}</Tag>
          ))}
        </Box>
      </Box>
    </Wrapper>
  )
}

const Portfolio = ({ posts, projects }) => {
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
        <div>Hey there, this is my</div>
        <h1>Portfolio</h1>
      </Headline>
      <Box as="p" css={{ padding: "48px 0" }}>
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
      </Box>
      {portfolioItems.map(portfolioItem => (
        <PortfolioItem {...portfolioItem} />
      ))}
    </>
  )
}

Portfolio.Layout = PageLayout

export default Portfolio
