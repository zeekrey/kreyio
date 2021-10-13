import { styled } from "../stitches.config"
import Link from "next/link"
import Box from "./Box"
import { ArrowRightIcon } from "@modulz/radix-icons"

const Wrapper = styled("li", {
  borderBottom: "1px solid $sand2",
  padding: "18px 10px",
  borderRadius: "2px",
  cursor: "pointer",

  transition: "all .1s",

  "&:last-of-type": {
    borderBottom: "none",
  },

  "&:hover": {
    background: "$sand2",
    color: "$yellow10",

    time: {
      color: "$yellow10",
    },
  },

  "&:active, &:focus": {
    boxShadow: "0 0 0px 2px $sand11",
  },
})

const PostingHeadline = styled("h2", {
  margin: 0,
  fontSize: "16px",
  flex: 1,
  textAlign: "left",
})

const PostingTimestamp = styled("time", {
  color: "$sand11",
  paddingRight: "0.5rem",
  width: "64px",
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
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Box css={{ width: "110px" }}>
              <PostingTimestamp dateTime={post.data.published}>
                {post.data.published}
              </PostingTimestamp>
            </Box>
            <PostingHeadline>{post.data.title}</PostingHeadline>
            <Box as="button" css={{ all: "unset" }}>
              <ArrowRightIcon />
            </Box>
          </Box>
        </Box>
      </Link>
    </Wrapper>
  )
}

export default PostPreview
