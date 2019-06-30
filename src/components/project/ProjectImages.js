import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Images = styled.div`
  flex: 1;
`

const Image = styled.div`
  padding: 50px;
  object-fit: cover !important;
  width: 70%;
  height: 70%;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`

const ProjectImages = props => (
  <Images>
    {props.gallery &&
      props.gallery.map((image, index) => (
        <Image key={index}>
          <Img
            fluid={image.fluid}
            backgroundColor={"#635f5f"}
            title={image.title}
            alt={image.title}
          />
          <p>{image.title}</p>
        </Image>
      ))}
  </Images>
)

export default ProjectImages
