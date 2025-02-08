# ToDoList Application

This is a full-stack ToDoList application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

---

## Features
- Add new tasks.
- View all tasks.
- Update task status (completed or not).
- Delete tasks.

---

## API Endpoints

### Base URL: `/api/tasks`

#### 1. **Get All Tasks**
   - **Endpoint**: `GET /api/tasks`
   - **Description**: Retrieves all tasks.

#### 2. **Add a Task**
   - **Endpoint**: `POST /api/tasks`
   - **Description**: Adds a new task to the database.
   - **Body** (JSON):
    
     ```

#### 3. **Update a Task**
   - **Endpoint**: `PATCH /api/tasks/:id`
   - **Description**: Updates the `completed` status of a specific task.
     
     ```

#### 4. **Delete a Task**
   - **Endpoint**: `DELETE /api/tasks/:id`
   - **Description**: Deletes a task by ID.

---

## Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher recommended)
- MongoDB
- npm (comes with Node.js)

---

## Installation and Setup

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ToDoList
   ```

2. Navigate to the backend directory (if applicable):
   ```bash
   cd server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Add the following:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     ```

5. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

---

## Usage

1. Open your browser and visit `http://localhost:5173` to access the application.
2. Perform CRUD operations on tasks using the user interface.

---

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

### Frontend
- React.js (with Vite for development)



