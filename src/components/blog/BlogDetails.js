import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: LabGrotesqueMono;
`

const Content = styled.div`
  font-weight: 200;
  color: #212121;
  line-height: 55px;
  letter-spacing: 0.1em;
  line-height: 1.5;
  h3 {
    font-size: 15px;
  }
  img {
    width: 100%;
  }
  .gatsby-highlight,
  .language-text {
    width: 90vw;
  }
  video {
    width: 100%;
  }
  iframe {
    margin: 0 0 2rem 0;
  }
  @media screen and (min-width: 768px) {
    padding-right: 10px;
    font-size: 16px;
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
    </Wrapper>
  )
}

export default BlogDetails
