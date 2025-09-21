# AI-Powered MERN E-commerce Website

## Project Overview
This project presents an AI-powered e-commerce platform built on the MERN stack, distinguished by its core feature: a voice-activated AI assistant. This assistant streamlines user navigation and product discovery, providing a unique and intuitive shopping experience. The platform also includes a robust admin panel for comprehensive product and order management, secure user authentication, and an integrated payment gateway, ensuring a complete and professional e-commerce solution.

## Core Features
- **AI Assistant**: Enables hands-free site navigation and product search via voice commands.
- **User Authentication**: Implements secure user access through email/password and Google authentication.
- **Admin Panel**: A centralized dashboard for administrators to manage inventory, track orders, and update fulfillment statuses.
- **Product Management**: Provides full control over product listings, allowing admins to add, delete, and highlight items as "best sellers."
- **Product Filtering & Search**: Facilitates efficient product discovery through category and sub-category filters, as well as a dynamic search bar.
- **Shopping Cart**: A fully functional system for managing product selections, quantities, and removal.
- **Payment Gateway**: Utilizes Razorpay to process secure online transactions, including UPI payments.
- **Order Tracking**: Offers users real-time visibility into their order status.
- **Responsive Design**: Ensures a consistent and optimized user experience across all devices.

## Technology Stack
- **MERN Stack**:
  - **MongoDB**: NoSQL database for flexible data storage.
  - **Express.js**: Backend framework for building RESTful APIs.
  - **React.js**: Frontend library for developing a dynamic user interface.
  - **Node.js**: Server-side runtime environment for executing backend logic.
- **Other Technologies**:
  - **Vite**: A modern build tool for a fast development experience.
  - **Tailwind CSS**: A utility-first CSS framework for efficient styling.
  - **Razorpay**: The chosen platform for secure payment processing.
  - **Firebase**: Integrated for streamlined Google authentication.
  - **Cloudinary**: A cloud-based service for managing and optimizing images..

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

## Deployment
The platform is professionally deployed on Render, with separate URLs for the user-facing and administrative interfaces, ensuring scalable and reliable access.

- **Frontend**: https://ai-powered-e-commerce-frontendone.onrender.com
- **Admin Panel**: https://ai-powered-e-commerce-admin.onrender.com
