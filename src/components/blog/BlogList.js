import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import { primaryFont, secondaryFont } from "./../theme/theme"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  font-family: ${primaryFont};
  width: 100%;
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
    width: 80%;
  }
`

const Description = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  font-size: 16px;
  color: #757575;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;
  padding-bottom: 50px;
  border-bottom: 1px solid #403b3b;
  @media screen and (min-width: 768px) {
    flex: 0 50%;
  }
`

const ContentLayout = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  cursor: pointer;
  z-index: 20;
  margin-bottom: 20px;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    width: 70%;
  }
  &:hover ${Card}:not(:hover) {
    opacity: 0.1;
  }
`

const Date = styled.p`
  margin-bottom: 10px;
`

const Title = styled.h3`
  color: #34fadc;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
  width: 80%;
`

const Heading = styled.h3`
  font-size: 1.5rem;
  padding-bottom: 2rem;
  letter-spacing: 1.1px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  font-family: ${secondaryFont};
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1025px) {
    width: 70%;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 5rem;
`

const BlogList = props => {
  return (
    <Container>
      <Wrapper>
        <Heading>Things I have learned</Heading>
        <ContentLayout>
          {props.blogs.map(({ node: blog }, index) => (
            <Card key={blog.id} to={`/blogs/${blog.slug}/`}>
              <Title>{blog.title}</Title>
              <Date>{blog.date}</Date>
              <Description>
                {blog.content.childMarkdownRemark.excerpt}
              </Description>
            </Card>
          ))}
        </ContentLayout>
      </Wrapper>
    </Container>
  )
}

export default BlogList
