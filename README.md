IN THIS CODE WE ARE PASSING TOKEN IN AUTHORIZATION AND IN AKSHAT NAMASTE NODE JS WE HAVE ATTACHED TOKEN IN LOGIN
//IN THIS CODE IF WE FETCH /USER THEN  WE HAVE TO PASS TOKEN IN HEADER VIA Authorization :  <YOUR TOKEN>  BUT IN AKSHAT WE PASSING TOKEN IN LOGIN ITSELF IN SESSION
//THIS IS THE NOT COMPLETE CODE WE HAVE TO ASSIGN TASK BUT WE HAVE CREATED ONLY CRUD WE WILL COMPLETE THIS ASAP


1. Admin login and add task or assign task to user 

2. User Authentication 
    Registration: 
      Endpoint: POST /auth/register 
Allow users to register with an email and password. 
Validate email format and ensure the password is strong (e.g., minimum 8 characters, at least one number and special character). 
Store the password securely using hashing (e.g., bcrypt). 
  Login: 
     Endpoint: POST /auth/login 
Authenticate users using email and password. 
Upon successful authentication, return a JWT token. 
      JWT Token: 
Use JWT for user authentication.
The token should expire after a set period (e.g., 1 hour). 
Protect certain routes by requiring a valid token in the Authorization header.

4. Task Management 
        Task Model: 
        A task should belong to a user and have the following fields: 
            id , title, description, status, userId
        Endpoints: 
        GET /tasks: Retrieve all tasks for the authenticated user. 

        GET /tasks/:id: Retrieve a specific task for the authenticated user by ID. 

        POST /tasks: Create a new task for the authenticated user. 

        PUT /tasks/:id: Update a task (title, description, or status) for the authenticated user. 

        DELETE /tasks/:id: Delete a task by ID for the authenticated user. 

5. Middleware: 
    Implement middleware to protect the /tasks routes. Ensure only authenticated users with a valid JWT token can access these routes. 


6. Database: 
    Use MongoDB (with Mongoose) or PostgreSQL or Mysql to persist user and task data. 


7. Extra:  

    Implement different user roles (e.g., admin,  user) with varying permissions for the tasks. 
    Add a priority field (e.g., low, medium, high) to tasks. 

8. Error Handling: 
    Implement proper error handling for invalid requests, such as incorrect passwords, expired tokens, or unauthorized access. 

    Implement email verification during the registration process. 

    Add the ability to refresh JWT tokens. 
