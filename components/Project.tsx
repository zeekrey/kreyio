import { StarIcon, CommitIcon } from "@modulz/radix-icons"

const Project: React.FunctionComponent<{
  id: string
  name: string
  createdAt: string
  description: string
  forkCount: number
  primaryLanguage?: {
    name: string
    color: string
  }
  pushedAt: string
  stargazers: {
    totalCount: number
  }
  updatedAt: string
  url: string
}> = ({ name, description, primaryLanguage, forkCount, stargazers, url }) => {
  return (
    <a
      href={url}
      className="flex cursor-pointer appearance-none justify-between py-2 transition-all focus:shadow-sm active:shadow-sm"
    >
      <div>
        <div>
          <small className="text-xs text-zinc-700">zeekrey/</small>
          <strong className="text-xs text-zinc-300">{name}</strong>
        </div>
        <p className="py-3">{description}</p>
      </div>
      <div>
        {primaryLanguage && (
          <div className="rounded bg-zinc-800 py-1 text-center text-xs text-zinc-400">
            {primaryLanguage.name}
          </div>
        )}
        <div className="flex justify-end gap-4 pt-2">
          <div className="flex content-center gap-4 text-center">
            <CommitIcon />
            <small>{forkCount}</small>
          </div>
          <div className="flex content-center items-center gap-4 text-center">
            <StarIcon />
            <small>{stargazers.totalCount}</small>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project
