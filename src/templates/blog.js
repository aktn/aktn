import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BlogDetails from "../components/blog/BlogDetails"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlogTemplate = ({ data }) => {
  const { content } = data.ContentfulBlog
  return (
    <>
      <Container>
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
