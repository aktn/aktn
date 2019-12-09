import React from "react"
import styled from "styled-components"

const ExternalLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  justify-content: center;
  align-items: center;
  a {
    color: #232323;
    padding: 15px 0px;
    cursor: pointer;
    z-index: 20;
    text-decoration: none;
    &:hover {
      color: gray;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    a {
      padding: 0px 25px;
    }
  }
`

const Social = () => {
  return (
    <ExternalLinks>
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
    </ExternalLinks>
  )
}

export default Social
