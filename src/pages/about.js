import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import '../style/index.scss'

const About = () => (
    <StaticQuery
      query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
            aboutWebsite {
              aboutContent{
                content
              }
              features{
                trait
              }
            }
          }
        }
      }
    `}
      render={data =>(
        <Layout>
          <SEO title= {`About | ${data.site.siteMetadata.title}`} />
        <Container className="wrapper-top">
            <Row>
            <Col xs={12} s={12} md={6} lg={6} xl={6}>
                <h4 className="text-center">About</h4>
                {
                  data.site.siteMetadata.aboutWebsite.aboutContent.map((index) => (
                  <p>{index.content}</p>
                  ))
                }
            </Col>
        
            <Col xs={12} s={12} md={6} lg={6} xl={6}>
                <ol>
                <h5>Features</h5>
                {
                  data.site.siteMetadata.aboutWebsite.features.map((index) => (
                  <li>{index.trait}</li>
                  ))
                }         
                </ol>
            </Col>
            </Row>
        </Container>
        </Layout>

      )}
    />
  )

export default About