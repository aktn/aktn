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
  border-bottom: 2px dashed #414141;
  h3 {
    font-size: 15px;
  }
  img {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    display: block;
    margin: auto;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
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
  border-color: ${props => (props.error ? "red" : "black")};
`

const SubscribePanel = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  background-color: #fbeeca;
  display: flex;
  flex-direction: column;
  font-family: Cooper, Georgia, Times, Times New Roman, serif;
  @media screen and (min-width: 768px) {
    height: 200px;
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
  padding: 5px 50px;
  font-size: 16px;
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
  width: 90%;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
const BlogDetails = props => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loadingStatus, setLoadingStatus] = useState(false)

  const handleInputChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    setLoadingStatus(true)
    addToMailchimp(email)
      .then(data => {
        setMessage(data)
        setLoadingStatus(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  let buttonContent
  if (loadingStatus) {
    buttonContent = "Sending..."
  } else if (message.result === "success") {
    buttonContent = "Done"
  } else {
    buttonContent = "Submit"
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
            <Input
              placeholder="abc@example.com"
              onChange={handleInputChange}
              error={message.result == "error"}
            ></Input>
            <SubmitBtn onClick={handleSubmit}>{buttonContent}</SubmitBtn>
          </FormWrapper>
        </InputPanel>
        <ContentPanel>Subscribe for new posts</ContentPanel>
      </SubscribePanel>
    </Wrapper>
  )
}

export default BlogDetails
