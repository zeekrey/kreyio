import { styled } from "../stitches.config"
import Link from "next/link"
import Box from "./Box"

const Wrapper = styled("li", {
  padding: "1rem 0",
})

const H2 = styled("h2", {
  marginBottom: "0.75rem",
  marginTop: 0,
  fontSize: "1.2rem",
  flex: 1,
})

const PostPreview: React.FunctionComponent<{
  post: {
    content: string
    data: {
      description: string
      published: string
      title: string
    }
    filePath: string
  }
}> = ({ post }) => {
  return (
    <Wrapper>
      <Link href={`blog/${post.filePath.replace(/\.mdx?$/, "")}`} passHref>
        <Box as="a" css={{ color: "inherit" }}>
          <Box
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <H2>{post.data.title}</H2>
            <time dateTime={post.data.published}>{post.data.published}</time>
          </Box>
          <div>{post.data.description}</div>
        </Box>
      </Link>
    </Wrapper>
  )
}

export default PostPreview
