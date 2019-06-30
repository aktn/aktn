import React from "react"
import styled from "styled-components"

const Layout = styled.a`
  min-width: 170px;
  padding: 10px 0 4px 0;
  margin: 10px 0;
  display: block;
  color: #232323;
  text-decoration: none;
  text-align: center;
  background-color: #fff;
  border: 1px solid #635f5f;
  border-radius: 2px;
  transition: color 0.4s background-color 0.4s border-color 0.4s;
`

const Button = props => (
  <Layout target="_blank" href={props.href}>
    {props.children}
  </Layout>
)

export default Button
