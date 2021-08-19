## Stripe Tutorial

## Stack = Gatsby + Stripe

### Tutorial : :link: https://howtocode.io/jamstack-gatsby-stripe-ecommerce/

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

- Create .env.development and .env.production at the root

---

#### Stripe Setup

- Sign up to [Stripe](https://www.stripe.com/)
- Toggle on `Viewing test data` at left panel
- Click Developers > API Keys
- Copy Publishable key and secret key and paste inside .env.production
- Add secret key inside 'secret' option of gatsby-config plugin for stripe
- Install dotenv package
- Tell node to look for required .env file
- Inside gatsby-config.js at the top

```
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
```

---

#### Setup Products to sell

- Go to stripe
- Go to settings > Checkout settings
- Enable `Client-only-integration`
- Go to products > Add Product
- Add product details
- - Image
- - name
- - Description
- - Pricing `One time, standard, $20`
- Save product

---

#### Integrate Stripe with Frontend

- Create file src/utils/stripejs.js
- add stripe code `you can copy from the file`

---

### Install Dependencies

```
npm i @strapi/strapi-js gatsby-source-stripe dotenv
```

## Tech Stack

- Gatsby
- Strapi
