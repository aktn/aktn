import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  background-color: #fcfcfc;
  margin: 7.5% 20%;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  video {
    background-color: red;
    pointer-events: none;
    width: 70%;
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
        </Wrapper>
      )}
    </div>
  )
}

export default ProjectVideo
