const path = require('path');

const ProjectTemplate = path.resolve('./src/templates/project-template.js');

exports.createPages = async ({ graphql, actions, reporter }) => {
   const { createPage } = actions
   const result = await graphql(`
   {
        allContentfulProject {
            edges {
                node { 
                    slug
                    title
                    type
                    github
                    stackItems
                    mainImage {
                        fluid {
                            src 
                        }
                    }
                }
            }
        }
  }
`
)

    const projects = result.data.allContentfulProject.edges
    projects.forEach(({ node: project }) => {
        createPage({
            path: `/projects/${project.slug}`,
            component: ProjectTemplate,
            context: {
                slug: project.slug
            }

         })

    })
}