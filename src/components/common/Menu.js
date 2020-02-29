import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavMenu = styled.button`
  width: 100vw;
  height: 80px;
  z-index: 1;
  border: 0;
  outline: none !important;
  background-color: #fcfcfc;
`

const Navigation = styled.div`
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: 0.2s ease-out;
    transform-origin: right center;
    opacity: 0;
    transform: translate3d(100px, 100px, 0) skewY(-10deg);
    padding: 30px 20px;
    display: block;
    visibility: hidden;
    @media screen and (min-width: 900px) {
      padding: 50px 90px;
      display: block;
    }
    &:after {
    }
    &:hover {
      color: #91faef;
    }
  }
`

const NavigationContainer = styled.div`
  //to be fixed
  min-height: 100vh;
  min-width: 100vw;

  position: absolute;
  overflow: hidden;
  padding-top: 70px;
  z-index: ${props => (props.activeStatus ? "30" : "15")};
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
    transition-delay: 0s;
    transition: transform 0.4s;
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
  @media only screen and (min-width: 768px) {
    z-index: ${props => (props.activeStatus ? "30" : "15")};
    // min-height: 100vh;
    // min-width: 100vw;
    // visibility: hidden;
    &.is-open {
      min-height: 100vh;
      min-width: 100vw;
      // visibility: visible;
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
  padding-top: 5px;
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

const pStyle = {
  fontSize: "15px",
  textAlign: "center",
  height: "100%",
  overflow: "hidden",
  margin: 0,
}

class Menu extends Component {
  state = {
    active: false,
    zIndex: 15,
  }

  hamburger = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    return (
      <div style={pStyle}>
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
        <NavigationContainer
          className={this.state.active ? "is-open" : ""}
          // style={{ zIndex: this.state.active ? 30 : 15 }}
          activeStatus={this.state.active}
        >
          <Navigation>
            <Link to="/" onClick={this.hamburger}>
              Home
            </Link>

            <Link to="/projects" onClick={this.hamburger}>
              Projects
            </Link>
            <Link to="/blogs" onClick={this.hamburger}>
              Blogs
            </Link>
          </Navigation>
        </NavigationContainer>
      </div>
    )
  }
}

export default Menu
