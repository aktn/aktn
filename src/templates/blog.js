import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BlogDetails from "../components/blog/BlogDetails"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  margin: 1.5rem 1rem;
  @media screen and (min-width: 768px) {
    margin: 3rem 3.5rem;
  }
`

const Title = styled.h3`
  font-size: 3rem;
  padding-bottom: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`

const BlogTemplate = ({ data }) => {
  const { content, title } = data.contentfulBlog
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <BlogDetails content={content} />
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
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

export default BlogTemplate
