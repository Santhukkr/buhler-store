# Buhler Store — Vue 3 (Vite) Demo

A small single-page demo store built with **Vue 3**, **Vite**, **Pinia**, **Vue Router**, and **TailwindCSS**.
This scaffold implements the assignment requirements:
- Header with logo, live date/time, and cart count
- Product List (section-wise)
- Product Details page (dynamic route `/products/:id`)
- Checkout page with cart items and total
- Add / remove from cart

## Getting started

### Requirements
- Node.js >= 18
- npm

### Install & Run
```bash
git clone <your-repo-url>   # or unzip the project
cd buhler-store
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build
```bash
npm run build
```

## Project structure (important files)
```
src/
  assets/            # images, products.json, tailwind entry
  components/
    Header.vue
    ProductCard.vue
  pages/
    ProductList.vue
    ProductDetails.vue
    Checkout.vue
  router/
    index.js
  store/
    cart.js
  App.vue
  main.js
```

## Notes for reviewers
- Tailwind is included via `src/assets/tailwind.css`. If you want the full Tailwind CLI/postcss integration, run `npm install` and the dev server will process it.
- The `products.json` contains sample data matching the screenshots.
- This scaffold focuses on clarity, small surface area, and easy review.

---
