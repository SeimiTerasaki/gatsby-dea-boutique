import React from 'react'

import Layout from "../components/Layout/Layout"
import Slider from "../components/Home/Slider"
import RecentStore from "../components/Home/RecentShop"
import FeaturedPosts from "../components/Home/RecentPosts"
import FeaturedBrands from "../components/Home/FeaturedBrands"
import FeaturedCategories from '../components/Home/FeaturedCategories'
import SEO from '../components/seo'

import '../style/index.scss'

const Index = () => {
    return ( 
        <Layout>
        <SEO title="DEA Boutique | A Modern Home Accessory Brand" />
            <Slider/>
            <FeaturedBrands />
            <FeaturedCategories />
            <FeaturedPosts />
            <RecentStore />
        </Layout>
    )
}

export default Index
