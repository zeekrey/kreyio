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

// const Ul = styled("ul", {
//   padding: 0,
//   margin: 0,
//   appearance: "none",
//   listStyle: "none",
//   display: "flex",
//   justifyContent: "flex-end",
//   alignItems: "center",

//   li: {
//     paddingLeft: "1rem",
//   },

//   a: {
//     boxShadow: "none",
//   },
// })

// const Li = styled("li", {
//   cursor: "pointer",

//   "&:hover": {
//     color: "$yellow12",
//   },
// })

const Nav = () => {
  const { asPath } = useRouter()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="flex justify-between py-12">
      <div>
        {asPath !== "/" && (
          <Link href="/" passHref>
            <div
            // css={{
            //   all: "unset",
            //   fontSize: "10px",
            //   display: "flex",
            //   alignItems: "center",
            //   cursor: "pointer",
            //   span: { paddingLeft: "10px" },
            // }}
            >
              <ArrowLeftIcon /> <span>Home</span>
            </div>
          </Link>
        )}
      </div>
      <ul className="flex space-x-8">
        <li>
          <a href="https://twitter.com/zeekrey_" className="hover:text-emerald-100">
            <TwitterLogoIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/zeekrey" className="hover:text-emerald-100">
            <GitHubLogoIcon />
          </a>
        </li>
        {/* <li onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav
