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
    <li className="border-b-zinc-800 border-b last-of-type:border-b-0 py-6 cursor-pointer transition-all  hover:bg-zinc-600 text-zinc-300 active:shadow-sm focus:shadow-sm">
      <Link href={`blog/${post.filePath.replace(/\.mdx?$/, "")}`}>
        <div className="flex items-start justify-between">
          <div className="w-28">
            <time
              dateTime={post.data.published}
              className="w-16 pr-2 text-sm text-zinc-700"
            >
              {post.data.published}
            </time>
          </div>
          <h2 className="m-0 flex-1 text-left">{post.data.title}</h2>
          <button className="all">
            <ArrowRightIcon />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview
