import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Link from "gatsby-link"

const Wrapper = styled.ul`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 7rem 0 0;
  padding: 0rem 1rem;
  @media screen and (min-width: 768px) {
    flex-flow: column;
    min-height: calc(100vh - 5rem);
    margin: 0;
    width: 80%;
  }
  @media screen and (min-width: 1025px) {
    flex-flow: column;
    min-height: calc(100vh - 5rem);
    margin: 0;
    width: 50%;
  }
`

const Project = styled.li`
  list-style: none;
  width: 100%;
  margin-bottom: 5rem;
  z-index: 20;
  animation-name: animateIn;
  animation-duration: 350ms;
  animation-delay: calc((${props => props.animateOrder}) * 120ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  @media screen and (min-width: 768px) {
    margin-bottom: 0.6rem;
    flex: 0 0 50%;
    z-index: 20;
    width: 40%;
  }
  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: scale(0.6) translateY(-8px);
    }
    100% {
      opacity: 1;
    }
  }
`

const ProjectCover = styled.div`
  position: relative;

  .gatsby-image-wrapper {
    max-height: 300px;
    object-fit: contain;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: -10;
    visibility: hidden;
    div {
      object-fit: cover !important;
      height: 100%;
    }
  }
`

const ProjectLink = styled(Link)`
  text-decoration: none;

  &:hover .gatsby-image-wrapper {
    @media screen and (min-width: 768px) {
      @supports (object-fit: cover) {
        opacity: 1;
        display: block;
        visibility: visible;
      }
    }
  }

  &:hover ${ProjectCover} {
    opacity: 1;
    display: block;
    visibility: visible;
    background-color: ${props => props.bgColor};

    transition: ease-out 0.5s;
  }
  &:hover .gatsby-image-wrapper {
    @media screen and (min-width: 768px) {
      @supports (object-fit: cover) {
        opacity: 1;
        display: block;
        visibility: visible;
      }
    }
  }
  &:hover h3 {
    @media screen and (min-width: 768px) {
      text-decoration: line-through;
      color: #007460;
    }
  }
  &:hover ${ProjectCover}::before {
    background-color: none;
  }
`

const ProjectTitle = styled.span`
  display: inline-block;

  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
    top: 0;
    right: 0;
    z-index: -99;
    width: 100%;
  }
`

const Title = styled.h3`
  font-size: 3rem;
  font-family: LabGrotesqueMono;
  font-weight: 400;
  color: #232323;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    text-align: left;
    display: inline-block;
    position: relative;
  }
`

const ProjectDescription = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    text-align: left;
    display: block;
  }
`

const ProjectDetails = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1% 4%;
    flex-direction: column;
    text-align: center;
  }
`

const ProjectList = props => {
  return (
    <Wrapper>
      {props.projects.map(({ node: project }, i) => (
        <Project key={project.id} animateOrder={i}>
          <ProjectLink
            to={`/projects/${project.slug}/`}
            bgColor={project.bgColor}
          >
            <ProjectTitle>
              <Title>{project.title}</Title>
            </ProjectTitle>
            <ProjectCover>
              <Img
                alt={project.image.title}
                title={project.image.title}
                fluid={project.image.fluid}
              />
              <ProjectDetails>
                <h2>{project.title}</h2>
                <ProjectDescription
                  dangerouslySetInnerHTML={{
                    __html: project.about.childMarkdownRemark.html,
                  }}
                />
              </ProjectDetails>
            </ProjectCover>
          </ProjectLink>
        </Project>
      ))}
    </Wrapper>
  )
}

export default ProjectList
