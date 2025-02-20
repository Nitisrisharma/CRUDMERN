Overview

CRUDMERN is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack with MySQL as the database instead of MongoDB. The backend is powered by Node.js and Express.js, while the frontend is built with React.js. The database is managed using MySQL.

Technologies Used

Frontend:

React.js

Axios

React Router DOM


Backend:

Node.js

Express.js

MySQL

CORS

dotenv (for environment variables)

Features

User can create, read, update, and delete records.

Frontend communicates with the backend API via Axios.

RESTful API built using Express.js.

MySQL database for storing data.

Fully responsive UI with Bootstrap.

Installation & Setup

Prerequisites

Make sure you have the following installed on your system:

Node.js

MySQL Server

Git

Clone the Repository

git clone https://github.com/Nitisrisharma/CRUDMERN.git
cd CRUDMERN

Setup Backend

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a .env file in the backend directory and add the following:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=crudmern
PORT=5000

Start the MySQL server and create the database:

CREATE DATABASE crudmern;

Start the backend server:

node server.js

The backend should now be running on http://localhost:5000.

Setup Frontend

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

Start the frontend development server:

npm start

The frontend should now be running on http://localhost:3000.

API Endpoints

Method

Endpoint

Description

GET

/users

Fetch all users

POST

/users

Create a new user

GET

/users/:id

Get a single user by ID

PUT

/users/:id

Update user details

DELETE

/users/:id

Delete a user


Contributing

Feel free to fork this repository and submit pull requests.

License

This project is licensed under the MIT License.

