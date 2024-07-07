// src/screens/library/LibraryScreen.jsx
// import React from 'react';
import DatabaseIcon from '@/assets/icons/database.svg';
import StudentReading from '@/assets/icons/student-reading.svg'; // Add the path to your SVG
import TasksComponent from '../../components/tasks/TasksComponent';
import './LibraryScreen.scss';

const LibraryScreen = () => {
  return (
    <div className="library-container">
      <div className="library-main">
        <h2 className="library-title">Biblioteca</h2>
        <div className="library-content">
          <img src={StudentReading} alt="Student Reading" className="library-image" />
          <div className="database-button">
            <img src={DatabaseIcon} alt="Database Icon" className="database-icon" />
            <span>Base de datos</span>
          </div>
        </div>
      </div>
      <TasksComponent />
    </div>
  );
};

export default LibraryScreen;
