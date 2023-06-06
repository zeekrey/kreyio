import Link from "next/link"
import { type Post } from "contentlayer/generated"
import { format, parseISO } from "date-fns"

const PostPreview: React.FunctionComponent<{
  post: Post
}> = ({ post }) => {
  return (
    <li className="group cursor-pointer border-b border-b-zinc-800 py-6 text-zinc-300 transition-all last-of-type:border-b-0">
      <Link href={`blog/${post.slug}`}>
        <div className="flex items-start justify-between">
          <div className="w-40">
            <time
              dateTime={post.published}
              className="pr-2 text-sm text-zinc-700 group-hover:text-zinc-500"
            >
              {format(parseISO(post.published), "LLLL d, yyyy")}
            </time>
          </div>
          <h2 className="m-0 flex-1 text-left">{post.title}</h2>
          <div className="flex items-center space-x-2 group-hover:text-zinc-50">
            <span className="text-sm opacity-0 transition duration-150 ease-out group-hover:opacity-100 group-hover:ease-in">
              View
            </span>
            →
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview
