import React from "react"
import styled from "styled-components"

const Layout = styled.a`
  min-width: 200px;
  max-width: 400px;
  padding: 10px 0 4px 0;

  display: block;
  color: #232323;
  text-decoration: none;
  text-align: center;
  background-color: #fff;
  border: 1px solid #635f5f;
  border-radius: 2px;
  transition: color 0.4s background-color 0.4s border-color 0.4s;
  @media and screen only(min-width: 768px) {
    min-width: 170px;
  }
`

const Button = props => (
  <Layout target="_blank" href={props.href}>
    {props.children}
  </Layout>
)

export default Button
