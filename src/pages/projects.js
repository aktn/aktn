import React from "react"
import { graphql } from "gatsby"
import ProjectList from "../components/project/ProjectList"

const ProjectPage = ({ data }) => {
  const projects = data.allContentfulProject.edges
  return (
    <>
      <ProjectList projects={projects}></ProjectList>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProject(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          date
          image {
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            title
          }
        }
      }
    }
  }
`

export default ProjectPage
