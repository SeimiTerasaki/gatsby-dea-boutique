import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import '../../style/index.scss'

const FeaturedBrands = () => (
    <Container className="text-center section-wrapper">
        <h3>Featured In</h3>
        <Row className="justify-content-md-center brands">
        <Col xs={4} sm={4} md={3} lg={3}><p className="patua-one">Patua One</p></Col>
        <Col xs={4} sm={4} md={3} lg={3}><p className="alex-brush">Alex Brush</p></Col>
        <Col xs={4} sm={4} md={3} lg={3}><p className="gruppo">Gruppo Magazine</p></Col>
        </Row>
    </Container>
)

export default FeaturedBrands