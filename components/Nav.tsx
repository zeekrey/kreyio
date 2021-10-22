import { styled, Box } from "../stitches.config"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import {
  ArrowLeftIcon,
  SunIcon,
  MoonIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@modulz/radix-icons"

const Container = styled("nav", {
  gridColumn: "1/12",
  display: "flex",
  justifyContent: "space-between",

  "@print": {
    display: "none",
    visibility: "hidden",
  },
})

const Ul = styled("ul", {
  padding: 0,
  margin: 0,
  appearance: "none",
  listStyle: "none",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",

  li: {
    paddingLeft: "1rem",
  },

  a: {
    boxShadow: "none",
  },
})

const Li = styled("li", {
  cursor: "pointer",

  "&:hover": {
    color: "$yellow12",
  },
})

const Nav = () => {
  const { asPath } = useRouter()
  const { theme, setTheme } = useTheme()

  return (
    <Container>
      <div>
        {asPath !== "/" && (
          <Link href="/" passHref>
            <Box
              as="a"
              css={{
                all: "unset",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                span: { paddingLeft: "10px" },
              }}
            >
              <ArrowLeftIcon /> <span>Home</span>
            </Box>
          </Link>
        )}
      </div>
      <Ul>
        <Li>
          <a href="https://twitter.com/zeekrey_">
            <TwitterLogoIcon />
          </a>
        </Li>
        <Li>
          <a href="https://github.com/zeekrey">
            <GitHubLogoIcon />
          </a>
        </Li>
        <Li onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </Li>
      </Ul>
    </Container>
  )
}

export default Nav
