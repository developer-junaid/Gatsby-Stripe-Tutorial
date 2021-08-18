## Stripe Tutorial

## Stack = Gatsby + Stripe

### Tutorial : :link: https://howtocode.io/jamstack-gatsby-stripe-ecommerce/

<img src='./home.png'>

## Steps

##### Setup

- Install Gatsby Cli `npm i -g gatsby-cli`
- Create Gatsby project `gatsby new project_name`
- Install dependencies "stripe and stripe plugin"
- Configure stripe plugin
- - Open gatsby-config.js
- - Add following to config.js plugins

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

- - Create .env.development and .env.production at the root

---

#### Stripe Setup

- Sign up to (https://www.stripe.com/)[stripe]

---

### Install Dependencies

```
npm i @strapi/strapi-js gatsby-source-stripe
```

## Tech Stack

- Gatsby
- Strapi
