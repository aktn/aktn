import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SocialLinks = styled.div`
  flex: 1;
  a {
    color: gray;
    padding: 10px;
    cursor: pointer;
    z-index: 20;
    text-decoration: none;
    text-align: center;
    &:hover {
      color: cyan;
    }
    &:first-child {
      padding-left: 0px;
    }
    @media only screen and (min-width: 768px) {
      padding: 0px 15px;
      &:first-child {
        padding: 10px;
      }
    }
  }
`

const Social = () => {
  return (
    <SocialLinks>
      <a
        href="https://linkedin.com/in/aung-khant-thet-naing-82303077/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/aktn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        href="https://twitter.com/Danny94913628"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </SocialLinks>
  )
}

export default Social
