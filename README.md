# E-Commerce API

## About

This is E-Commerce API built with Node.js, Express, MongoDB, and Mongoose. It provides endpoints to manage products and shopping carts, including creating, retrieving, updating, and deleting products, as well as creating carts and adding items to them.

## Install

1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

## Run

Start the development server:

```bash
npm run dev
```

Or start the application normally:

```bash
npm start
```

The server will run at:

```
http://localhost:3000
```

## API Endpoints

### Products
- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/products`
- PUT `/api/products/:id`
- DELETE `/api/products/:id`

### Cart
- POST `/api/cart`
- GET `/api/cart/:id`
- POST `/api/cart/:id/items`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman