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
    <li className="border-b-slate-500 border-b-2 px-2 py-6 border-r-2 cursor-pointer transition-all last-of-type:border-b-0 hover:bg-slate-600 text-cyan-300 active:shadow-sm focus:shadow-sm">
      <Link href={`blog/${post.filePath.replace(/\.mdx?$/, "")}`}>
        <div className="flex items-start justify-between">
          <div className="w-28">
            <time dateTime={post.data.published} className="w-16 pr-2">
              {post.data.published}
            </time>
          </div>
          <h2 className="m-0 text-sm flex-1 text-left">{post.data.title}</h2>
          <button className="all">
            <ArrowRightIcon />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview
