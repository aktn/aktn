import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Social from "../components/common/Social"
import Layout from "./../components/layout"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 200px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`
const Name = styled.p`
  font-size: 6em;
  position: absolute;
  top: 238px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    top: 231px;
    font-size: 7em;
    padding-right: 400px;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 5%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-width: 700px;
    max-width: 900px;
    height: 380px;
    margin: 0 4%;
    margin-bottom: 100px;
  }
`
const About = styled.div`
  flex: 1;
  display: inline-block;
  height: 100%;
  font-size: 16px;
  color: #fff;
  box-sizing: border-box;
  text-align: left;
  padding: 20px;
  background-color: #3c7368;
`

const ImgWrapper = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: red;
`

const Picture = styled(Img)`
  text-align: left;
  background-color: #ddd;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const IndexPage = ({ data }) => {
  const { me, description } = data.contentfulAboutMe

  return (
    <>
      <Layout>
        <Helmet>
          <title>Hello ;)</title>
        </Helmet>
        <Container>
          <Name>Aung.</Name>
          <Wrapper>
            <ImgWrapper>
              <Picture fluid={me.fluid} alt={"me"} />
            </ImgWrapper>
            <About
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}
            />
          </Wrapper>
          <Social></Social>
        </Container>
      </Layout>
    </>
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
