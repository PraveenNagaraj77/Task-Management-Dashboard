import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, onDragStart, onDrop, onDelete }) => {
  const handleDragOver = (e) => {
    e.preventDefault(); 
  };


  const validTasks = tasks || [];

  return (
    <div className="col-md-4">
      <div
        className="card shadow-sm"
        onDragOver={handleDragOver} 
        onDrop={onDrop} 
      >
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">{title}</h5>
        </div>
        <div className="card-body">
          {validTasks.length > 0 ? (
            validTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDragStart={onDragStart}
                onDelete={() => onDelete(task.id)}
              />
            ))
          ) : (
            <p className="text-muted">No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
