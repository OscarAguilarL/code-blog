/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import '../styles/index.scss'
import { Row, Col } from 'reactstrap'

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
        <main>
          <h1>{pageTitle}</h1>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar
                author={postAuthor}
                authorFluid={authorImageFluid}
              />
            </Col>
          </Row>
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
