import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 200px;
  margin-bottom: 100px;
`
const Name = styled.p`
  font-size: 6em;
  position: absolute;
  top: 238px;
  //padding-right: 75px;
  z-index: 2;
  @media screen and (min-width: 800px) {
    top: 221px;
    font-size: 8em;
    padding-right: 400px;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`
const About = styled.div`
  display: inline-block;
  max-width: 400px;
  min-width: 300px;
  width: 95%;
  box-sizing: border-box;
  text-align: left;
  padding: 20px;
  background-color: #ddd;
  max-height: 500px;
  min-height: 400px;
  @media screen and (min-width: 800px) {
    min-width: 400px;
    //  max-width: 300px;
    width: 100%;
  }
`
const Picture = styled(Img)`
  display: inline-block;
  max-width: 400px;
  min-width: 300px;
  min-height: 400px;
  max-height: 500px;
  height: 100%;
  width: 95%;
  text-align: left;
  padding: 10px;
  background-color: #ddd;
  img {
  }
  @media screen and (min-width: 800px) {
    //max-width: 300px;
    width: 100%;
    min-width: 400px;
  }
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
