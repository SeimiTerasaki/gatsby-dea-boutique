import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import {Container, Row, Col} from 'react-bootstrap'
import Layout from "../components/Layout/Layout"
import PaginationButtons from "../components/Shop/PaginationButtons"
import ShopItem from '../components/Shop/ShopItem'

import '../style/index.scss'

const CollectionPage = (props) => {

  const collection = props.data.allShopifyProduct.edges

    return (
      <Layout>
        <Helmet title= {` ${props.pageContext.pageTitle} | ${props.data.site.siteMetadata.title}`} />
      <Container className="wrapper-top">
          <br />
            <h4 className="text-center first-letter">Shop {props.pageContext.pageTitle}</h4>
          <br />
          <hr />
          <Row className="shop-navigation">
            <Col xs={12} s={12} md={12} lg={12} xl={12}>
              <p className="float-right">{props.data.allShopifyProduct.pageInfo.itemCount} of {props.data.allShopifyProduct.pageInfo.totalCount} ITEMS</p>
            </Col>
          </Row>
        <Row>
        {
          collection.map(({node}) => (
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
      <PaginationButtons currentPage={props.pageContext.currentPage} currentURL={props.location.pathname} numberOfPages={props.data.allShopifyProduct.pageInfo.pageCount} />
      </Layout>
 )
}

export const query = graphql`
query CollectionQuery($tags: String!, $limit: Int!, $skip: Int!){
  site {
    siteMetadata {
      title
    }
  }
  allShopifyProduct(limit: $limit, skip: $skip, filter: {tags: {eq: $tags}})   {
    pageInfo{
      currentPage
      pageCount
      totalCount
      itemCount   
    }
    edges {
      node {
        title
        description
        handle
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
        variants {
          price
          shopifyId
        }
      }
    }
  }
}
`
export default CollectionPage