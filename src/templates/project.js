import React from "react"
import { graphql } from "gatsby"
import ProjectDetails from "../components/project/ProjectDetails"
import ProjectImages from "../components/project/ProjectImages"
import styled from "styled-components"

const Container = styled.div`
  margin: 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  @media screen and (min-width: 768px) {
    margin: 6rem 3rem;
  }
`

const ProjectTemplate = ({ data }) => {
  const { title, date, url, git, about, gallery } = data.contentfulProject
  return (
    <>
      <Container>
        <ProjectDetails
          title={title}
          description={about}
          date={date}
          url={url}
          git={git}
        ></ProjectDetails>
        <ProjectImages gallery={gallery}></ProjectImages>
      </Container>
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
      gallery {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        title
      }
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
