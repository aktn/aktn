import React from "react"
import styled from "styled-components"
import Button from "../common/Button"

const Wrapper = styled.div`
  margin: 6rem 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  font-family: LabGrotesqueMono;
`

const LeftColumn = styled.div`
  flex: 3;
  padding: 15px;
`

const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding-right: 10px;
  line-height: 1.5;
  border-right: 1px solid;
`

const Links = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 15px;
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
        {props.git && <Button href={props.git}>Source Code</Button>}
        {props.url && <Button href={props.url}>Link</Button>}
      </Links>
    </Wrapper>
  )
}

export default ProjectDetails
