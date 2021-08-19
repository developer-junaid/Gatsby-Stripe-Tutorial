import { graphql, useStaticQuery } from "gatsby"
import React from "react"

// Component
import Products from "./../components/Products"

// Helmet
import { Helmet } from "react-helmet"

// Index
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetProducts {
      allStripePrice {
        edges {
          node {
            id
            product {
              id
              description
              images
              name
            }
          }
        }
      }
    }
  `)

  // Return
  return (
    <>
      <Helmet title="Strapi Gatsby Tutorial" />
      <Products data={data} />
    </>
  )
}

export default IndexPage
