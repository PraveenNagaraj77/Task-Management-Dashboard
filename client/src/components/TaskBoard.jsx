import React, { useState, useEffect } from 'react';
import { fetchTasks, addTask, updateTask, deleteTask } from '../services/api';
import TaskColumn from './TaskColumn';
import AddTaskModal from './AddTaskModal';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch tasks when component mounts
    fetchTasks()
      .then((res) => {
        const updatedTasks = res.data.map((task) => ({
          ...task,
          description: task.description || "No description available", 
        }));
        setTasks(updatedTasks); // Update state with tasks
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setTasks([]); 
      });
  }, []);

  const handleAddTask = (newTask) => {
    addTask(newTask)
      .then((res) => {
        const taskWithStatus = { ...res.data, status: newTask.status || 'To Do' };
        setTasks((prevTasks) => [taskWithStatus, ...prevTasks]); // Add new task to the list
      })
      .catch((error) => {
        console.error("Error adding task:", error); 
      });
    setShowModal(false); // Close modal after task is added
  };

  const handleDeleteTask = (taskId) => {
    console.log("Deleting task with ID:", taskId);
    deleteTask(taskId)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };
  

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);

    updateTask(taskId, { status: newStatus }).catch((err) => console.error('Error updating task:', err));
  };

  const getTasksByStatus = (status) => tasks.filter((task) => task.status === status);

  return (
    <div className="container">
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        + Add New Task
      </button>
      <div className="row">
        <TaskColumn
          title="To Do"
          tasks={getTasksByStatus('To Do')}
          onDragStart={handleDragStart}
          onDrop={(e) => handleDrop(e, 'To Do')}
          onDelete={handleDeleteTask}  
        />
        <TaskColumn
          title="In Progress"
          tasks={getTasksByStatus('In Progress')}
          onDragStart={handleDragStart}
          onDrop={(e) => handleDrop(e, 'In Progress')}
          onDelete={handleDeleteTask}  
        />
        <TaskColumn
          title="Done"
          tasks={getTasksByStatus('Done')}
          onDragStart={handleDragStart}
          onDrop={(e) => handleDrop(e, 'Done')}
          onDelete={handleDeleteTask}
        />
      </div>
      <AddTaskModal show={showModal} onClose={() => setShowModal(false)} onSave={handleAddTask} />
    </div>
  );
};

export default TaskBoard;
