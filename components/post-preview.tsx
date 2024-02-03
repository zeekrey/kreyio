import type { Post } from "@/lib/db"

import { formatDate } from "@/lib/db"
import { ArrowRightCircleIcon } from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"

const PostPreview: React.FunctionComponent<{
  post: {}
}> = ({ post }: { post: Post }) => {
  const { formattedDate, fullDate } = useMemo(
    () => formatDate(post.metadata.publishedAt),
    [post],
  )

  return (
    <li className="group cursor-pointer transition-all text-zinc-900 dark:text-zinc-50 py-3">
      <Link href={`blog/${post.slug}`}>
        <div className="flex justify-between items-center">
          <div>
            <time
              className="text-xs font-light text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
              dateTime={post.metadata.publishedAt}
            >
              {formattedDate}
            </time>
            <h2 className="font-semibol pb-1 group-hover:text-black group-hover:dark:text-white">{post.metadata.title}</h2>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
              {post.metadata.summary}
            </p>
          </div>
          <div className="w-4 ">
            <ArrowRightCircleIcon className="w-4 h-4 text-zinc-300 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostPreview
