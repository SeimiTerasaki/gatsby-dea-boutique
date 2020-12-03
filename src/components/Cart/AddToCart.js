import React, {useState} from 'react'
import Link from 'gatsby-link'
import {Button, Modal, Row, Col} from 'react-bootstrap'
import Img from 'gatsby-image'
import {useAddItemToCart} from 'gatsby-theme-shopify-manager';
import { FiEdit3 } from 'react-icons/fi'

import RemoveFromCart from "./RemoveFromCart"

import '../../style/index.scss'

const AddToCart = ({id, slug, imageSizes, name, price}) => {
    
  const addItemToCart = useAddItemToCart();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addItem() {
  
    const variantId = id;
    const quantity = 1;
        
    addItemToCart(variantId, quantity);
    handleShow();

  }

  return (
    <>
      <Button className="full-width" onClick={addItem}>Add to Cart</Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h6 className="cart-h">Item Added to Cart!</h6>
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6} s={6} md={6} lg={6} xl={6}>
              <Img fluid={imageSizes} className="img-fluid"/>
            </Col>
            <Col xs={6} s={6} md={6} lg={6} xl={6} className="modal-p">
              <p>{name}</p>
              <p>€{price}</p>
              <Button className="edit-btn" aria-label="add-item"><Link to={`/product/${slug}`}><FiEdit3/> Edit</Link></Button>|
               <RemoveFromCart variantId={id}/>
            </Col>
            <Col xs={12} s={12} md={12} lg={12} xl={12}>
              <Button className="modal-checkout" aria-label="checkout"><Link to={`/cart`}>Checkout</Link></Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddToCart
