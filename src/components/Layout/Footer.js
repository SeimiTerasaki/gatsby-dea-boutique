import React from 'react'
import Link from 'gatsby-Link'
import {Container, Row, Col } from 'react-bootstrap';

import Payments from '../../images/payments.png';

import '../../style/index.scss';

const Footer = ({footerLogo, shopLinks, socialMedia}) => (
    <footer>
        <Container>
            <Row  className="justify-content-md-center">
                <Col xs={12} sm={3} md={3} lg={3}>
                <h5>Shop</h5>
                <ul>
                {
                 shopLinks.map((index) => (  
                    <li key={index.name}><Link to={`${index.link}`}>{index.name}</Link></li>
                ))
            }
                </ul>
                </Col>
                <Col xs={12} sm={3} md={3} lg={3}>
                <h5>Social Media</h5>
                <ul>
                {
                    socialMedia.map((index) => (  
                        <li key={index.name}>{index.name}</li>
                    ))
                }
                </ul>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <h5>{footerLogo.name}</h5>
                    <p>{footerLogo.content}</p>
                </Col>
            </Row>
            <Row className="payments-row">
                <Col xs={12} sm={4} md={4} lg={4}>Your payments are secure and safe</Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} md={6} lg={6}><img src={Payments} alt="payment-types-display" id="payment-img"/></Col>
                <Col xs={12} sm={6} md={6} lg={6}><span className="float-right credit">© All Rights Reserved. Site by Seimi Terasaki.</span></Col>
            </Row>
        </Container>
    </footer>
)

export default Footer