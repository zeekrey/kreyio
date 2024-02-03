import { Post } from "@/lib/db"
import { format, parseISO } from "date-fns"
import { ArrowRightCircleIcon } from "lucide-react"
import Link from "next/link"

const ProjectPreview: React.FunctionComponent<{
  project: Post
}> = ({ project }) => {
  return (
    <li className="group cursor-pointer transition-all text-zinc-900 dark:text-zinc-50 py-3">
      <Link href={`projects/${project.slug}`}>
        <div className="flex justify-between items-center">
          <div>
            <time
              className="text-xs font-light text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
              dateTime={project.metadata.projectStart}
            >
              {format(parseISO(project.metadata.projectStart ?? ""), "MM.yyyy")} -{" "}
              {format(parseISO(project.metadata.projectEnd ?? ""), "MM.yyyy")}
            </time>

            <h2 className="font-semibol pb-1 group-hover:text-black group-hover:dark:text-white">
              {project.metadata.title} [{project.metadata.role}]
            </h2>
          </div>
          <div className="w-4 ">
            <ArrowRightCircleIcon className="w-4 h-4 text-zinc-300 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ProjectPreview
