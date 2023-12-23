# API's

### Authentication

- **POST /api/users/register**
  - Create a new user account.
  - Request body:
    - `username` (username of the user)
    - `password` (password of the user)
   
- **POST /api/users/login**
  - Log in and obtain a JWT token.
  - Request body:
    - `username` (username of the user)
    - `password` (password of the user)

### Blog posts

- **GET /api/blogs/get-all**
  - Retrieve a list of blogs.
  - Headers:
    - `Authorization: Bearer your_access_token_here`
  
- **POST /api/blogs/add**
  - Create a new blog.
  - Request body:
    - `userId` (ID of the user)
    - `title` (Title of the blog)
    - `body` (Details of the blog)
  - Headers:
    - `Authorization: Bearer your_access_token_here`
   
- **GET /api/blogs/search?search=:string****
  - Search for a blog by title or body.
  - Headers:
    - `Authorization: Bearer your_access_token_here`
  
- **PUT /api/blogs/edit?id=:id**
  - Update an existing blog by its ID.
  - Request parameter: `id` (ID of the blog)
  - Request body:
    - `id` (ID of the task)
    - `title` (Updated title of the task)
    - `body` (Updated details of the body)
  - Headers:
    - `Authorization: Bearer your_access_token_here`

- **DELETE /api/blogs/remove?id=:id**
  - Delete a blog by its ID.
  - Request parameter: `id` (ID of the blog)
  - Headers:
    - `Authorization: Bearer your_access_token_here`

### News Articles

- **POST /api/news/add-from-API**
  - Fetch news from thirtd-party API and add it to our database.

- **GET /api/news/get-all**
  - Retrieve a list of news.
  
- **POST /api/news/add**
  - Create a new news.
  - Request body:
    (author, title, description, content, url, urlToImage, publishedAt, source, category)
   
- **GET /api/news/search?search=:string****
  - Search for a news by title or body.
  
- **PUT /api/news/edit?id=:id**
  - Update an existing news by its ID.
  - Request parameter: `id` (ID of the news)
  - Request body:
    (author, title, description, content, url, urlToImage, publishedAt, source, category)
    can also add category


- **DELETE /api/news/remove?id=:id**
  - Delete a blog by its ID.
  - Request parameter: `id` (ID of the news)

## Technologies Used

The backend of the project utilizes the following technologies:

- **Node.js with Express:** Provides the server-side framework for building RESTful APIs.

- **JWT (JSON Web Tokens):** Ensures secure user authentication.

- **Database:**
  - **MongoDB:** Stores blog posts, news and user data.
 
### Project Configuration

Before you can run this project, you need to set up some environment variables. Create an `.env` file in the project root and add the following variables:

- `PORT`: 8000
- `MONGO_URI`: your_mongodb_connection_uri
- `ACCESS_TOKEN_SECRET`: your_secret_key_for_jwt

## Usage

1. Run `git clone https://github.com/bobbyrepo/neoma-backend` to clone the repository to your local machine.
2. Run `npm install` to install the project dependencies.
3. Run `nodemon server.js` to start the development server.
4. Open your browser and visit `http://localhost:PORT`.
