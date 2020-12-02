import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row } from 'react-bootstrap'

import Post from '../Post'

import '../../style/index.scss'

const FeaturedPosts = () => (
  <StaticQuery
  query={graphql`
  query FeaturedPosts {
    allShopifyArticle {
      edges {
        node {
          publishedAt(formatString: "MMMM Do, YYYY")
          title
          excerpt
          content
          handle
          shopifyId
          image {
            src
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 710) {
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
    <Container className="section-wrapper">
      <h3 className="text-center">Latest News</h3>
      <Row>
      {
          data.allShopifyArticle.edges.map(({ node: blog }) => (
            <Post
            id={blog.shopifyId}
            slug={blog.handle}
            imageSizes={blog.image.localFile.childImageSharp.fluid}
            title={blog.title}
            date={blog.publishedAt}
            header={blog.excerpt}
            />
            ))
        }
      </Row>
    </Container>
)}
/>
)

export default FeaturedPosts