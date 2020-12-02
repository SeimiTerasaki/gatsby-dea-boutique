import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { Carousel, Button } from 'react-bootstrap'

import '../../style/index.scss'

export default function Slider(){
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                    relativeDirectory: { eq: "slider" }
                }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }     
                    }
                }
            }
        }
    `)
return (
    <Carousel>
    {data.allFile.edges.map(image => (
        <Carousel.Item key={image.node.name}>
            <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.name}
            />
            <Carousel.Caption className="caption-left christmas-dark">
                <h4>Lorem Ipsum</h4>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button  variant="outline-dark"><Link to={`shop/${image.node.name}`}>Explore</Link></Button>
            </Carousel.Caption>
        </Carousel.Item>
    ))}
    </Carousel>
    )
}
