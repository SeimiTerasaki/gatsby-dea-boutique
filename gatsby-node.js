const path = require(`path`)

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve('./src/templates/blog-post.js')        
    const productPage = path.resolve('./src/templates/product-page.js') 
    const collectionPages = path.resolve('./src/templates/collection-pages.js')

    return graphql(`
      {
        allShopifyProduct {
          edges {
            node {
              handle
            }
          }
          totalCount
        }
        allShopifyCollection {
          edges {
            node {
              handle
              title
              products{
                handle
              }
            }
          }
        }
        allShopifyArticle {
          edges {
            node {
              handle
            }
          }
        }
      }
    `).then( result => {

      if(result.error){
        throw new Error(result.errors)
      }

      const Products = result.data.allShopifyProduct.edges
      const Posts = result.data.allShopifyArticle.edges
      const Collections = result.data.allShopifyCollection.edges

      Products.forEach(({ node }) => {
        node.url = `product/${node.handle}/`

        createPage({
            path: node.url,
            component:  productPage,
            context: {
                handle: node.handle,
            },
        })
    })

    Posts.forEach(({ node }) => {
      node.url = `blog/${node.handle}/`

      createPage({
          path: node.url,
          component:  blogPost,
          context: {
              handle: node.handle,
          },
      })
    })

    Collections.forEach(({node}) => {
        node.url = `shop/${node.handle}/`
        
        const pageTitle = node.title
        const tagName = node.handle
        const productsPerPage = 16
        const totalCount = node.products.length
        const numberOfPages = Math.ceil( totalCount / productsPerPage)

        Array.from({length: numberOfPages}).forEach((_, index) => {
          const currentPage = index + 1

          createPage({
            path: index === 0 ? node.url : `${node.url}page=${index + 1}/`,
            component:  collectionPages,
            context: {
                limit: productsPerPage,
                skip: index * productsPerPage,
                tags: tagName,
                currentPage,
                numberOfPages,
                pageTitle,
              },
          })
        })
      })
    })
  }


      