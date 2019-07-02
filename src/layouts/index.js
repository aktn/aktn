import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { StaticQuery, graphql } from "gatsby"
import Menu from "../components/common/Menu"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Menu />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
