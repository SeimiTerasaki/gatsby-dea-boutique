import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import {Container, Row, Col, Button} from 'react-bootstrap'

import '../../style/index.scss' 

const FeaturedCategories = () => (
    <StaticQuery
    query={graphql`
    query FeaturedCollectionQuery {
        allShopifyCollection(limit: 4, sort: {fields: image___src, order: ASC}) {
          edges {
            node {
              title
              image {
                src
                id
                localFile {
                    childImageSharp {
                      fluid(maxWidth: 410) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
              }
              handle
            }
          }
        }
    }
`}

render={data => (
    <Container className="text-center section-wrapper">
        <Row className="justify-content-md-center">
        {data.allShopifyCollection.edges.map(index => (
        <Col xs={6} sm={6} md={3} lg={3} xl={3} key={index.node.title}>
              <div className="category">
                <div className="category-image">
                <Img
                    fluid={index.node.image.localFile.childImageSharp.fluid}
                    alt={index.node.image.id}
                />
                    <div className="category-caption">
                        <div className="content">
                        <h4>{index.node.title}</h4>
                        <Button className="category-btn"><Link to={`shop/${index.node.handle}`}>See More</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        ))}
        </Row>
    </Container>
    )}
  />
  )

  export default FeaturedCategories
