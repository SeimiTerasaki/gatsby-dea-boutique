import React from 'react'
import {Button} from 'react-bootstrap'
import { FiX } from 'react-icons/fi'
import {useRemoveItemFromCart} from 'gatsby-theme-shopify-manager';

import '../../style/index.scss'

export default function RemoveFromCart({variantId}){
  const removeItemFromCart = useRemoveItemFromCart()

  function removeItem(){  
    const Id = variantId
    removeItemFromCart(Id);
  }
  
    return(
        <Button className="edit-btn" onClick={removeItem} aria-label="remove-item"><FiX /> Remove</Button>
    )
}