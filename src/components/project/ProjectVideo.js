import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: none;
  margin: 0 0 1rem 0;
  background: #a3bce6;
  video {
    width: 100%;
    background: #a3bce6;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`

const ProjectVideo = props => {
  return (
    <div>
      {props.video && (
        <Wrapper>
          <video
            preload="auto"
            poster={props.thumbnail.fluid.src}
            loop
            muted
            autoPlay
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
