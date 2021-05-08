import * as React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="404: Not Found">
    <Seo title="404: Not found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className="btn btn-primary text-uppercase" to={'/'}>Go home</Link>
  </Layout>
)

export default NotFoundPage
