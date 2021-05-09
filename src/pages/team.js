import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import authors from '../util/authors';
import { Card, CardText, CardBody, CardTitle, Button, Row } from 'reactstrap'
import OscarImage from '../images/author.jpg';
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Our team...">
    <Seo title="Our team" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={OscarImage} alt="Oscar's profile" style={{ maxWidth: '100%' }} />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }} >
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[0].name)}`} >View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
