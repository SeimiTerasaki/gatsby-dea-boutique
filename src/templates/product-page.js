import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {Container, Row, Col} from 'react-bootstrap'

import Layout from "../components/Layout/Layout"
import AccordionDropdown from "../components/Shop/Accordion"
import AddToCart from "../components/Cart/AddToCart"
import SocialShare from "../components/SocialShare"

import '../style/index.scss'


const ProductPage = (props) => {

    const product = props.data.shopifyProduct

    return (
    <Layout>
      <Helmet title= {`${props.data.site.siteMetadata.title}: ${product.title}`}  />
    <Container className="wrapper-top">
        <Row>
            <Col xs={12} s={6} md={6} lg={6} xl={6}>
                <Img fluid={product.images[0].localFile.childImageSharp.fluid}
                    alt={product.title}
                    className="desc-image"
                />
            </Col>
            <Col xs={12} s={6} md={6} lg={6} xl={6}>
                <h3 className="desc-name text-center">{product.title}</h3>
                <h3 className="desc-price text-center">€{product.variants[0].price}</h3>
                <hr /> 
                <p className="desc-details">{product.description}</p>
                <br/>
                <div className="text-center">
                <AddToCart id={product.variants[0].shopifyId} />
                </div>
                <br />
                <AccordionDropdown />
                <div className="share-wrapper">
                  <ul className="horizontal text-center">
                    <SocialShare url={props.location.href} title={product.title} image={product.images[0].originalSrc}/>
                  </ul>
                </div>
            </Col>
        </Row>
    </Container>
    </Layout>
 )
}

export default ProductPage

export const query = graphql`
query ProductQuery( $handle: String! ) {
    site {
      siteMetadata {
        title
      }
    }
    shopifyProduct( handle: {eq: $handle }) {
      handle
      variants {
        price
        shopifyId
      }
      title
      description
      images {
        originalSrc
        localFile {
          childImageSharp {
            fluid(maxWidth: 610) {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }`