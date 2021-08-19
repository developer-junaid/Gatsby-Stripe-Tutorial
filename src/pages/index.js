import React from "react"

// Styles
import "./../styles/styles.css"

// Link
import { Link } from "gatsby"

// Index
const IndexPage = () => {
  // Return
  return (
    <div className="main-container">
      <h1>Homepage</h1>
      <Link to="/products" className="link">
        See Products
      </Link>
    </div>
  )
}

export default IndexPage
