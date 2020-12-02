import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import {Figure, Col} from 'react-bootstrap'

const Post = ({id, slug, imageSizes, title, date, header}) => (
    <Col xs={12} s={6} md={6} lg={6} xl={6} key={id}>
        <Figure>
        <Link to={`/blog/${slug}`} target="_blank">
        <Img fluid={imageSizes}
            alt={title}
            className="figure-img"
        />
            <Figure.Caption>
                <h5>{title}</h5>
            </Figure.Caption>
            <Figure.Caption>
                <p>{date}</p>
            </Figure.Caption>
            <Figure.Caption>
                <p>{header}</p>
            </Figure.Caption>
            <Figure.Caption className="text-center read-more">
                <Link to={`/blog/${slug}`} target="_blank">Read More</Link>
            </Figure.Caption>
        </Link>
        </Figure>
    </Col>
)

export default Post