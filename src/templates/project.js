import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({ data }) => {
  const { title, date } = data.contentfulProject
  return (
    <>
      <div>{title}</div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      date
      image {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ProjectTemplate
