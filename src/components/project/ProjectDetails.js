import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: inherit;
  font-family: "Noto Sans", sans-serif;
  margin: 1rem 0.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 3rem 3.5rem;
  }
`

const LeftColumn = styled.div`
  flex: 3;
  padding: 20px 15px 0 15px;
`

const Description = styled.div`
  font-size: 18px;
  letter-spacing: 1px;
  color: #adadad;
  font-weight: 400;
  line-height: 2;
  border-right: 0px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    padding-right: 10px;
  }
`

const Links = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  margin-left: 1rem;
  a {
    transition: 0.4s;
  }
  span {
    padding-bottom: 20px;
    color: #7d5807;
  }
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    margin-top: 100px;
  }
`

const ExternalLink = styled.li`
  max-width: 250px;
  cursor: pointer;
  padding-bottom: 2px;
  transition: background-position 0.5s ease-in-out;
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: #0dfff4;
    text-decoration: none;
  }
  z-index: 15;
  @media screen and (min-width: 768px) {
    margin: 8px 0;
  }
`

const Title = styled.h3`
  font-size: 60px;
  color: #adadad;
  line-height: 60px;
`

const ProjectDetails = (props, children) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Title>{props.title}</Title>
        <Description
          dangerouslySetInnerHTML={{
            __html: props.description.childMarkdownRemark.html,
          }}
        />
      </LeftColumn>
      <Links>
        {/* <span>Links</span> */}
        <ExternalLink>
          {props.git && (
            <a href={props.git} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </ExternalLink>
        <ExternalLink>
          {props.url && (
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              URL
            </a>
          )}
        </ExternalLink>
        <ExternalLink>
          {props.caseStudy && (
            <a
              href={`../../caseStudies/${props.caseStudy}`}
              rel="noopener noreferrer"
            >
              Case Study
            </a>
          )}
        </ExternalLink>
      </Links>
    </Wrapper>
  )
}

export default ProjectDetails
