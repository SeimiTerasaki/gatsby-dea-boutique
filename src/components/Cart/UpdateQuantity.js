import React from 'react'
import {Form} from 'react-bootstrap'
import {useUpdateItemQuantity} from 'gatsby-theme-shopify-manager';

import '../../style/index.scss'

export default function UpdateQuantity({variantId, currentItemQuantity}){
    const updateItemQuantity = useUpdateItemQuantity();

    function updateQuantity(value) {
        var quantity = parseInt(value)
        console.log(quantity, variantId)
        const Id = variantId
        updateItemQuantity(Id, quantity);
    }

    return(
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" size="sm" custom defaultValue={currentItemQuantity} onChange={(event) => updateQuantity(event.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}