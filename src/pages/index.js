import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Link from "gatsby-link"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 250px;
`
const Name = styled.p`
  font-size: 8em;
  position: absolute;
  top: 188px;
  padding-right: 400px;
  z-index: 2;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const About = styled.div`
  flex: 1;
  min-width: 400px;
  max-width: 500px;
  min-height: 435px;
  max-height: 600px;
  height: 100%;
  width: 100%;
  background-color: cyan;
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 17px;
  line-height: 30px;
  font-style: normal;
  font-variant: normal;
  font-weight: 600;
  color: #272727;
  background: #94d1d9;
`
const Picture = styled(Img)`
  flex: 1;
  min-width: 400px;
  min-height: 400px;
  height: 100%;
  width: 100%;
  background-color: tomato;
  overflow: hidden;
`
const IndexPage = ({ data }) => {
  const { me, description } = data.contentfulAboutMe

  return (
    <Container>
      <Name>Aung.</Name>
      <Wrapper>
        <Picture fluid={me.fluid} alt={"me"} />
        <About
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </Wrapper>
    </Container>
  )
}

export const query = graphql`
  query {
    contentfulAboutMe {
      description {
        description
        childMarkdownRemark {
          excerpt
          html
        }
      }
      me {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
