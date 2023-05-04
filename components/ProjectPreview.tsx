import Link from "next/link"
import { ArrowRightIcon } from "@modulz/radix-icons"

export type Project = {
  title: string
  description: string
  published: string
  projectStart: string
  projectEnd: string
  tags: Array<string>
  role: string
  projectLanguage: string
  documentLanguage: string
}

const ProjectPreview: React.FunctionComponent<{
  project: {
    content: string
    data: Project
    filePath: string
  }
}> = ({ project }) => {
  return (
    <li className="group cursor-pointer border-b border-b-zinc-800 py-6 text-zinc-300 last-of-type:border-b-0">
      <Link href={`projects/${project.filePath.replace(/\.mdx?$/, "")}`}>
        <div className="flex items-center justify-between">
          <div className="w-28">
            <time
              dateTime={project.data.published}
              className="mb-1 block w-16 pr-2 text-sm text-zinc-700 group-hover:text-zinc-500"
            >
              {project.data.projectStart}
            </time>
            <time
              dateTime={project.data.published}
              className="w-16 pr-2 text-sm text-zinc-700 group-hover:text-zinc-500"
            >
              {project.data.projectEnd}
            </time>
          </div>
          <div className="m-0 flex-1">
            <h2 className="">
              {project.data.title} [{project.data.role}]
            </h2>
            <ul className="mt-1 flex space-x-2">
              {project.data.tags.map(tag => (
                <li
                  key={tag}
                  className="rounded bg-zinc-800  px-2 py-1 text-center text-xs text-zinc-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
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

export default ProjectPreview
