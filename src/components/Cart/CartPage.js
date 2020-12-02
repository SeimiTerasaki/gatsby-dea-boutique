import React from 'react'
import Link from 'gatsby-link'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { FiEdit3 } from 'react-icons/fi'
import {useCartItems, useCart, useCartCount} from 'gatsby-theme-shopify-manager'

import RemoveFromCart from "./RemoveFromCart"
import UpdateQuantity from "./UpdateQuantity"

import '../../style/index.scss'

export default function CartPage() {
    const cartItems = useCartItems();
    const cart = useCart();
    const cartCount =useCartCount();

    function subtotalItems(price, quantity){
        var priceNum = parseFloat(price)
        return priceNum * quantity
    }

    return (
            <Container className="wrapper-top cart">
                <Row className="cart-header">
                <Col xs={12} s={12} md={12} lg={12}><h4 className="cart-h float-left">Cart Summary</h4></Col>
                </Row>
                <Row>
                <Col xs={12} s={12} md={12} lg={12}><h6 className="cart-h float-left">Items: ({cartCount})</h6></Col>
                <div className="hr"></div>
                </Row>
                { cartItems.length > 0 ? (
                    <>
                     {
                        cartItems.map((item) => (
                            <Row className="cart-item-row" key={item.id}>
                                <Col xs={4} sm={3} md={3} lg={2} className="padding-xs">
                                    <img src={item.variant.image.src} className="img-fluid" id="checkout-image" alt=""/>
                                </Col>
                                
                                <Col xs={4} sm={3} md={3} lg={4} className="cart-item-filler padding-xs">
                                    <h5 className="item-name">{item.title}</h5>
                                    <p className="item-price">Price: €{item.variant.price}</p>
                                    <p className="item-quantity">Quantity: {item.quantity}</p>
                                    <span className="cart-item-edit">
                                        <ul className="horizontal">
                                            <li><Button className="edit-btn"><Link to={`/product/${item.variant.product.handle}`}><FiEdit3/> Edit</Link></Button></li>
                                            <li><RemoveFromCart variantId={item.variant.id}/></li>
                                        </ul>
                                    </span>
                                </Col>
                                <Col xs={0} sm={1} md={1} lg={1} className="nodisplay-xs">
                                    <p className="cart-item-sub per-item">€{item.variant.price}</p>
                                </Col>
                                <Col xs={0} sm={1} md={1} lg={1} className="nodisplay-xs">
                                    <p className="cart-item-sub multiply"> X  </p>
                                </Col>
                                <Col xs={2} sm={2} md={2} lg={2} className="padding-xs">
                                    <UpdateQuantity variantId={item.variant.id} currentItemQuantity={item.quantity} />
                                </Col>
                                <Col xs={2} sm={2} md={2} lg={2}>
                                    <p className="cart-item-sub subtotal">€{subtotalItems(item.variant.price, item.quantity)}</p>
                                </Col>
                            </Row>
                            ))
                        }
                            <Row className="cart-header">
                                <Col xs={6} sm={6} md={6} lg={6}><h4 className="cart-h float-left">Total</h4></Col>
                                <Col xs={6} sm={6} md={6} lg={6}><h4 className="cart-h float-right">€{cart.totalPrice}</h4></Col>
                            </Row>
                            <Row>
                                <Col xs={6} s={6} md={6} lg={6}><Button variant="secondary" className="float-left cart-btn" aria-label="return"><Link to="/shop/all">Continue Shopping</Link></Button></Col>
                                <Col xs={6} s={6} md={6} lg={6}>
                                    <Button variant="danger" className="float-right cart-btn" aria-label="buy"><Link to={cart.webUrl} target="_blank" rel="noopener noreferrer">Checkout Now →</Link></Button>
                                </Col>
                            </Row>
                    </>
                ) : (
                    <>
                    <Row className="cart-header">
                        <h5 className="text-center">Your cart is empty.</h5>
                    </Row>
                    <Row>
                        <Col xs={6} s={6} md={6} lg={6}>
                            <Button variant="secondary" className="float-left cart-btn" aria-label="return">
                                <Link to="/shop/all">Continue Shopping</Link>
                            </Button>
                        </Col>
                    </Row>
                    </>
                )}
            </Container>
            )
}