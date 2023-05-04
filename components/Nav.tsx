import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import {
  ArrowLeftIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@modulz/radix-icons"

const Nav = () => {
  const { asPath } = useRouter()

  return (
    <nav className="flex justify-between py-12">
      <div>
        {asPath !== "/" && (
          <Link href="/" passHref>
            <div className="flex cursor-pointer items-center gap-2 text-sm">
              <ArrowLeftIcon /> <span>Home</span>
            </div>
          </Link>
        )}
      </div>
      <ul className="flex space-x-8">
        <li>
          <a
            href="https://twitter.com/zeekrey_"
            className="hover:text-emerald-100"
          >
            <TwitterLogoIcon />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/zeekrey"
            className="hover:text-emerald-100"
          >
            <GitHubLogoIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
