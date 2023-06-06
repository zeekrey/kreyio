import { defineDocumentType, makeSource } from "@contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"

const commonFields = {
  filePathPattern: "content/**/*.mdx",
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "date", required: true },
    isDraft: { type: "boolean", default: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: post => post._raw.flattenedPath,
    },
    structuredData: {
      type: "json",
      resolve: doc => ({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: doc.title,
        datePublished: doc.published,
        dateModified: doc.published,
        description: doc.description,
        // image: doc.image
        //   ? `https://leerob.io${doc.image}`
        //   : `https://leerob.io/api/og?title=${doc.title}`,
        url: `https://krey.io/posts/${doc._raw.flattenedPath}`,
        author: {
          "@type": "Person",
          name: "Lee Robinson",
        },
      }),
    },
  },
  ...commonFields,
}))

export const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "date", required: true },
    projectStart: { type: "date", required: true },
    projectEnd: { type: "date", required: true },
    role: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    projectLanguage: { type: "string", required: true },
    documentLanguage: { type: "enum", options: ["de", "en"], required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: project => project._raw.flattenedPath,
    },
  },
  ...commonFields,
}))

const rehypePrettyCodeOptions = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",

  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  // onVisitLine(node) {
  //   // Prevent lines from collapsing in `display: grid` mode, and
  //   // allow empty lines to be copy/pasted
  //   if (node.children.length === 0) {
  //     node.children = [{ type: "text", value: " " }]
  //   }
  // },
  // onVisitHighlightedLine(node) {
  //   // Each line node by default has `class="line"`.
  //   node.properties.className.push("highlighted")
  // },
  // onVisitHighlightedWord(node) {
  //   // Each word node has no className by default.
  //   node.properties.className = ["word"]
  // },
}

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    // rehypePlugins: [rehypePrettyCode, [require("rehype-shiki"), options]],
  },
})
