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
    width: 50%;
  }
`

const Project = styled.li`
  list-style: none;
  width: 100%;
  margin-bottom: 5rem;
  z-index: 20;
  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
    flex: 0 0 50%;
    z-index: 20;
  }
`

const ProjectCover = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: -10;
    visibility: hidden;
    .gatsby-image-wrapper {
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.5s, visibility 0.4s;
    }
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
  &:hover h3 {
    @media screen and (min-width: 768px) {
      text-decoration: line-through;
    }
  }
  &:hover ${ProjectCover}::before {
    background: none;
  }
`

const ProjectTitle = styled.span`
  overflow: hidden;
  display: inline-block;
  margin-bottom: -23px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    top: 0;
    right: 0;
    z-index: -99;
  }
`

const Title = styled.h3`
  font-size: 4rem;
  font-family: LabGrotesqueMono;
  font-weight: 400;
  color: #232323;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    line-height: 1.5;
    display: inline-block;
    position: relative;
  }
`

const ProjectList = props => {
  return (
    <Wrapper>
      {props.projects.map(({ node: project }) => (
        <Project key={project.id}>
          <ProjectLink to={`/projects/${project.slug}/`}>
            <ProjectTitle>
              <Title>{project.title}</Title>
            </ProjectTitle>
            <ProjectCover>
              <Img
                alt={project.image.title}
                title={project.image.title}
                fluid={project.image.fluid}
              />
            </ProjectCover>
          </ProjectLink>
        </Project>
      ))}
    </Wrapper>
  )
}

export default ProjectList
