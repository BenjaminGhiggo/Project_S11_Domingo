// src/components/tasks/TasksComponent.jsx
import React from 'react';
import './TasksComponent.scss';

const TasksComponent = () => {
  return (
    <div className="tasks-section">
      <h3 className="tasks-title">Mis Tareas</h3>
      <div className="tasks-list">
        <div className="task-item">Tarea 1 ------- Fecha</div>
        <div className="task-item">Tarea 2 ------- Fecha</div>
      </div>
      <button className="add-task-btn">Añadir Tarea</button>
    </div>
  );
};

export default TasksComponent;
