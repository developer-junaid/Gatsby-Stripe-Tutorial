import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

// Stripe
import { loadStripe } from "@stripe/stripe-js"

// Stripe Promise
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

// Index
const IndexPage = () => {
  const [stripeError, setStripeError] = useState()
  const [loading, setLoading] = useState()

  const handleClick = async (event, priceId) => {
    event.preventDefault()
    setLoading(true)

    // Stripe Instantiate
    const stripe = await stripePromise

    // Redirect to checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      cancelUrl: `${window.location.origin}/products`,
      successUrl: `${window.location.origin}/thankyou`,
    })

    // If error
    if (error) {
      setLoading(false)
      setStripeError(error)
    }
  }

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeError && <p style={{ color: "red" }}>{stripeError}</p>}
      <h2>Products</h2>
      <div
        style={{
          border: "1px solid gray",
          width: "90%",
          minHeight: "300px",
          padding: "1rem",
          background: "c1c1c185",
        }}
      >
        {data &&
          data.allStripePrice.edges.map(({ node }) => {
            let nodeId = node.id
            let product = node.product

            return (
              <div
                style={{
                  display: "flex",
                  padding: "1rem",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "40%",
                  textAlign: "center",
                  margin: "1rem auto",
                  boxShadow: "3px 3px 5px gray",
                  background: "white",
                }}
                key={nodeId}
              >
                <img
                  style={{
                    margin: "0 auto",
                    width: "100%",
                    maxWidth: "500px",
                    border: "2px solid gray",
                  }}
                  src={product.images[0]}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button
                  style={{
                    padding: "0.5rem 2rem",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    marginTop: "1rem",
                  }}
                  type="button"
                  disabled={loading}
                  onClick={event => handleClick(event, node.id)}
                >
                  Buy
                </button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default IndexPage
