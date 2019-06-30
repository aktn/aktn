import React from "react"
import styled from "styled-components"
import Button from "../common/Button"
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  font-family: LabGrotesqueMono;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const LeftColumn = styled.div`
  flex: 3;
  padding: 20px 15px 0 15px;
`

const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  border-right: 0px;
  @media screen and (min-width: 768px) {
    border-right: 1px solid;
    padding-right: 10px;
  }
`

const Links = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 15px;
  a {
    transition: 0.4s;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const ExternalLink = styled.div`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin: 14px 0;
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
        <ExternalLink>
          {props.git && <Button href={props.git}>Source Code</Button>}
        </ExternalLink>
        <ExternalLink>
          {props.url && <Button href={props.url}>Link</Button>}
        </ExternalLink>
      </Links>
    </Wrapper>
  )
}

export default ProjectDetails
