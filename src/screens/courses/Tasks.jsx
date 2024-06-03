import React from 'react';
import './Tasks.scss';

const Tasks = () => {
  return (
    <div className="tasks-section">
      <h3>Mis Tareas</h3>
      <div className="tasks-list">
        <div className="task-item">Tarea 1 ------- Fecha</div>
        <div className="task-item">Tarea 2 ------- Fecha</div>
      </div>
      <button className="add-task-btn">Añadir Tarea</button>
    </div>
  );
};

export default Tasks;
