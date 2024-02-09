import fs from "fs"
import path from "path"

type Metadata = {
  documentLanguage: string
  image?: string
  isDraft: string
  projectEnd?: string
  projectLanguage?: string
  projectStart?: string
  publishedAt: string
  role?: string
  summary: string
  tags: string | string[]
  title: string
  type: "post" | "project" | string
}

export type Post = {
  content: string
  metadata: Metadata
  slug: string
  tweetIds: string[]
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, "").trim()
  let frontMatterLines = frontMatterBlock.trim().split("\n")
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach(line => {
    let [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { content, metadata: metadata as Metadata }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter(file => path.extname(file) === ".mdx")
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function extractTweetIds(content) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
  return tweetMatches?.map(tweet => tweet.match(/[0-9]+/g)[0]) || []
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map(file => {
    let { content, metadata } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))
    let tweetIds = extractTweetIds(content)
    return {
      content,
      metadata,
      slug,
      tweetIds,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"))
}

export function formatDate(date: string) {
  let currentDate = new Date()
  if (!date.includes("T")) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ""

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = "Today"
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return { formattedDate, fullDate }
}