// src/screens/specialization/SpecializationScreen.jsx
// import React from 'react';
import TasksComponent from '../../components/tasks/TasksComponent';
import './SpecializationScreen.scss';

const SpecializationScreen = () => {
  const curriculum = [
    {
      cycle: 'Primer ciclo',
      courses: [
        { code: 'BF101', name: 'FISICA', credits: 5, type: 'O' },
        { code: 'BMA01', name: 'Calculo diferencial', credits: 5, type: 'O' },
        { code: 'BMA03', name: 'Algebra lineal', credits: 4, type: 'O' },
      ],
    },
    {
      cycle: 'Segundo ciclo',
      courses: [
        { code: 'BF101', name: 'FISICA', credits: 5, type: 'O' },
        { code: 'BMA01', name: 'Calculo diferencial', credits: 5, type: 'O' },
        { code: 'BMA03', name: 'Algebra lineal', credits: 4, type: 'O' },
      ],
    },
    // Add more cycles as needed...
  ];

  return (
    <div className="specialization-container">
      <div className="specialization-main">
        <h2 className="specialization-title">Malla y Especialización</h2>
        <div className="curriculum-content">
          {curriculum.map((cycle, index) => (
            <div className="cycle-section" key={index}>
              <div className="cycle-title">{cycle.cycle}</div>
              <table className="cycle-table">
                <thead>
                  <tr>
                    <th>Codigo</th>
                    <th>Curso</th>
                    <th>Creditos</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {cycle.courses.map((course, idx) => (
                    <tr key={idx}>
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                      <td>{course.credits}</td>
                      <td>{course.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <TasksComponent />
    </div>
  );
};

export default SpecializationScreen;
