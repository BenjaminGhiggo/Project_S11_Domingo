// import React from 'react';
import TutoringImageIcon from '@/assets/icons/tutoring-image.svg';
import TasksComponent from '../../components/tasks/TasksComponent';
import './TutoringScreen.scss';



const TutoringScreen = () => {
  const tutoringOptions = [
    { name: 'Centros de Estudiantes' },
    { name: 'Programa de Ayudantía' },
    { name: 'Alumnos voluntarios' },
    { name: 'Videos Recomendados por Alumnos Anteriores' },
  ];

  return (
    <div className="tutoring-container">
      <div className="tutoring-main">
        <h2 className="tutoring-title">Tutoría</h2>
        <div className="tutoring-list">
          {tutoringOptions.map((option, index) => (
            <div className="tutoring-item" key={index}>
              <span>{option.name}</span>
              <span>▼</span>
            </div>
          ))}
        </div>

          <div className='tutoring-icon'>
            <img src={TutoringImageIcon} alt="Tutoring" />
          </div>


      </div>
      <TasksComponent />
    </div>
  );
};

export default TutoringScreen;
