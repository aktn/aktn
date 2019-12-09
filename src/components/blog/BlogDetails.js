import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans", sans-serif;
`

const Content = styled.div`
  font-weight: 200;
  color: #212121;
  letter-spacing: 1px;
  border-bottom: 2px dashed #414141;
  line-height: 1.85;
  h3 {
    font-size: 24px;
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
  .gatsby-highlight {
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .language-text {
    width: 100%;
    overflow: auto;
    letter-spacing: 0em;
    color: #2f5732;
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
  background-color: transparent;
  border-bottom: 2px solid #241c15;
  margin: 0;
  color: #fff;
  border-color: ${props => (props.error ? "red" : "#fff")};
`

const SubscribePanel = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  background-color: #517d60;
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
  background-color: #668085;
`

const ContentPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
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
  padding: 5px 0px 5px 0px;
  font-size: 26px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  border-bottom: 2px solid #fff;
  transition: width 2s;
  &:hover {
    letter-spacing: 2px;
    padding-left: 20px;
  }
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  flex-direction: row;
  width: 90%;
  height: 20%;
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
        setMessage(err)
        setLoadingStatus(false)
      })
  }

  let buttonContent
  if (loadingStatus) {
    buttonContent = "Sending..."
  } else if (message.result === "success") {
    buttonContent = "✓"
  } else {
    buttonContent = "→"
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
