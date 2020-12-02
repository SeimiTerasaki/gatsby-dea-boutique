import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {Container, Row, Col} from 'react-bootstrap'

import Layout from "../components/Layout/Layout"
import SocialShare from "../components/SocialShare"

import '../style/index.scss'

const BlogPost = (props) => {

  const post = props.data.shopifyArticle

    return (
    <Layout>
    <Helmet title= {`${props.data.site.siteMetadata.title}: ${post.title}`} />
    <Container className="wrapper-top">
      <Row> 
        <Col xs={12} s={12} md={12} lg={12} key={post.shopifyId}>
        <div className="share-wrapper"><ul className="horizontal text-center">
            <SocialShare url={props.location.href} title={post.title} image={post.image.originalSrc}/></ul></div>
            <Img fluid={post.image.localFile.childImageSharp.fluid}
                alt={post.title}
                className="description-image"
            />
            <br/>
          </Col>
        </Row>
        <Row>
        <Col xs={12} s={12} md={12} lg={12}>
          <h4 className="text-center">{post.title}</h4>
          <p className="text-center">{post.publishedAt}</p>
          <hr />
            <div className="text-center">{post.content}</div>
            </Col>
        </Row>
    </Container>
    </Layout>
 )
}

export default BlogPost

export const query = graphql`
query PostQuery( $handle: String! )  {
  site {
    siteMetadata {
      title
    }
  }
  shopifyArticle( handle: {eq: $handle }) {
    content
    handle
    shopifyId
    publishedAt(formatString: "MMMM Do, YYYY")
    title
    url
    image {
      localFile {
        childImageSharp {
          fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}`