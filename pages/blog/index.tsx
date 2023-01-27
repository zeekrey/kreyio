import fs from "fs"
import matter from "gray-matter"
import path from "path"

import PageLayout from "../../layouts/PageLayout"
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils"

import PostPreview from "../../components/PostPreview"

const sortByPublished = (a, b) =>
  Date.parse(b.data.published) - Date.parse(a.data.published)

const Blog = ({ posts }) => {
  return (
    <>
      <h1>Blog</h1>
      <div>
        {posts.sort(sortByPublished).map(post => (
          <PostPreview post={post} key={post.data.title} />
        ))}
      </div>
    </>
  )
}

Blog.Layout = PageLayout

export default Blog

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    // console.log(data)

    return {
      content,
      data,
      filePath,
    }
  })

  // Remove the blog posts that a flagged with isDraft
  return { props: { posts: posts.filter(post => !post.data.isDraft) } }
}
