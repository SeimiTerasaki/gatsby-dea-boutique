import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {Col} from 'react-bootstrap'


import AddToCart from "../Cart/AddToCart"

const ShopItem = ({id, slug, imageSizes, name, price}) => {

    return(

    <Col xs={6} s={6} md={4} lg={3} xl={3} key={id}>
        <div className="product">
        <div className="product-image">
        <Link to={`/product/${slug}`} target="_blank">
            <Img fluid={imageSizes} className="img-fluid"/>
            <div className="product-information">
            <div className="product-caption">
                <Link to={`/product/${slug}`} target="_blank">See More</Link>
            </div>
            </div>
            </Link>
        </div>
        <div className="product-details">
            <div className="product-name">
            {name}
            <div className="product-price">
               €{price}
            </div>
            </div>
            <AddToCart id={id} slug={slug} imageSizes={imageSizes} name={name} price={price} />
        </div>
        </div>
    </Col>
    )
}

export default ShopItem