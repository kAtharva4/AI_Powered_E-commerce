# AI-Powered MERN E-commerce Website

## Project Overview
This project is an AI-powered e-commerce platform built using the MERN stack. The key feature is a voice-activated AI assistant that helps users navigate the site and find products. The website also includes a comprehensive admin panel for product and order management, secure user authentication, and a integrated payment gateway.

## Core Features
- **AI Assistant**: Navigate the website and search for products using voice commands.
- **User Authentication**: Secure sign-up and login with email/password or Google authentication.
- **Admin Panel**: A dedicated section for administrators to manage products, track orders, and update order statuses.
- **Product Management**: Admins can add, delete, and manage product details, including marking items as "best sellers."
- **Product Filtering & Search**: Users can easily find products by filtering by category and sub-category or by using the search bar.
- **Shopping Cart**: A fully functional cart that allows users to add, remove, and update product quantities.
- **Payment Gateway**: Secure online payments are processed through Razorpay, supporting UPI payments.
- **Order Tracking**: Users can view and track their orders with real-time status updates.
- **Responsive Design**: The website is fully responsive, ensuring a seamless experience across all devices.

## Technology Stack
- **MERN Stack**:
  - **MongoDB**: NoSQL database for storing product, user, and order data.
  - **Express.js**: Backend web application framework for handling API routes.
  - **React.js**: Front-end JavaScript library for building the user interface.
  - **Node.js**: Server-side runtime environment.
- **Other Technologies**:
  - **Vite**: Build tool for setting up the React project.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **Razorpay**: For payment processing.
  - **Firebase**: Used for Google authentication.
  - **Cloudinary**: Cloud-based service for image storage.

## File Structure
- `admin/`: Code for the admin panel.
- `backend/`: Backend code.
  - `config/`: Configuration files (e.g., database connection, tokens).
  - `controllers/`: Logic for handling requests.
  - `middlewares/`: Middleware functions (e.g., authentication).
  - `models/`: Database schemas.
  - `routes/`: API routes.
- `frontend/`: Frontend code.
  - `src/`: Source code for the React app.
    - `assets/`: Static assets like images.
    - `components/`: Reusable React components.
    - `context/`: State management for the application.
    - `pages/`: Individual website pages.
    - `utils/`: Utility functions.
