import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import './CoursesScreen.scss';

const CoursesScreen = () => {
  const data1 = [{ value: 80 }, { value: 20 }];
  const data2 = [{ value: 50 }, { value: 50 }];
  const data3 = [{ value: 40 }, { value: 60 }];

  const COLORS1 = ['#ff9800', '#e0e0e0'];
  const COLORS2 = ['#03a9f4', '#e0e0e0'];
  const COLORS3 = ['#4caf50', '#e0e0e0'];

  const courses = [
    { name: 'Curso 1', period: '24-1' },
    { name: 'Curso 2', period: '24-1' },
    { name: 'Curso 3', period: '24-1' },
  ];

  return (
    <div className="courses-container">
      <div className="courses-main">
        <h2 className="courses-title">Mis Cursos</h2>
        <div className="performance-metrics">
          <div className="metric-card">
            <PieChart width={100} height={100}>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={40}
                innerRadius={20}
                dataKey="value"
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="metric-info">
              <h3 className="metric-title">Rendimiento General</h3>
              <p>80%</p> {/* Añadir el porcentaje aquí */}
            </div>
          </div>
          <div className="metric-card">
            <PieChart width={100} height={100}>
              <Pie
                data={data2}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={40}
                innerRadius={20}
                dataKey="value"
              >
                {data2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="metric-info">
              <h3 className="metric-title">Rendimiento PC1</h3>
              <p>50%</p> {/* Añadir el porcentaje aquí */}
            </div>
          </div>
          <div className="metric-card">
            <PieChart width={100} height={100}>
              <Pie
                data={data3}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={40}
                innerRadius={20}
                dataKey="value"
              >
                {data3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="metric-info">
              <h3 className="metric-title">Rendimiento PC2</h3>
              <p>40%</p> {/* Añadir el porcentaje aquí */}
            </div>
          </div>
        </div>
        <h3 className="courses-subtitle">Cursos</h3>
        <div className="courses-list">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <span className="course-name">{course.name}</span>
              <span className="course-period">{course.period}</span>
              <span className="course-toggle">▼</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tasks-section">
        <h3 className="tasks-title">Mis Tareas</h3>
        <div className="tasks-list">
          <div className="task-item">Tarea 1 ------- Fecha</div>
          <div className="task-item">Tarea 2 ------- Fecha</div>
        </div>
        <button className="add-task-btn">Añadir Tarea</button>
      </div>
    </div>
  );
};

export default CoursesScreen;
