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
      className="appearance-none flex justify-between p-2 border-r-2 cursor-pointer transition-all last-of-type:border-b-0 hover:bg-slate-200 text-slate-300 active:shadow-sm focus:shadow-sm"
    >
      <div>
        <div>
          <small>zeekrey/</small>
          <strong>{name}</strong>
        </div>
        <p>{description}</p>
      </div>
      <div>
        {primaryLanguage && (
          <div className="px-2 py-8 bg-slate-400 text-gray-500 border-r-2 text-sm">
            {primaryLanguage.name}
          </div>
        )}
        <div className="flex justify-end gap-4 pt-2">
          <div className="flex content-center text-center gap-4">
            <CommitIcon />
            <small>{forkCount}</small>
          </div>
          <div className="grid content-center text-center gap-4">
            <StarIcon />
            <small>{stargazers.totalCount}</small>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project
