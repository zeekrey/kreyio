import Link from "next/link"
import { ArrowRightIcon } from "@modulz/radix-icons"

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
    <li className="group cursor-pointer border-b border-b-zinc-800 py-6 text-zinc-300 transition-all last-of-type:border-b-0">
      <Link href={`blog/${post.filePath.replace(/\.mdx?$/, "")}`}>
        <div className="flex items-start justify-between">
          <div className="w-28">
            <time
              dateTime={post.data.published}
              className="w-16 pr-2 text-sm text-zinc-700 group-hover:text-zinc-500"
            >
              {post.data.published}
            </time>
          </div>
          <h2 className="m-0 flex-1 text-left">{post.data.title}</h2>
          <div className="flex items-center space-x-2 group-hover:text-zinc-50">
            <span className="text-sm opacity-0 transition duration-150 ease-out group-hover:opacity-100 group-hover:ease-in">
              View
            </span>
            <ArrowRightIcon />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview
