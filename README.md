# Brillo Sport Backend

## Overview

Brillo Sport Backend serves as the server-side for the Brillo Sport web application, handling user authentication, profile management, sports interests, and networking functionalities for sports enthusiasts. This repository is built with Node.js and Express, and it utilizes MongoDB for data storage.

## Features

- RESTful API endpoints for user management (registration, login, password reset)
- Profile and sports interests management
- Networking features backend logic
- Email notifications for password reset and account verification
- JWT-based authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT) for authentication
- AWS SES for email services
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
   git clone https://github.com/Iamswart/brillo-sport.git
   cd brillo-sport

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
    AWS_ACCESS_KEY - AWS access key for AWS SDK authentication.
    AWS_SECRET_KEY - AWS secret access key for AWS SDK authentication.
    AWS_REGION - The default AWS region for AWS services.
    SES_SENDER_NAME - Name of the sender for AWS SES emails.
    SES_SOURCE_EMAIL - Source email address for AWS SES.
    SES_REPLY_TO_EMAIL - Reply-to email address for AWS SES.
    SQS_QUEUE_URL - URL for AWS SQS queue.
    TERMII_SECRET_KEY - Secret key for Termii SMS service.
    TERMII_SENDER - Sender ID for Termii SMS service.

  Replace the placeholders with your actual data.

4. **Running the Application**

   ```bash
   npm run local

   The API will be available at http://localhost:3000 .
   ```
