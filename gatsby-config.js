const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'DEA Boutqiue',
    description: 'A Modern Home Accessory Brand',
    keywords:'kitchen, dining, bathroom, living room, bedroom, christmas, home accessory',
    author: 'Seimi Terasaki',
    url: 'http://dea-boutqiue.netifly.com/',
    baseURL: '/',
    storefrontConfig: {
      storeName: 'DEA Boutique',
      address: '1 Centre St.',
      location: '2344 Lorem Ipsum, LI',
      company: 'Gatsby Storefront Inc.',
      email: 'example@deaboutique.com',
      phone: '+1 (800) 123-1234',
    },
    aboutWebsite:{
      aboutContent:[{
        content: 'This website is a headless eCommerce PWA storefront for Shopify powered by Gatsby and developed by Seimi Terasaki'
      },{
        content:'Uses React with Gatsby ( Blazing Fast )',
      },{
        content: 'A Gatsby website for Shopify, using Bootstrap 4 Framework'
      },{
        content: 'Front end in React'
      },{
        content: 'Backend in NodeJS'
      },{
        content: 'This website uses gatsby-source-shopify and react-bootstrap'
      }],
      features:[{
        trait:'Uses React with Gatsby ( Blazing Fast )',
      },{
        trait: 'Headless CMS with Shopify CMS'
      },{
        trait: 'GraphQL'
      },{
        trait: 'Shopify Store API'
      },{
        trait: 'SEO supported ( with og tags )'
      },{
        trait: 'Product Search with pagination'
      },{
        trait: 'Create an account on checkout'
      },{
        trait: 'Social media share'
      },{
        trait: 'Responsive Design'
      }]
    },
    menuLinks:
    [{
        name:'blog',
        link:'/blog',
      },{
        name:'about',
        link:'/about',
      },{
        name:'contact',
        link:'/contact',
    }],
    subMenuLinks:
    [{
        name: 'christmas collection',
        link: '/shop/christmas-collection',
        }, {
        name: 'bedroom',
        link: '/shop/bedroom',
        }, {
        name: 'living room',
        link: '/shop/living-room',
        }, {
        name: 'dining',
        link: '/shop/dining',
        }, {
        name: 'kitchen',
        link: '/shop/kitchen',
        }, {
        name: 'bathroom',
        link: '/shop/bathroom',
    }],
    lastSubMenuLink:{
      name: 'shop all',
      link: '/shop/all',
    },
    footerConfig:{
      shopLinks:
      [{
        name: 'my cart',
        link: '/cart',
      },{
        name: 'shipping information',
        link: '/',
      }, {
          name: 'cancellation policy',
          link: '/',
      }],
      socialMedia:
      [{
        name: 'facebook',
        link: '',
        icon: 'FaFacebookF',
      },{
        name: 'twitter',
        link: '',
        icon: 'FaTwitter ',
       }, {
          name: 'Instagram',
          link: '',
          icon: 'FaInstagram',
      },{
          name: 'YouTube',
          link: '',
          icon: 'FaYoutube',
      }],
      deaBoutique:{
        name: 'DEA Boutique',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options:{
        name: 'Dea Butique',
        short_name: 'Dea Butique',
        start_url: '/',
        icon: 'src/images/favicon.png',
        display: `standalone`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: process.env.SHOPIFY_SHOP,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        shouldConfigureSourcePlugin: true, // default
      shouldWrapRootElementWithProvider: true, // default
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GA-Measurement-ID", process.env.GA_TRACKING_ID,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://localhost:8000/`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          ShopifyProduct:{
            title: (node) => node.title,
            slug: (node) => node.handle,
          },
        },
      },
    },
  ],
}
