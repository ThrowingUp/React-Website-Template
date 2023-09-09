import React from 'react'
import { newsletterSignUpText } from '../../constants/newsletterSignUpData'

import RenderText from "../../utils/RenderText.jsx";

const NewsletterSignUp = () => {
  return (
    <div>
        <RenderText content={newsletterSignUpText[0].heading} />
        <RenderText content={newsletterSignUpText[0].text} />
        <div>
            ADD EMAIL TEMPLATE
        </div>
    </div>
  )
}

export default NewsletterSignUp