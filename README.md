# 🛒 E-Commerce Website

Welcome to the **E-Commerce Website** project! This repository hosts a modern, full-stack e-commerce platform designed to deliver a seamless shopping experience for customers and comprehensive management tools for admins.

---

## 🚩 Project Overview

This project demonstrates a real-world e-commerce workflow, including secure authentication, product management, shopping cart, and order processing. The platform is under active development, focusing on robust core features and an intuitive UI.

---

## ✨ Features

### 🚀 Phase 1: Core Features

- **Authentication:**  
  Secure login and registration for both admins and customers using JWT and bcrypt.

- **Admin Panel:**  
  - Admins can **create** products and categories.
  - Full **CRUD** operations (Create, Read, Update, Delete) for products and categories (Update is pending).
  - Manage inventory and view detailed product information.

- **Product Catalog:**  
  - Browse products and categories.
  - Search for products by keyword or category.
  - View detailed product information, including images and descriptions.

- **Cart & Checkout:**  
  - Add products to a shopping cart.
  - Update quantities or remove items from the cart.
  - Proceed through a secure checkout process.
  - Generate and view invoices for orders.

---

### 🎯 Phase 2: Enhanced User Experience 

- **Wishlist:**  
  Allow users to save products for future reference.

- **Product Enhancements:**  
  Support for multiple images per product.

- **Filtering & Sorting:**  
  Filter and sort products by:
  - Price  
  - Category  
  - Popularity

- **Ratings & Reviews:**  
  Users can rate and review products to help others.

---

## 🖥️ Technology Stack

- **Front-End:** [Next.js](https://nextjs.org/), [React](https://react.dev/)
- **Back-End:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)

---

## 📸 Screenshots

Explore the current UI and features:

![Screenshot 1](https://github.com/user-attachments/assets/2027fda4-517e-427e-9a04-745d9744e0ad)
![Screenshot 2](https://github.com/user-attachments/assets/4a131807-26e5-4301-948a-e3c38ba9d27f)
![Screenshot 3](https://github.com/user-attachments/assets/d7dd4fef-ade8-4e05-b1c7-859a79c218b4)
![Screenshot 4](https://github.com/user-attachments/assets/efebb4f1-5f27-49cd-ac62-80b192e27b3f)
![Screenshot 5](https://github.com/user-attachments/assets/c2227e91-e2af-4418-b07a-bcea0b9d11e7)
![Screenshot 6](https://github.com/user-attachments/assets/b5eacdf7-8025-4308-bac3-55baf0743667)
![Screenshot 7](https://github.com/user-attachments/assets/a00e864d-073e-48d4-89f9-1bc9cf9f3fcc)
![Screenshot 8](https://github.com/user-attachments/assets/bf5aea0d-035f-4726-81f6-9339b922e5f7)
![Screenshot 9](https://github.com/user-attachments/assets/10c170d9-1e6c-4e68-8806-2f5ca86f68c0)
![Screenshot 10](https://github.com/user-attachments/assets/88be20b4-994f-4240-9fbf-cde3ede6106b)
![Screenshot 11](https://github.com/user-attachments/assets/1c6c5af3-d600-4f93-94ec-2a81b07d231a)

---

## 🤝 Contributing

We welcome your contributions!

- **Suggest features:** Open an issue for enhancements or ideas.
- **Report bugs:** Found a problem? Please create a GitHub issue.
- **Pull requests:** Contributions are always appreciated.

---

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd <project-root>
   npm install
   # Or, if client/server are separate:
   cd client && npm install
   cd ../server && npm install
   ```

3. **Configure environment variables:**  
   Copy `.env.example` to `.env` in both client and server directories, and update the values as needed.

4. **Run the development servers:**
   ```bash
   # In separate terminals
   cd client && npm run dev
   cd server && npm start
   ```

5. **Open in browser:**  
   Visit `http://localhost:3000` (or your specified port).

---

> _Happy Coding!_
