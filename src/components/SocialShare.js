import React from 'react'
import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    WhatsappIcon,
  } from "react-share";

import '../style/index.scss'

const SocialShare = (url, title, image) => {

    const shareUrl = url.url;
    

    return(
  <>
        <li>Share: </li>
        <li><FacebookShareButton
                url={shareUrl}
                quote={title}
                className="social-share-button"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton></li>
        <li><TwitterShareButton
            url={shareUrl}
            title={title}
            className="social-share-button"
          >
            <TwitterIcon size={32} round />
        </TwitterShareButton></li>
        <li><PinterestShareButton
            url={shareUrl}
            media={`${shareUrl}/${image}`}
            className="social-share-button"
          >
            <PinterestIcon size={32} round />
        </PinterestShareButton></li>
        <li><WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="social-share-button"
          >
            <WhatsappIcon size={32} round />
        </WhatsappShareButton></li>
  </>
)
}

export default SocialShare