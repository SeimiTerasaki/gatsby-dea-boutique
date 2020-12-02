import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row} from 'react-bootstrap'

import ShopItem from '../Shop/ShopItem'

import '../../style/index.scss'

const RecentStore = () => (
  <StaticQuery
    query={graphql`
    query MyQuery {
      allShopifyProduct(limit: 8, sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            title
            description
            handle
            variants {
              price
              shopifyId
            }
            images {
              originalSrc
              localFile {
                childImageSharp {
                 fluid(maxWidth: 410) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
            }
          }
        }
      }
    }
 `}
    render={data => (
      <Container className="text-center section-wrapper">
        <h3>This Just In</h3>
        <br />
        <Row>
        {
          data.allShopifyProduct.edges.map(({ node }) => (
            <ShopItem
              id={node.variants[0].shopifyId}
              slug={node.handle}
              imageSizes={node.images[0].localFile.childImageSharp.fluid}
              name={node.title}
              price={node.variants[0].price}/>
          ))
        }
      </Row>
      </Container>
    )}
  />
)

export default RecentStore
