import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; 
const TaskCard = ({ task, onDragStart, onDelete }) => {
  return (
    <div
      className="card mb-2 shadow-sm"
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="card-title">{task.title}</h6>
          <p className="card-text text-muted">{task.description}</p>
        </div>
        <button
          className="btn btn-link p-0" 
          onClick={onDelete} 
        >
          <FaTrashAlt
            style={{ fontSize: '16px', color: 'red' }} 
          />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
