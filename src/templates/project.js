import React from "react"
import { graphql } from "gatsby"
import ProjectDetails from "../components/project/ProjectDetails"

const ProjectTemplate = ({ data }) => {
  const { title, date, url, git, about } = data.contentfulProject
  return (
    <>
      <ProjectDetails
        title={title}
        description={about}
        date={date}
        url={url}
        git={git}
      ></ProjectDetails>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      date
      git
      url
      about {
        childMarkdownRemark {
          excerpt
          html
        }
      }
      image {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ProjectTemplate
