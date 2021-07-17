import { styled } from "../stitches.config"
import Link from "next/link"
import { useRouter } from "next/router"

const Container = styled("nav", {
  gridColumn: "1/12",
})

const Ul = styled("ul", {
  padding: 0,
  margin: 0,
  appearance: "none",
  listStyle: "none",
  display: "flex",
  justifyContent: "flex-end",

  li: {
    paddingLeft: "1rem",
  },

  a: {
    boxShadow: "none",
  },
})

const Li = styled("li", {
  variants: {
    isActive: {
      true: {
        a: {
          boxShadow: "0px 2px $grass6",
        },
      },
      false: {
        a: {
          boxShadow: "none",
        },
      },
    },
  },
})

const Nav = () => {
  const { asPath } = useRouter()
  return (
    <Container>
      <Ul>
        <Li isActive={asPath === "/"}>
          <Link href="/">Me</Link>
        </Li>
        <Li isActive={asPath === "/blog"}>
          <Link href="/blog">Blog</Link>
        </Li>
      </Ul>
    </Container>
  )
}

export default Nav
