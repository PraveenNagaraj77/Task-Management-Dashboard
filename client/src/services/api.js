import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (taskId, updatedData) =>
  axios.put(`${API_URL}/${taskId}`, updatedData);
export const deleteTask = (taskId) => axios.delete(`${API_URL}/${taskId}`);
