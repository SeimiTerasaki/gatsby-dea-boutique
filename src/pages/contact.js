import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import Layout from "../components/Layout/Layout"
import SEO from '../components/seo'
import '../style/index.scss'

const Contact = () => (
    <StaticQuery
      query={graphql`
      query ContactQuery {
        site {
          siteMetadata {
            title
            storefrontConfig {
              address
              company
              email
              location
              phone
              storeName
            }
          }
        }
      }
    `}
      render={data =>(
        <Layout>
        <SEO title= {`Contact Us | ${data.site.siteMetadata.title}`} />
        <Container className="wrapper-top">
            <Row>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    <h4>Contact Us Here</h4>
                    <br/>
                    <h5>Address:</h5>
                    <h6>{data.site.siteMetadata.storefrontConfig.storeName}</h6>
                        <address>{data.site.siteMetadata.storefrontConfig.address}
                        <br/>{data.site.siteMetadata.storefrontConfig.location}
                        <br /> 
                        </address>
                        <p>{data.site.siteMetadata.storefrontConfig.email}</p>
                    <p>{data.site.siteMetadata.storefrontConfig.phone}</p>
                    <hr />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Form data-netlify="true" name="contact" className="contact-form">
                  <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="name" placeholder="Enter your full name here" />
                    </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="example@123.com" />
                    </Form.Group>

                  <Form.Group as={Col} controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control placeholder="Enter subject here"/>
                  </Form.Group>

                    <Form.Group as={Col} controlId="formGridMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Enter message here"/>
                    </Form.Group>
                    <div className="text-center"><Button variant="primary" type="submit">Submit</Button></div>
                    
                  </Form>
                </Col>
            </Row>
        </Container>
        </Layout>
      )}
    />
  )

export default Contact