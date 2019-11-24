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

const StoriesList = props => {
  return (
    <Wrapper>
      <Heading>
        Here's a few things that come out from my thoughts & experiences.{" "}
      </Heading>
      {props.thoughts.map(({ node: thought }, index) => (
        <Contents key={thought.id} to={`/aboutMe/${thought.slug}/`}>
          <Section>
            <Title>{thought.title}</Title>
            <Date>{thought.date}</Date>
          </Section>
        </Contents>
      ))}
    </Wrapper>
  )
}

export default StoriesList
