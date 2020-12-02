import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

import '../../style/index.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
    query SiteLinksQuery {
      siteSearchIndex {
        index
      }
      site {
        siteMetadata {
          title
          footerConfig {
            deaBoutique {
              content
              name
            }
            shopLinks {
              link
              name
            }
            socialMedia {
              icon
              link
              name
            }
          }
          baseURL
          lastSubMenuLink {
            link
            name
          }
          menuLinks {
            link
            name
          }
          subMenuLinks {
            link
            name
          }
        }
      }
    }
`}
    render={data => (
      <>
      <Header
        title={data.site.siteMetadata.title}
        baseURL={data.site.siteMetadata.baseURL}
        menuLinks={data.site.siteMetadata.menuLinks}
        subMenuLinks={data.site.siteMetadata.subMenuLinks}
        lastSubMenuLink={data.site.siteMetadata.lastSubMenuLink}
        searchIndex = {data.siteSearchIndex.index}
      />
        {children}
      <Footer
        footerLogo={data.site.siteMetadata.footerConfig.deaBoutique}
        shopLinks={data.site.siteMetadata.footerConfig.shopLinks}
        socialMedia={data.site.siteMetadata.footerConfig.socialMedia}
      />
    </>
   )}
   />
 )

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
