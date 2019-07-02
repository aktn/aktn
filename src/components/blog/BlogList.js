import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 1rem;
  padding-top: 3rem;
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
    padding-top: 5rem;
  }
`

const Contents = styled(Link)`
  flex-direction: column;
  flex: 1;
  display: flex;
  max-width: 100vw - 15rem;
  min-width: 100vw - 20rem;
  width: 100%:
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    flex-flow: row;
    max-width: 800px;
    min-width: 700px;
  }
`

const Date = styled.p`
  flex: 1;
  padding-bottom: 2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const Title = styled.h3`
  flex: 2;
  font-size: 1.1rem;
  line-height: 2rem;
  font-family: LabGrotesqueMono;
  font-weight: 400;
  color: #232323;
  z-index: 36;
  cursor: pointer;
  padding-right: 12px;
  @media screen and (min-width: 768px) {
    line-height: 1.5rem;
    display: inline-block;
  }
`

const BlogList = props => {
  return (
    <Wrapper>
      {props.blogs.map(({ node: blog }, index) => (
        <Contents key={blog.id} to={`/blogs/${blog.slug}/`}>
          <Title>
            {index + 1}. {blog.title}
          </Title>
          <Date>{blog.date}</Date>
        </Contents>
      ))}
    </Wrapper>
  )
}

export default BlogList
