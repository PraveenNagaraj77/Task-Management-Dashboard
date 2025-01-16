# Task Management Dashboard

## Project Overview

The **Task Management Dashboard** is a web application built with **React** and **Bootstrap** that provides a simple interface for managing tasks. It uses a **Kanban-style board** to display tasks with three primary columns: **To Do**, **In Progress**, and **Done**. Users can add, update, and delete tasks, as well as manage task statuses through drag-and-drop functionality.

### Features:
- **Kanban-style Board**: Tasks are displayed in columns based on their current status.
- **Drag-and-Drop**: Tasks can be moved between columns to change their status.
- **Task Management**: Users can add new tasks, edit existing ones, and delete tasks.
- **Responsive Design**: The layout is optimized for different screen sizes, providing a seamless experience on both desktop and mobile.

---

###Screenshot : 

![image](https://github.com/user-attachments/assets/9a9269d3-85cd-4510-9c90-262bb9c1b0c1)


## Components Overview

The project is structured into the following main components:

### 1. **App.js**
   - This is the main entry point of the application, rendering the layout and the task management system.
   - It contains a header, the main content area (where the task board is displayed), and a footer.

### 2. **TaskBoard.js**
   - The core component of the application where tasks are managed and displayed.
   - It manages state for the tasks, handles fetching of tasks from the API, and is responsible for passing data down to individual task columns and cards.
   - It also handles the logic for drag-and-drop functionality, enabling tasks to move between the columns.

### 3. **TaskColumn.js**
   - Represents a single column in the Kanban board (e.g., **To Do**, **In Progress**, **Done**).
   - It takes in a list of tasks for a particular status and renders each task in the column.
   - It also handles the drag-and-drop functionality within the column by allowing tasks to be dropped.

### 4. **TaskCard.js**
   - Represents an individual task in the Kanban board.
   - Each card displays the task title, description, and a delete button.
   - The component is draggable, enabling it to be moved between columns when the task status is updated.

### 5. **AddTaskModal.js**
   - A modal component for adding a new task.
   - Users can enter the title, description, and select the task's status (To Do, In Progress, Done).
   - After filling in the details, the task can be saved and will appear in the relevant column.

---

## API Endpoints

The **Task Management Dashboard** uses a mock REST API for managing tasks. The following endpoints are available:

### 1. **GET /tasks**
   - Fetches a list of all tasks.
   - **Response**:
     ```json
     [
       {
         "id": "1",
         "title": "Task 1: Design Database Schema",
         "description": "Design the schema for the task management database.",
         "status": "To Do"
       },
       ...
     ]
     ```

### 2. **POST /tasks**
   - Adds a new task to the task list.
   - **Request Body**:
     ```json
     {
       "title": "Task Title",
       "description": "Task Description",
       "status": "To Do"
     }
     ```
   - **Response**:
     ```json
     {
       "id": "12",
       "title": "Task Title",
       "description": "Task Description",
       "status": "To Do"
     }
     ```

### 3. **PUT /tasks/:id**
   - Updates the details of an existing task (e.g., changes its status).
   - **Request Body**:
     ```json
     {
       "title": "Updated Task Title",
       "description": "Updated Task Description",
       "status": "In Progress"
     }
     ```
   - **Response**:
     ```json
     {
       "id": "1",
       "title": "Updated Task Title",
       "description": "Updated Task Description",
       "status": "In Progress"
     }
     ```

### 4. **DELETE /tasks/:id**
   - Deletes a task by its ID.
   - **Response**:
     ```json
     {
       "message": "Task deleted successfully."
     }
     ```

---

## Setup and Installation

To run the project locally, follow these steps:

## How to Run the Application

Follow the steps below to set up and run the project:

```bash
# 1. Clone the repository
git clone https://github.com/PraveenNagaraj77/Task-Management-Dashboard.git
cd Task-Management-Dashboard

# 2. Navigate to the client directory
cd client

# 3. Start the JSON server
# (Ensure json-server is installed globally using: npm install -g json-server)
json-server --watch db.json --port 5000

# 4. Start the React development server
npm run dev
