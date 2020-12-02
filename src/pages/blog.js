import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row } from 'react-bootstrap'

import Layout from "../components/Layout/Layout"
import Post from '../components/Post'
import SEO from '../components/seo'

const Blog = () => (
    <StaticQuery
    query={graphql`
    query Blog {
      site {
        siteMetadata {
          title
        }
      }
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
    <Layout>
      <SEO title= {`Blog | ${data.site.siteMetadata.title}`} />
      <Container className="wrapper-top">
        <div><h3 className="text-center">Blog</h3></div>
        <Row>
        {
          data.allShopifyArticle.edges.map(({ node: blog }) => (
            <Post
            id={blog.shopifyId}
            slug={blog.handle}
            imageSizes={blog.image.localFile.childImageSharp.fluid}
            title={blog.title}
            date={blog.publishedAt}
            header={blog.excerpt} />
            ))
        }
        </Row>
      </Container>
    </Layout>
)}
 />
)

export default Blog