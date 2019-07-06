import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
  transform: rotate(90deg);
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
  transform: rotate(-90deg) !important;
  left: 3.25rem;
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
    left: 0.5rem;
  }
`

const NavLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <Previous>
          <Link to={`projects/${props.previous.slug}/`}>Prev</Link>
        </Previous>
      )}
      {props.next && (
        <Next>
          <Link to={`projects/${props.next.slug}/`}>Next</Link>
        </Next>
      )}
    </Wrapper>
  )
}

export default NavLinks
