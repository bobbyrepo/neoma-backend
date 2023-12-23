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
