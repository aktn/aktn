import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: LabGrotesqueMono;
`

const Content = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: #212121;
  line-height: 55px;
  letter-spacing: 0.1em;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    padding-right: 10px;
    font-size: 20px;
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
