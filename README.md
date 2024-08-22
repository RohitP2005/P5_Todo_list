# To-Do List Application

This project is a full-stack to-do list application built using **React** for the frontend, **Node.js** with **Express** for the backend, and **Neon DB** as the PostgreSQL database. The application allows users to create, edit, delete, and mark tasks as complete.

## Features

- **Task Management**: Users can create, update, delete, and mark tasks as completed.
- **Persistent Data Storage**: Tasks are stored persistently in a PostgreSQL database powered by Neon DB.
- **Responsive Design**: The application is mobile-friendly and adjusts to different screen sizes.
- **Real-time Updates**: Task list updates in real-time using REST API calls.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Neon DB)
- **Version Control**: Git

## Installation

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js (v14+)
- PostgreSQL (Neon DB account)
- Git

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/todo-list-react-node.git
    cd todo-list-react-node
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the `backend` directory and add the following variables:
    ```bash
    PORT=5000
    DATABASE_URL=your_neon_db_postgres_url
    ```

5. **Set up the PostgreSQL database**:
    - Sign up for a Neon DB account and create a PostgreSQL database.
    - Use a database management tool like `pgAdmin` or the Neon dashboard to run the SQL schema and initialize the required tables (e.g., `tasks`).

6. **Run the backend server**:
    ```bash
    cd backend
    npm start
    ```

7. **Run the React frontend**:
    Open a new terminal, and run:
    ```bash
    cd frontend
    npm start
    ```

8. **View the app**:
    Visit `http://localhost:3000` in your browser to interact with the to-do list application.

## Project Structure

```plaintext
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   ├── .env
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   ├── public
│   ├── .env
│   └── package.json
└── README.md
