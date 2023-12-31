# User Posts API

This is a simple CRUD (Create, Read, Update, Delete) API for managing user posts. It is built using Express.js and Prisma for interacting with the database. The API includes authentication middleware to ensure that only authenticated users can perform certain actions.

## Prerequisites

Before you start, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure you have a MongoDB server running)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/crud-api-with-prisma.git
   ```

2. Install dependencies:

   ```bash
   cd crud-api-with-prisma
   npm install
   ```
-    npm install will install the required dependencies specified in the package.json file.

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```

## Running the API

Start the API in development mode using:

```bash
npm run dev
```

The API will be accessible at `http://localhost:3000`.

## API Endpoints

### 1. User Authentication

#### Signup

- **Endpoint:** `POST /api/signup`
- **Description:** Register a new user.
- **Body:**
  - `email` (string): User's email address.
  - `password` (string): User's password.

#### Login

- **Endpoint:** `POST /api/login`
- **Description:** Authenticate and log in a user.
- **Body:**
  - `email` (string): User's email address.
  - `password` (string): User's password.

#### Logout

- **Endpoint:** `GET /api/logout`
- **Description:** Log out the authenticated user.

### 2. User Posts

#### Create Post

- **Endpoint:** `POST /api/post/create`
- **Description:** Create a new post for the authenticated user.
- **Authorization:** Requires user to be logged in.
- **Body:**
  - `title` (string): Post title.
  - `content` (string): Post content.

#### Delete Post

- **Endpoint:** `DELETE /api/post/delete/:id`
- **Description:** Delete a post by its ID.
- **Authorization:** Requires user to be logged in.

#### Get All Posts

- **Endpoint:** `GET /api/post/getAll`
- **Description:** Get all posts.

#### Update Post

- **Endpoint:** `PUT /api/post/update/:id`
- **Description:** Update a post by its ID.
- **Authorization:** Requires user to be logged in.
- **Body:**
  - `title` (string): New post title.
  - `content` (string): New post content.


## API Documentation

Explore the API using Postman. View the [Postman API Documentation](https://documenter.getpostman.com/view/29531574/2s9Ykoe2bM) for detailed information on available endpoints and usage.
