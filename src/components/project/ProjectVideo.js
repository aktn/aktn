import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  background-color: #fcfcfc;
  margin: 7.5% 20% 0;
  padding: 5% 0 0;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  video {
    padding: 2% 5%;
    background-color: #f2f2f2;
    pointer-events: none;
    width: 70%;
  }
`

const Description = styled.p`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 0.6px;
  line-height: 30px;
  @media only screen and (min-width: 768px) {
    padding: 3% 20%;
  }
`

const ProjectVideo = props => {
  return (
    <div>
      {props.video && (
        <Wrapper>
          <video
            preload="auto"
            loop
            muted
            autoPlay
            playsInline
            src={props.video.file.url}
          />
          <Description>{props.video.title}</Description>
        </Wrapper>
      )}
    </div>
  )
}

export default ProjectVideo
