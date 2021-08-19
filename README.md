## Stripe Tutorial

## Stack = Gatsby + Stripe

## **Client Only Integration**

<img src='./home.png'>

## Steps

##### Setup

- Install Gatsby Cli `npm i -g gatsby-cli`
- Create Gatsby project `gatsby new project_name`
- Install dependencies "stripe and stripe plugin"

##### Configure stripe plugin

- Open gatsby-config.js
- Add following to config.js plugins

```
plugins: [
  ... ,
  {
    resolve: `gatsby-source-stripe`,
    options: {
      objects: ['Price'],
      secretKey: 'secret',
      downloadFiles: false,
    }
  }
]
```

- Create .env at the root

---

#### Stripe Setup

- Sign up to [Stripe](https://www.stripe.com/)
- Toggle on `Viewing test data` at left panel
- Click Developers > API Keys
- Copy Publishable key and secret key and paste inside .env
- Add secret key inside 'secret' option of gatsby-config plugin for stripe
- Install dotenv package
- Tell node to look for required .env file
- Inside gatsby-config.js at the top

```
require('dotenv').config({
  path: `.env`
})
```

---

#### Setup Products to sell

- Go to stripe
- Go to settings > Checkout settings
- Enable `Client-only-integration`
- **NOTE: Add your domains here when deploying your app**
- Go to products > Add Product
- Add product details
- - Image
- - name
- - Description
- - Pricing `One time, standard, $20`
- Save product

---

#### Integrate Stripe Checkout with Frontend

- Create Stripe promise with the publishable id
- Call redirect to checkout method with the product and thier ids
- you can copy the id from the stripe products section
- Click the Go to checkout button and you'll be redirected to checkout

---

#### Getting Stripe Products Data via Graphql Queries

- Try GraphQl queries inside playground `allStripePrice`
- Integrate that query with frontend using

```
import { graphql, useStaticQuery } from "gatsby"

// Inside your component
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
```

- Pass Id to redirectToCheckout function to trigger each product on Click of Buy Button

---

### Install Dependencies

```
npm i @strapi/strapi-js gatsby-source-stripe dotenv
```

## Tech Stack

- Gatsby
- Strapi
