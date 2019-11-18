import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  font-family: LabGrotesqueMono;
  width: 80%;
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

const ContentLayout = styled.div`
  flex-direction: row;
  display: flex;
  width: 70%;
  font-size: 0.8rem;
  cursor: pointer;
  z-index: 20;
  margin-bottom: 20px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Date = styled.p``

const Title = styled.h3`
  color: #047a87;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.8px;
`

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 0 50%;
  margin-bottom: 50px;
`

const Heading = styled.h3`
  font-size: 1.3rem;
  padding-bottom: 2rem;
  letter-spacing: 1.1px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const BlogList = props => {
  return (
    <Container>
      <Wrapper>
        <Heading>Blog</Heading>
        <ContentLayout>
          {props.blogs.map(({ node: blog }, index) => (
            <Card key={blog.id} to={`/blogs/${blog.slug}/`}>
              <Title>{blog.title}</Title>
              <Date>{blog.date}</Date>
            </Card>
          ))}
        </ContentLayout>
      </Wrapper>
    </Container>
  )
}

export default BlogList
