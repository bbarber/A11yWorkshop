# A11y Workshop - E-Commerce Site

An accessibility workshop example application built with React, Vite, and Tailwind CSS. This is a functional e-commerce site designed to demonstrate common accessibility patterns and issues that can be used for hands-on learning.

## Features

- **Product Listing**: Browse products with filtering by category and price range
- **Product Details**: View detailed product information with ratings and reviews
- **Shopping Cart**: Add/remove items and manage quantities
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern Stack**: Built with React 18, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── CartItem.tsx
├── pages/
│   ├── Home.tsx (Product Listing)
│   ├── ProductDetail.tsx
│   └── Cart.tsx
├── context/
│   └── CartContext.tsx
├── data/
│   └── products.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Pages

### Home (`/`)
Product listing page with:
- Category filtering
- Price range filtering
- Sorting options (name, price, rating)
- Product grid display

### Product Detail (`/product/:id`)
Individual product page with:
- Large product image
- Full product description
- Star ratings and reviews
- Stock status
- Quantity selector
- Add to cart functionality

### Shopping Cart (`/cart`)
Cart management page with:
- List of cart items
- Quantity management
- Item removal
- Order summary (subtotal, tax, shipping)
- Checkout button

## About This Workshop

This application is designed as a base for an accessibility workshop. The code intentionally has clean structure and semantic HTML to serve as a reference. During the workshop, accessibility issues can be systematically introduced for participants to identify and fix.

## Common Areas for A11y Workshop

- Image alt text quality
- Form label associations
- Keyboard navigation and focus management
- ARIA attributes and semantic HTML
- Color contrast and visual feedback
- Screen reader support
- Heading hierarchy
- Link and button semantics

## License

This project is provided as-is for educational and workshop purposes.
