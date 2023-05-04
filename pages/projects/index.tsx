import fs from "fs"
import matter from "gray-matter"
import path from "path"

import PageLayout from "../../layouts/PageLayout"
import { projectFilePaths, PROJECTS_PATH } from "../../utils/mdxUtils"

import ProjectPreview from "../../components/ProjectPreview"

const sortByPublished = (a, b) =>
  Date.parse(b.data.published) - Date.parse(a.data.published)

const Project = ({ projects }) => {
  return (
    <>
      <h1 className="m-0 text-6xl font-bold leading-normal text-zinc-50">
        Projects
      </h1>
      <ul>
        {projects.sort(sortByPublished).map(project => (
          <ProjectPreview project={project} key={project.data.title} />
        ))}
      </ul>
    </>
  )
}

Project.Layout = PageLayout

export default Project

export function getStaticProps() {
  const projects = projectFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  // Remove the blog projects that a flagged with isDraft
  return {
    props: { projects: projects.filter(project => !project.data.isDraft) },
  }
}
