import React, { useState } from "react"

// Stripe
import { loadStripe } from "@stripe/stripe-js"

// Styles
import "./../../styles/styles.css"
import Product from "../Product"

// Stripe Promise
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

// Products
const Products = ({ data }) => {
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

  // Return
  return (
    <div className="main-container">
      {stripeError && <p className="error">{stripeError}</p>}
      <h1>Products</h1>
      <div className="products-container">
        {data &&
          data.allStripePrice.edges.map(({ node }) => {
            let nodeId = node.id
            let product = node.product

            return (
              <Product
                key={nodeId}
                nodeId={nodeId}
                product={product}
                loading={loading}
                handleClick={handleClick}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Products
