import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: LabGrotesqueMono;
`

const Content = styled.div`
  font-weight: 500;
  color: #212121;
  line-height: 1.8;
  border-bottom: 2px dashed #414141;
  h3 {
    font-size: 24px;
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
  .gatsby-highlight,
  .language-text {
    width: 100%;
    overflow: auto;
  }
  video {
    width: 100%;
  }
  iframe {
    margin: 0 0 2rem 0;
  }
  @media screen and (min-width: 768px) {
    padding: 0 10px;
    font-size: 16px;
  }
`

const StoryDetails = props => {
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

export default StoryDetails
