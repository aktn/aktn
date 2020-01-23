import React from "react"
import styled from "styled-components"

const Width = props => `
width: 100%;
@media only screen and (min-width: 768px){
  max-width: 700px;
}
`

const Content = styled.div`
  font-weight: 200;
  color: #585858;
  font-size: 20px;
  letter-spacing: 0.2px;
  border-bottom: 2px dashed #414141;
  line-height: 1.85;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  ol {
    a {
      cursor: pointer;
      z-index: 100;
      text-decoration: none;
      color: #585858;
    }
  }
  div {
    a {
      cursor: pointer;
      z-index: 100;
      text-decoration: none;
      color: #585858;
    }
  }
  h1 {
    padding: 15px 0;
    font-size: 35px;
    ${Width};
    color: #212121;
  }
  h3 {
    font-size: 24px;
    padding: 0 5%;
    ${Width};
    color: #212121;
    line-height: 1.9;
    @media only screen and (min-width: 768px) {
      padding: 0;
    }
    &:hover {
      :after {
        content: " #";
        color: skyblue;
      }
    }
  }
  .language-text {
    background-color: #f2f2f2;
    color: #232323;
  }
  p {
    ${Width};
    display: flex;
    flex-flow: row wrap;
    color: inherit;
    padding: 0 5%;
    strong {
      font-size: 20px;
    }
    em {
      font-size: 18px;
    }
    > a {
      color: inherit;
      text-decoration: none;
    }
    @media only screen and (min-width: 768px) {
      padding: 0%;
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
      width: 100vw;
      @media only screen and (min-width: 768px) {
        ${Width};
        min-width: 700px;
      }
    }
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
      ${Width};
    }
    li {
      color: inherit;
      margin-left: 5%;
      padding-bottom: 3%;
      padding-right: 6%;
      @media only screen and (min-width: 768px) {
        margin-left: 3%;
      }
    }
  }
  ol {
    color: inherit;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    z-index: 100;
    width: 100%;
    li {
      ${Width};
      margin-left: 8%;
      padding-bottom: 1%;
      padding-right: 4%;
    }
    @media only screen and (min-width: 768px) {
      ${Width};
      margin-left: 4%;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
    padding: 0;
  }
`

const CaseStudyDetails = ({ caseStudy }) => {
  return (
    <>
      <Content
        dangerouslySetInnerHTML={{
          __html: caseStudy.childMarkdownRemark.html,
        }}
      />
    </>
  )
}

export default CaseStudyDetails
