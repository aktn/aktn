import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: LabGrotesqueMono;
`

const Content = styled.div`
  font-weight: 200;
  color: #212121;
  line-height: 55px;
  letter-spacing: 0.1em;
  line-height: 1.5;
  h3 {
    font-size: 15px;
  }
  img {
    width: 100%;
  }
  .gatsby-highlight,
  .language-text {
    width: 100%;
  }
  video {
    width: 100%;
  }
  iframe {
    margin: 0 0 2rem 0;
  }
  @media screen and (min-width: 768px) {
    padding: 0 10px;
    font-size: 16px;
  }
`

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 6px 8px;
  border: none;
  outline: none;
  background-color: #cce0e0;
  border-bottom: 2px solid #241c15;
  margin: 0;
`

const SubscribePanel = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 100px;
  background-color: #fbeeca;
  display: flex;
  flex-direction: column;
  font-family: Cooper, Georgia, Times, Times New Roman, serif;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const InputPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cce0e0;
`

const ContentPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #241c15;
  font-size: 26px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

const SubmitBtn = styled.button`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 65px;
  background-color: #e9ebe8;
  color: #241c15;
  cursor: pointer;
  outline: none;
  border: 1px solid #241c15;
  &:hover {
    letter-spacing: 2px;
  }
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  flex-direction: column;
  width: 50%;
  height: 100%;
`

const BlogDetails = props => {
  const [email, setEmail] = useState("")

  const handleInputChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    addToMailchimp(email)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Wrapper>
      <Content
        dangerouslySetInnerHTML={{
          __html: props.content.childMarkdownRemark.html,
        }}
      />
      <SubscribePanel>
        <InputPanel>
          <FormWrapper>
            <Input onChange={handleInputChange}></Input>
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
          </FormWrapper>
        </InputPanel>
        <ContentPanel>Subscribe for new posts</ContentPanel>
      </SubscribePanel>
    </Wrapper>
  )
}

export default BlogDetails
