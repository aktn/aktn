import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Social from "./Social"
import { primaryFont } from "./../theme/theme"

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${primaryFont};
  background: #171717;
  height: 100vh;
  text-align: left;
  padding: 7rem 0 0 2.5rem;
  position: absolute;
  top: 0;
  right: -100;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: transform 0.5s ease-in-out;
  z-index: 99;
  width: 40%;
  transform: ${({ open }) => (open ? "translateX(150%)" : "translateX(250%)")};
  @media (max-width: 768px) {
    width: 96%;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #dedede;
  font-size: 1.5rem;
  padding: 2.5rem 0rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  transition: color 0.3s linear;
  @media only screen and (min-width: 768px) {
    padding: 2rem 0rem;
  }
  &:hover {
    color: cyan;
  }
  &.isOpen {
    animation-name: animateIn;
    animation-duration: 500ms;
    animation-delay: calc((${props => props.animateOrder}) * 170ms);
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    @keyframes animateIn {
      0% {
        opacity: 0;
        transform: translate(3em, 0);
      }
      100% {
        opacity: 1;
      }
    }
  }
`

const Hamburger = styled.div`
  -webkit-transition: margin 600ms;
  -moz-transition: margin 600ms;
  transition: margin 600ms;
  cursor: pointer;
  position: absolute;
  margin: 5px;
  right: 1px;
  top: 10px;
  padding: 5px;
  z-index: 200;
  span {
    display: block;
    width: 2.8em;
    height: 2px;
    margin: 0.7em;
    border-right: 1.8em solid cyan;
    border-left: 0.6em solid grey;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition-property: -webkit-transform, margin, border-right-color,
      box-shadow;
    -moz-transition-property: -moz-transform, margin, border-right-color,
      box-shadow;
    transition-property: transform, margin, border-right-color, box-shadow;
    -webkit-transition-duration: 600ms;
    -moz-transition-duration: 600ms;
    transition-duration: 600ms;
  }
  &.pushed ${Navigation} {
    margin: 0;
  }
  &.pushed span:nth-of-type(1) {
    margin-left: 1.4em;
    -webkit-transform: rotate(-137deg) translateY(-0.2em);
    -moz-transform: rotate(-137deg) translateY(-0.2em);
    -ms-transform: rotate(-137deg) translateY(-0.2em);
    -o-transform: rotate(-137deg) translateY(-0.2em);
    transform: rotate(-137deg) translateY(-0.2em);
  }
  &.pushed span:nth-of-type(2) {
    margin-left: 0.5em;
    -webkit-transform: rotate(-42deg) translateX(1em);
    -moz-transform: rotate(-42deg) translateX(1em);
    -ms-transform: rotate(-42deg) translateX(1em);
    -o-transform: rotate(-42deg) translateX(1em);
    transform: rotate(-42deg) translateX(1em);
  }
  @media only screen and (min-width: 768px) {
    right: 70px;
    margin: 10px;
    padding: 20px;
  }
`

const SocialAccounts = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    padding-bottom: 50px;
  }
`

class Menu extends Component {
  state = {
    active: false,
  }

  constructor(props) {
    super(props)
    this.wrapperRef = React.createRef()
  }

  hamburger = () => {
    this.setState({ slideOpen: !this.state.slideOpen })
  }

  state = {
    slideOpen: false,
  }

  render() {
    return (
      <>
        <Hamburger
          onClick={this.hamburger}
          className={this.state.slideOpen ? "pushed" : ""}
          style={{ zIndex: "999" }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </Hamburger>
        <Navigation open={this.state.slideOpen}>
          <NavLink
            to="/"
            onClick={this.hamburger}
            className={this.state.slideOpen ? "isOpen" : ""}
            animateOrder={1}
          >
            home
          </NavLink>
          <NavLink
            to="/projects"
            onClick={this.hamburger}
            className={this.state.slideOpen ? "isOpen" : ""}
            animateOrder={2}
          >
            projects
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={this.hamburger}
            className={this.state.slideOpen ? "isOpen" : ""}
            animateOrder={3}
          >
            blogs
          </NavLink>
          <SocialAccounts>
            <Social></Social>
          </SocialAccounts>
        </Navigation>
      </>
    )
  }
}

export default Menu
