import React, { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { secondaryFont } from "./../theme/theme"

const SubscribeSection = () => {
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
    background-color: #171a18;
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
    background-color: #222423;
    border-radius: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  `

  const ContentPanel = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f0ebeb;
    font-size: 22px;
    text-align: center;
    font-family: ${secondaryFont};
    letter-spacing: 0.5px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 30px;
    }
  `

  const SubmitBtn = styled.button`
    width: 20%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0px 15px 0px;
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
    @media only screen and (min-width: 768px) {
      height: 40px;
    }
  `

  const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 90%;
    height: 20%;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  `

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
    <SubscribePanel>
      <InputPanel>
        <FormWrapper>
          <Input
            placeholder="abc@example.com"
            onChange={handleInputChange}
            error={message.result === "error"}
          ></Input>
          <SubmitBtn onClick={handleSubmit}>{buttonContent}</SubmitBtn>
        </FormWrapper>
      </InputPanel>
      <ContentPanel>Subscribe for new posts</ContentPanel>
    </SubscribePanel>
  )
}

export default SubscribeSection
