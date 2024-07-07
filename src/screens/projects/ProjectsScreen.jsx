// import React from 'react';
import SearchIcon from '@/assets/icons/search.svg';
import UploadIcon from '@/assets/icons/upload.svg';
import TasksComponent from '../../components/tasks/TasksComponent';
import './ProjectsScreen.scss';

const ProjectsScreen = () => {
  const cycles = [
    '1° Ciclo', '2° Ciclo', '3° Ciclo', '4° Ciclo', '5° Ciclo',
    '6° Ciclo', '7° Ciclo', '8° Ciclo', '9° Ciclo', '10° Ciclo',
  ];

  return (
    <div className="projects-container">
      <div className="projects-main">
        <h2 className="projects-title">Proyectos</h2>
        <div className="projects-content">
          <div className="button-section">
            <div className="project-button">
              <img src={UploadIcon} alt="Upload" className="button-icon" />
              <span>Subir</span>
            </div>
            <div className="project-button">
              <img src={SearchIcon} alt="Search" className="button-icon" />
              <span>Buscar</span>
            </div>
          </div>
          <div className="cycles-section">
            {cycles.map((cycle, index) => (
              <div className="cycle-button" key={index}>
                {cycle}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TasksComponent />
    </div>
  );
};

export default ProjectsScreen;
