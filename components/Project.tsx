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
      className="appearance-none flex justify-between py-2 cursor-pointer transition-all active:shadow-sm focus:shadow-sm"
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
          <div className="py-1 rounded bg-zinc-800 text-zinc-400 text-xs text-center">
            {primaryLanguage.name}
          </div>
        )}
        <div className="flex justify-end gap-4 pt-2">
          <div className="flex content-center text-center gap-4">
            <CommitIcon />
            <small>{forkCount}</small>
          </div>
          <div className="flex items-center content-center text-center gap-4">
            <StarIcon />
            <small>{stargazers.totalCount}</small>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project
