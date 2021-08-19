import React, { useState } from "react"

// Stripe
import { loadStripe } from "@stripe/stripe-js"

// Stripe Promise
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

// Index
const IndexPage = () => {
  const [stripeError, setStripeError] = useState()
  const [loading, setLoading] = useState()

  const handleClick = async () => {
    setLoading(true)

    // Stripe Instantiate
    const stripe = await stripePromise

    // Redirect to checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: `price_1JPywoJsab2N7UO9GPxbmMV2`,
          quantity: 1,
        },
      ],
      mode: "payment",
      cancelUrl: window.location.origin,
      successUrl: `${window.location.origin}/thankyou`,
      customerEmail: "hello@bob.com",
    })

    // If error
    if (error) {
      setLoading(false)
      setStripeError(error)
    }
  }

  // Return
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeError && <p style={{ color: "red" }}>{stripeError}</p>}
      <button
        role="link"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
        disabled={loading}
      >
        Go to Checkout
      </button>
    </div>
  )
}

export default IndexPage
