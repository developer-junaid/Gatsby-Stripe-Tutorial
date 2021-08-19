import React from "react"

// Helmet
import { Helmet } from "react-helmet"

const thankyou = () => {
  return (
    <>
      <Helmet title="Strapi Gatsby Tutorial" />
      <div>
        <h2>Thankyou for your purchase</h2>
      </div>
    </>
  )
}

export default thankyou
