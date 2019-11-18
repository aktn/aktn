import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import AboutMeList from "../components/aboutMe/aboutMeList"

const AboutMe = ({ data }) => {
  const thoughts = data.allContentfulThoughts.edges
  return (
    <>
      <Helmet>
        <title>More ME</title>
      </Helmet>
      <AboutMeList thoughts={thoughts}></AboutMeList>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulThoughts(
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

export default AboutMe
