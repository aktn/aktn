import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 1rem;
  padding-top: 1rem;
  font-family: LabGrotesqueMono;
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: #888;
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-left: 0rem;
  }
`

const Contents = styled(Link)`
  flex-direction: row;
  flex: 1;
  display: flex;
  max-width: 100vw - 15rem;
  min-width: 100vw - 20rem;
  width: 100%:
  justify-content: flex-start;
  font-size: 15px;
  
  @media screen and (min-width: 768px) {
    flex-flow: row;
    max-width: 800px;
    min-width: 700px;
  }
`

const Date = styled.p`
  flex: 1;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const Title = styled.h3`
  flex: 2;
  font-size: 0.8rem;
  line-height: 2rem;
  font-weight: 400;
  color: #232323;
  z-index: 36;
  cursor: pointer;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    line-height: 1rem;
    display: inline-block;
    padding: 0 12px;
  }
`

const WorkInProgress = styled.p`
  max-width: 500px;
  width: 100%;
  margin-top: 10rem;
`

const Index = styled.span`
  display: inline-block;
  padding-right: 5px;
  line-height: 2rem;
  @media screen and (min-width: 768px) {
    line-height: 1rem;
    display: inline-block;
    padding: 0 12px;
  }
`

const Section = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`

const Heading = styled.h3`
  font-size: 1rem;
  padding-bottom: 1rem;
`

const BlogList = props => {
  return (
    <Wrapper>
      {/* <WorkInProgress>
        This is the place, where I am sharing my obsession of Internet related
        things{" "}
        <span aria-label="emoji" role="img">
          🤓
        </span>
        . But its currently being maintained so please come back later{" "}
        <span aria-label="emoji" role="img">
          🤗
        </span>
      </WorkInProgress> */}
      <Heading>Blog</Heading>
      {props.blogs.map(({ node: blog }, index) => (
        <Contents key={blog.id} to={`/blogs/${blog.slug}/`}>
          <Index>{index + 1}.</Index>
          <Section>
            <Title>{blog.title}</Title>
            <Date>{blog.date}</Date>
          </Section>
        </Contents>
      ))}
    </Wrapper>
  )
}

export default BlogList
