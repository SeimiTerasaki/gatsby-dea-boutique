import React from 'react'
import Link from 'gatsby-link'

import { Container, Jumbotron } from 'react-bootstrap'

const NotFoundPage = () => (
  <Container className="text-center">
    <Jumbotron>
      <h3>PAGE NOT FOUND</h3>
      <p>The page you are searching for does not exist.</p>
      <p><Link to="/">Back to Homepage</Link></p>
    </Jumbotron>
  </Container>
)

export default NotFoundPage
