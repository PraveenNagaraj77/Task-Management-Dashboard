import React from 'react';
import TaskBoard from './components/TaskBoard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>Task Management Dashboard</h1>
      </header>
      <main className="container my-4">
        <TaskBoard />
      </main>
      <footer className="bg-light text-center py-3 mt-auto">
        <p className="mb-0">&copy; 2025 Task Manager. Developed by Praveen.</p>
      </footer>
    </div>
  );
}

export default App;
