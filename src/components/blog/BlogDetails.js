import React from "react"
import styled from "styled-components"
import SubscribeSection from "./SubscribeSection"
import { primaryFont } from "./../theme/theme"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${primaryFont};
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Content = styled.div`
  font-weight: 200;
  color: #d9d9d9;
  letter-spacing: 0.2px;
  border-bottom: 2px dashed #414141;
  line-height: 1.85;
  padding: 0;
  width: 100vw;
  h3 {
    font-size: 24px;
    padding: 0 5%;
    color: cyan;
    @media only screen and (min-width: 768px) {
      padding: 0;
    }
  }
  p {
    padding: 0 5%;
    @media only screen and (min-width: 768px) {
      padding: 0;
    }
  }
  .language-text {
    background-color: #f2f2f2;
    color: #232323;
  }
  img {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    display: block;
    margin: auto;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
  .gatsby-highlight {
    .language-html,
    .language-javascript,
    .language-typescript {
      border-radius: 0;
      margin: 0;
      margin-bottom: 30px;
      background-color: #302f36;
    }
  }
  video {
    width: 100%;
  }
  iframe {
    margin: 0 0 2rem 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 0;
    width: 100%;
    max-width: 700px;
  }
`

const BlogDetails = props => {
  return (
    <Wrapper>
      <Content
        dangerouslySetInnerHTML={{
          __html: props.content.childMarkdownRemark.html,
        }}
      />
      <SubscribeSection></SubscribeSection>
    </Wrapper>
  )
}

export default BlogDetails
