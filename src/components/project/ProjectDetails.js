import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 6rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const LeftColumn = styled.div`
  flex: 3;
`

const Description = styled.div`
  font-size: 16px;
  font-family: LabGrotesqueMono;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (min-width: 768) {
    font-size: 18px;
  }
`

const Links = styled.div`
  flex: 1;
  background-color: red;
  a {
    transition: 0.4s;
  }
`

const Title = styled.h3``

const ProjectDetails = props => {
  return (
    <Wrapper>
      <LeftColumn>
        <Title>{props.title}</Title>
        <Description
          dangerouslySetInnerHTML={{
            __html: props.description.childMarkdownRemark.html,
          }}
        />
      </LeftColumn>
      <Links>
        {props.git}
        {props.url}
      </Links>
    </Wrapper>
  )
}

export default ProjectDetails
