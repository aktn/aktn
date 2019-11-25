import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  color: #241c15;
  justify-content: center;
`

const Stories = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`
const StoriesAvatar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 450px;
  width: 100%;
`

const Avatar = styled.div`
  max-width: 500px;
  width: 100%;
`

const ProfileImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2%;

  h3 {
    background: linear-gradient(black, black) bottom no-repeat;
    background-size: 10% 10px;
    background-position: 0% 130%;
    background-image: linear-gradient(#8efae8, #eee);
    border-bottom: 1px solid #232323;

    min-height: 50px;
    margin: 20px auto;

    border-spacing: 10px;
    position: relative;
    font-size: 2.375rem;
    letter-spacing: -0.03125rem;
  }
  p {
    font-size: 1rem;
  }
  ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    li {
    }
  }
`

const MyStory = styled.div``

const Design = styled.div``

const HireMe = ({ data }) => {
  const { avatar, programming, design } = data.contentfulHireMe

  return (
    <>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <Container>
        <Stories>
          <StoriesAvatar>
            <Avatar>
              <ProfileImg fluid={avatar.fluid} alt={"me"} />
            </Avatar>
          </StoriesAvatar>

          <Content>
            <MyStory
              dangerouslySetInnerHTML={{
                __html: programming.childMarkdownRemark.html,
              }}
            ></MyStory>
            <Design
              dangerouslySetInnerHTML={{
                __html: design.childMarkdownRemark.html,
              }}
            ></Design>
          </Content>
        </Stories>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    contentfulHireMe {
      myStory {
        myStory
        childMarkdownRemark {
          excerpt
          html
        }
      }
      programming {
        programming
        childMarkdownRemark {
          excerpt
          html
        }
      }
      design {
        design
        childMarkdownRemark {
          excerpt
          html
        }
      }
      avatar {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default HireMe
