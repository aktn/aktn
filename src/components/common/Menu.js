import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavMenu = styled.button`
  width: 100vw;
  height: 80px;
  z-index: 1;
  border: 0;
  outline: none !important;
`

const NavigationContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: 150px;
  &:after {
    background-color: #232323;
    content: "";
    width: 200vw;
    height: 200vh;
    position: absolute;
    top: 0;
    right: 0;
    transform-origin: right top;
    transform: translateZ(0) rotate(-90deg);
    z-index: -1;
    transition: transform 0.45s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  &.is-open {
    ${Navigation} {
      a {
        transform: translateZ(0) skewY(0deg);
        visibility: visible;
        opacity: 1;
      }
    }
    &:after {
      transform: translateZ(0) rotate(0deg);
      transition: transform 0.6s cubic-bezier(0.4, 0, 0, 1);
      transition-delay: 0s;
    }
  }
`

const Navigation = styled.div`
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
    transition: 0.2s ease-out;
    transform-origin: right center;
    opacity: 0;
    transform: translate3d(100px, 100px, 0) skewY(-10deg);
    padding: 50px 20px;
    display: block;
    visibility: hidden;
    @media screen and (min-width: 900px) {
      padding: 80px 90px;
      display: block;
    }
    &:after {
      content: "/";
      margin-left: 6vw;
      margin-right: 1vw;
    }
    &:hover {
      color: red;
    }
  }
`

const Hamburger = styled.div`
  -webkit-transition: margin 600ms;
  -moz-transition: margin 600ms;
  transition: margin 600ms;
  cursor: pointer;
  position: absolute;
  margin: 10px;
  right: 0;
  top: 0;
  span {
    display: block;
    width: 2.8em;
    height: 2.2px;
    margin: 0.7em;
    border-right: 1.8em solid grey;
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
    opacity: 0;
  }
  &.pushed span:nth-of-type(2) {
    margin-left: 1.4em;
    -webkit-transform: rotate(-137deg) translateY(-0.2em);
    -moz-transform: rotate(-137deg) translateY(-0.2em);
    -ms-transform: rotate(-137deg) translateY(-0.2em);
    -o-transform: rotate(-137deg) translateY(-0.2em);
    transform: rotate(-137deg) translateY(-0.2em);
  }
  &.pushed span:nth-of-type(3) {
    margin-left: 0.5em;
    -webkit-transform: rotate(-42deg) translateX(1em);
    -moz-transform: rotate(-42deg) translateX(1em);
    -ms-transform: rotate(-42deg) translateX(1em);
    -o-transform: rotate(-42deg) translateX(1em);
    transform: rotate(-42deg) translateX(1em);
  }
`

class Menu extends Component {
  state = {
    active: false,
  }

  hamburger = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    return (
      <>
        <NavMenu>
          <Hamburger
            onClick={this.hamburger}
            className={this.state.active ? "pushed" : ""}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </Hamburger>
        </NavMenu>

        <NavigationContainer className={this.state.active ? "is-open" : ""}>
          <Navigation>
            <Link to="/a">Home</Link>
            <Link to="/b">Project</Link>
            <Link to="/x">Blog</Link>
          </Navigation>
        </NavigationContainer>
      </>
    )
  }
}

export default Menu
