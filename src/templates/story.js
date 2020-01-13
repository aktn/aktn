import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"
import StoryDetails from "../components/story/storyDetails"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
  @media screen and (min-width: 1024px) {
    margin: 3rem 10rem;
  }
`

const Title = styled.h3`
  font-size: 3rem;
  padding-bottom: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 5rem;
    width: 70%;
  }
`

const StoryTemplate = ({ data }) => {
  const { content, title } = data.contentfulThoughts
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <Title>{title}</Title>
        <StoryDetails content={content} />
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulThoughts(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`

export default StoryTemplate
