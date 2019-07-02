import React from "react"
import styled from "styled-components"
import BlogList from "../components/blog/BlogList"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  const blogs = data.allContentfulBlog.edges
  return (
    <>
      <BlogList blogs={blogs}></BlogList>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default BlogPage
