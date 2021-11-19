import { styled, Box } from "../stitches.config"
import { StarIcon, CommitIcon } from "@modulz/radix-icons"

const Wrapper = styled("a", {
  all: "unset",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  borderRadius: "2px",
  cursor: "pointer",
  transition: "all .1s",

  "&:last-of-type": {
    borderBottom: "none",
  },

  "&:hover": {
    background: "$sand2",
    color: "inherit",
  },

  "&:active, &:focus": {
    boxShadow: "0 0 0px 2px $sand11",
  },
})

const Headline = styled("div", {
  small: {
    color: "$sand9",
  },

  strong: {},
})

const Tag = styled("div", {
  padding: "5px 12px",
  background: "$yellow4",
  color: "$yellow12",
  borderRadius: "2px",
  fontSize: "12px",
})

const Project: React.FunctionComponent<{
  id: string
  name: string
  createdAt: string
  description: string
  forkCount: number
  primaryLanguage?: {
    name: string
    color: string
  }
  pushedAt: string
  stargazers: {
    totalCount: number
  }
  updatedAt: string
  url: string
}> = ({ name, description, primaryLanguage, forkCount, stargazers, url }) => {
  return (
    <Wrapper href={url}>
      <div>
        <Headline>
          <small>zeekrey/</small>
          <strong>{name}</strong>
        </Headline>
        <p>{description}</p>
      </div>
      <div>
        {primaryLanguage && <Tag>{primaryLanguage.name}</Tag>}
        <Box
          css={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px",
            paddingTop: "10px",
          }}
        >
          <Box
            css={{
              display: "grid",
              placeContent: "center",
              textAlign: "center",
              gap: "5px",
            }}
          >
            <CommitIcon />
            <small>{forkCount}</small>
          </Box>
          <Box
            css={{
              display: "grid",
              placeContent: "center",
              textAlign: "center",
              gap: "5px",
            }}
          >
            <StarIcon />
            <small>{stargazers.totalCount}</small>
          </Box>
        </Box>
      </div>
    </Wrapper>
  )
}

export default Project
