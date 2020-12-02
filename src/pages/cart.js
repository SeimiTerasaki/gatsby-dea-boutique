import React from 'react'

import Layout from "../components/Layout/Layout"
import CartPage from '../components/Cart/CartPage'
import SEO from '../components/seo'

const Cart = () =>(

            <Layout>
                <SEO title= "DEA Boutique | Shopping Cart" />
                <CartPage />
            </Layout>
)

export default Cart