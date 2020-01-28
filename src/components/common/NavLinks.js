import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import RightArrow from "./../../images/assets/right-arrow.svg"
import LeftArrow from "./../../images/assets/left-arrow.svg"

const Wrapper = styled.div`
  z-index: 20;
  position: absolute;
  right: 0;
  margin: 1rem 0;
  font-family: LabGrotesqueMono;
  span {
    @media screen and (min-width: 768px) {
      position: fixed;
      top: 50%;
      border: none;
      transform-origin: center;
    }
  }
`

const Next = styled.span`
  padding-right: 1rem;
  right: 3.25rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: #232323;
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1rem;
    right: 0.5rem;
  }
`

const Previous = styled.span`
  padding-right: 1rem;
  left: 3.25rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  display: block;
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: #232323;
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    left: 0.5rem;
  }
`

const NavLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <Previous>
          <Link to={`projects/${props.previous.slug}/`}>
            <LeftArrow width="25" height="25" />
          </Link>
        </Previous>
      )}
      {props.next && (
        <Next>
          <Link to={`projects/${props.next.slug}/`}>
            <RightArrow width="25" height="25" />
          </Link>
        </Next>
      )}
    </Wrapper>
  )
}

export default NavLinks
