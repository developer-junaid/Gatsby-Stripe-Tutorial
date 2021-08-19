import * as React from "react"

// Helmet
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
  <>
    <Helmet title="Strapi Gatsby Tutorial" />
    <div>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </>
)

export default NotFoundPage
