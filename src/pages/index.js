import React from "react"

// Styles
import "./../styles/styles.css"

// Link
import { Link } from "gatsby"

// Helmet
import { Helmet } from "react-helmet"

// Index
const IndexPage = () => {
  // Return
  return (
    <>
      <Helmet title="Strapi Gatsby Tutorial" />
      <div className="main-container">
        <h1>Gatsby Stripe Tutorial</h1>
        <Link to="/products" className="link">
          See Products
        </Link>
      </div>
    </>
  )
}

export default IndexPage
