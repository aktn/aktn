import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
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
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`

const Contents = styled(Link)`
  flex-direction: row;
  flex: 1;
  display: flex;
  max-width: 100vw - 15rem;
  min-width: 100vw - 20rem;
  width: 100%;
  font-size: 0.8rem;
  cursor: pointer;
  z-index: 20;
  margin-bottom: 20px;
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
  font-size: 0.9rem;
  line-height: 2rem;
  color: #232323;
  z-index: 36;
  padding: 0 0 5px 0;
  margin: 0;
  font-weight: 600;
  letter-spacing: 1.1px;
  @media screen and (min-width: 768px) {
    line-height: 1rem;
    display: inline-block;
    padding: 0 12px;
    font-size: 0.9rem;
    font-weight: 500;
  }
`

const Section = styled.div`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`

const Heading = styled.h3`
  font-size: 1.3rem;
  padding-bottom: 2rem;
  letter-spacing: 1.1px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`

const Image = styled.div`
  padding-bottom: 10px;
  height: 250px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: 0;
    color: gray;
  }
  @media screen and (min-width: 768px) {
    height: 200px;
    max-width: 300px;
  }
`

const BlogList = props => {
  return (
    <Wrapper>
      <Heading>Blog</Heading>
      {props.blogs.map(({ node: blog }, index) => (
        <Contents key={blog.id} to={`/blogs/${blog.slug}/`}>
          <Section>
            {/* <Content> */}
            <Title>{blog.title}</Title>
            {/* </Content> */}
            <Date>{blog.date}</Date>
          </Section>
        </Contents>
      ))}
    </Wrapper>
  )
}

export default BlogList
