import React from "react"
import { graphql } from "gatsby"
import ProjectDetails from "../components/project/ProjectDetails"
import ProjectImages from "../components/project/ProjectImages"
import styled from "styled-components"
import Helmet from "react-helmet"
import NavLinks from "../components/common/NavLinks"
import ProjectVideo from "../components/project/ProjectVideo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
`

const ProjectTemplate = ({ data, pageContext }) => {
  const {
    title,
    date,
    url,
    git,
    about,
    gallery,
    video,
    caseStudy,
  } = data.contentfulProject
  const previous = pageContext.prev
  const next = pageContext.next
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <NavLinks previous={previous} next={next} />
        <ProjectDetails
          title={title}
          description={about}
          date={date}
          url={url}
          git={git}
          caseStudy={caseStudy}
        ></ProjectDetails>
        <ProjectVideo video={video} />
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
      caseStudy
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
      video {
        id
        title
        file {
          url
        }
      }
    }
  }
`

export default ProjectTemplate
