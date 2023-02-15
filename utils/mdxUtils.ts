import fs from "fs"
import path from "path"

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "posts")

// PROJECTS_PATH is useful when you want to get the path to a specific file
export const PROJECTS_PATH = path.join(process.cwd(), "projects")

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path))

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const projectFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path))
