# Expat Swap Backend

## Features

- RESTful API endpoints for user management (registration, login, get all users)

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT) for authentication
- Other dependencies as listed in `package.json`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14 or newer)
- MongoDB (local or cloud-based with MongoDB Atlas)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Iamswart/expat-backend.git
   cd expat-backend

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Set up environment variables**

   Create a .env file in the root directory of the project and add the following variables:

   ```bash
    NODE_ENV - Specifies the environment in which an application is running
    PORT - The port number on which the server listens.
    MONGO_URI - Connection string for MongoDB database.
    JWT_SECRET - Secret key used to sign JWT tokens for authentication.
    JWT_EXPIRATION - Expiration time for the JWT tokens.
    REFRESH_TOKEN_SECRET - Secret key used to sign refresh tokens.
    REFRESH_TOKEN_EXPIRATION - Expiration time for the refresh tokens.
    REDIS_URL - Connection URL for Redis data store.
    API_KEY - A general API key for accessing third-party services.

  Replace the placeholders with your actual data.

4. **Running the Application**

   ```bash
   npm run local

   The API will be available at http://localhost:3000 .
   ```
