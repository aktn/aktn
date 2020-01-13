const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadProjects = new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulProject {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log("Error getting data", result.errors)
        }

        const projectTemplate = path.resolve("./src/templates/project.js")

        const projects = result.data.allContentfulProject.edges
        projects.forEach((edge, i) => {
          console.log(edge)
          const prev = i === 0 ? null : projects[i - 1].node
          const next = i === projects.length - 1 ? null : projects[i + 1].node
          createPage({
            path: `/projects/${edge.node.slug}/`,
            component: slash(projectTemplate),
            context: {
              slug: edge.node.slug,
              id: edge.node.id,
              prev,
              next,
            },
          })
        })
        resolve()
      })
      .catch(error => {
        console.log("Error retrieving contentful data", error)
      })
  })

  const loadBlogs = new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulBlog {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log("Error getting data", result.errors)
        }

        const blogTemplate = path.resolve("./src/templates/blog.js")

        result.data.allContentfulBlog.edges.forEach(edge => {
          createPage({
            path: `/blogs/${edge.node.slug}/`,
            component: slash(blogTemplate),
            context: {
              slug: edge.node.slug,
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
      .catch(error => {
        console.log("Error retrieving contentful data", error)
      })
  })

  const loadThoughts = new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulThoughts {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log("Error getting data", result.errors)
        }

        const storyTemplate = path.resolve("./src/templates/story.js")

        result.data.allContentfulThoughts.edges.forEach(edge => {
          createPage({
            path: `/stories/${edge.node.slug}/`,
            component: slash(storyTemplate),
            context: {
              slug: edge.node.slug,
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
      .catch(error => {
        console.log("Error retrieving contentful data", error)
      })
  })

  return Promise.all([loadProjects, loadBlogs, loadThoughts])
}
