import React from "react"
import BlogList from "../components/blog/BlogList"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

const BlogPage = ({ data }) => {
  const blogs = data.allContentfulBlog.edges
  return (
    <>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
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
