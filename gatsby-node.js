exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/post.js`)
  
    const blogMap = await graphql(`
      {
        allMarkdownRemark {
          nodes {
            fileAbsolutePath
            frontmatter {
              slug
              langKey
            }
          }
        }
      }
    `).then(
      ({
        data: {
          allMarkdownRemark: { nodes },
        },
      }) => {
        const map = new Map()
  
        nodes.forEach(item => {
          if (item.frontmatter.langKey) {
            // Not sure if we should go for filenames or the metadata
            // const key = /[^/]+?(?=\.)/.exec(item.fileAbsolutePath)
            const key = item.frontmatter.slug
            // Not sure if we should go for filenames or the metadata
            // const langKey = /\.(.*)\./.exec(item.fileAbsolutePath)
            const langKey = item.frontmatter.langKey
            const collection = map.get(key)
            if (!collection) {
              map.set(key, [langKey])
            } else {
              collection.push(langKey)
            }
          }
        })
  
        return map
      }
    )
  
    return graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
                langKey
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = node.frontmatter.langKey
          ? `/${node.frontmatter.langKey}${node.frontmatter.slug}`
          : node.frontmatter.slug
  
        console.log(`Creating a page under: ${path}`)
  
        createPage({
          path: path,
          component: blogPostTemplate,
          context: {
            slug: node.frontmatter.slug,
            languages: blogMap.get(node.frontmatter.slug),
          },
        })
      })
    })
  }