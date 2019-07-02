import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  flex-wrap: wrap;
  margin-left: 1rem;
  padding-top: 5rem;
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: #888;
    text-decoration: none;
  }
`

const Contents = styled(Link)`
  flex-direction: column;
  flex: 1;
  display: flex;
  max-width: 800px;
  min-width: 700px;
  width: 100%:
  align-items: center;
  justify-content:flex-start;
 
  @media screen and (min-width: 768px) {
    flex-flow: row;
  }
`

const Date = styled.p`
  flex: 1;
  padding-bottom: 2rem;
`

const Title = styled.h3`
  flex: 2;
  font-size: 1.1rem;
  font-family: LabGrotesqueMono;
  font-weight: 400;
  color: #232323;
  z-index: 36;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    line-height: 1.5;
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
