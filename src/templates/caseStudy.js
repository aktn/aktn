import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"
import CaseStudyDetails from "../components/caseStudy/CaseStudyDetails"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #171717;
  margin-top: 4rem;
  width: 100%;
`

const CaseStudyTemplate = ({ data }) => {
  const { title, caseStudy } = data.contentfulCaseStudy

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <CaseStudyDetails caseStudy={caseStudy}></CaseStudyDetails>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      slug
      caseStudy {
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`

export default CaseStudyTemplate
