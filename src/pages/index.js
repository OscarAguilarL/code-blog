import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import Post from "../components/Post"
import { Row, Col } from "reactstrap"
import Sidebar from "../components/Sidebar"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Recent Post</h1>
    <Row>
      <Col md="8">
        <StaticQuery
          query={indexQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                  />
                ))}
              </div>
            )
          }}

        />
      </Col>

      <Col md="4">
        <Sidebar />
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      ){
      edges{
        node{
          id
          frontmatter{
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
