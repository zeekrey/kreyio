import { StarIcon } from "lucide-react"

import { Badge } from "./ui/badge"

export type GithubProject = {
  createdAt: string
  description: string
  forkCount: number
  id: string
  name: string
  primaryLanguage?: {
    color: string
    name: string
  }
  pushedAt: string
  stargazers: {
    totalCount: number
  }
  updatedAt: string
  url: string
}

export const OssProjectPreview: React.FunctionComponent<GithubProject> = ({
  description,
  forkCount,
  name,
  primaryLanguage,
  stargazers,
  url,
}) => {
  return (
    <li className="py-3 group transition-all">
      <a
        className="flex items-center cursor-pointer appearance-none justify-between "
        href={url}
      >
        <div>
          <h2 className="font-semibol pb-1 group-hover:text-black group-hover:dark:text-white flex items-center">
            <small className="text-zinc-400 dark:text-zinc-700">zeekrey/</small>
            <strong className="text-zinc-900 dark:text-zinc-300">{name}</strong>
            {primaryLanguage && (
              <Badge className="ml-2 font-light text-xs" variant="secondary">
                {primaryLanguage.name}
              </Badge>
            )}
          </h2>
          <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-zinc-300 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200">
          <StarIcon className="w-3 h-3" />
          <small>{stargazers.totalCount}</small>
        </div>
      </a>
    </li>
  )
}
