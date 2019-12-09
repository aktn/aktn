import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { StaticQuery, graphql } from "gatsby"
import Menu from "../components/common/Menu"
import Helmet from "react-helmet"
import favicon from "./../images/mickey.png"

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
        <Helmet
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
          ]}
        />
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
