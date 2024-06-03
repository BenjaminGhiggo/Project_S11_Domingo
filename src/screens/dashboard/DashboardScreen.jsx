import { MdOutlineEdit } from "react-icons/md";
import { Cell, Pie, PieChart } from "recharts";
import "./DashboardScreen.scss";

const DashboardScreen = () => {
  const data1 = [{ value: 80 }, { value: 20 }];
  const data2 = [{ value: 50 }, { value: 50 }];
  const data3 = [{ value: 40 }, { value: 60 }];

  const COLORS1 = ['#ff9800', '#e0e0e0'];
  const COLORS2 = ['#03a9f4', '#e0e0e0'];
  const COLORS3 = ['#4caf50', '#e0e0e0'];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Mi progreso</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
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
          <div className="stat-info">
            <h3 className="stat-title">Cursos aprobados</h3>
            <p className="stat-value">80%</p>
          </div>
        </div>
        <div className="stat-card">
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
          <div className="stat-info">
            <h3 className="stat-title">Avance total de la carrera</h3>
            <p className="stat-value">50%</p>
          </div>
        </div>
        <div className="stat-card">
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
          <div className="stat-info">
            <h3 className="stat-title">Reseñas brindadas</h3>
            <p className="stat-value">40%</p>
          </div>
        </div>
      </div>
      <h3 className="dashboard-subtitle">Periodos</h3>
      <div className="dashboard-periods">
        <div className="period-card">
          <span className="period-name">1° Ciclo</span>
          <span className="period-value">22-2</span>
          <span className="period-edit">
            <MdOutlineEdit size={18} />
          </span>
        </div>
        <div className="period-card">
          <span className="period-name">2° Ciclo</span>
          <span className="period-value">23-1</span>
          <span className="period-edit">
            <MdOutlineEdit size={18} />
          </span>
        </div>
        <div className="period-card">
          <span className="period-name">3° Ciclo</span>
          <span className="period-value">23-2</span>
          <span className="period-edit">
            <MdOutlineEdit size={18} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
