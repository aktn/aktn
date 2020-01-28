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
  margin: 3rem 0 0;
  padding: 0rem 1rem;
  @media screen and (min-width: 768px) {
    flex-flow: column;
    min-height: calc(100vh - 5rem);
    margin: 0;
    width: 80%;
    padding: 0;
  }
  @media screen and (min-width: 1025px) {
    flex-flow: column;
    min-height: calc(100vh - 5rem);
    margin: 0;
    width: 50%;
    padding: 0;
  }
`

const Project = styled.li`
  list-style: none;
  width: 100%;
  margin-bottom: 5rem;
  z-index: 20;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 0.6rem;
    flex: 0 0 50%;
    z-index: 20;
    width: 50%;
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
  background: none;

  .gatsby-image-wrapper {
    max-height: 300px;
    object-fit: contain;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: -10;
    display: none;
    opacity: 0;

    // visibility: hidden;

    div {
      object-fit: cover !important;
      height: auto;
    }
    .gatsby-image-wrapper {
      max-height: 35vh;
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
      }
    }
  }

  &:hover ${ProjectCover} {
    opacity: 1;
    display: block;
    // visibility: visible;
    background-color: ${props => props.bgColor};
    @media only screen and (min-width: 768px) {
      animation: fade-in 0.5s;
      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }
  &:hover .gatsby-image-wrapper {
    transition: ease-out 0.5s;
    @media screen and (min-width: 768px) {
      @supports (object-fit: cover) {
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
  // color: #29241e;
  color: #fff;
  font-size: 20px;
  line-height: 2.1;
  @media only screen and (min-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2%;
  }
`

const Header = styled.h2`
  margin: 30px 0;
  font-weight: 200;
  font-size: 3em;
`

const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Tag = styled.div`
  background-color: gray;
  margin: 30px 15px 0 0;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  color: #007c89;
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 124, 137, 0.3);
  background-color: transparent;
  transition: all 0.15s linear;
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
                <Header>{project.title}</Header>
                <ProjectDescription>{project.summary}</ProjectDescription>
                <Tags>
                  {project.tags &&
                    project.tags.technologies.map((technology, i) => (
                      <Tag key={i}>{technology}</Tag>
                    ))}
                </Tags>
              </ProjectDetails>
            </ProjectCover>
          </ProjectLink>
        </Project>
      ))}
    </Wrapper>
  )
}

export default ProjectList
