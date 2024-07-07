// src/App.jsx
import { useContext, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import { auth } from "./config/firebase"; // Actualizar la ruta
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { ThemeContext } from "./context/ThemeContext";
import BaseLayout from "./layout/BaseLayout";
import Chatbot from "./screens/chatbot/Chatbot";
import CoursesScreen from "./screens/courses/CoursesScreen";
import Dashboard from "./screens/dashboard/DashboardScreen";
import PageNotFound from "./screens/error/PageNotFound";
import Login from "./screens/login/Login";
import ObjectDetection from "./screens/objectDetection/ObjectDetection";
import TutoringScreen from "./screens/tutoring/TutoringScreen"; // Asegúrate de importar TutoringScreen

import LibraryScreen from './screens/library/LibraryScreen';
import ProjectsScreen from './screens/projects/ProjectsScreen';
import ScholarshipsScreen from './screens/scholarships/ScholarshipsScreen';
import SpecializationScreen from './screens/specialization/SpecializationScreen';

import SettingsScreen from './screens/settings/SettingsScreen';


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        if (location.pathname !== "/login") {
          navigate("/login");
        }
      // } else if (!user.email.endsWith("@uni.pe")) {
      //   auth.signOut();
      //   navigate("/login");
      }
    }
  }, [user, loading, navigate, location.pathname]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Routes>
        {!user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path='/library' element={<LibraryScreen/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesScreen />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/deteccion" element={<ObjectDetection />} />
            <Route path="/tutoring" element={<TutoringScreen />} /> {/* Añadir la ruta de tutoría */}
            <Route path="*" element={<PageNotFound />} />
            <Route path='/specialization' element={<SpecializationScreen/>}/>
            <Route path='/scholarships' element={<ScholarshipsScreen/>}/>
            <Route path='/projects' element={<ProjectsScreen/>}/>
            <Route path='/settings' element={<SettingsScreen/>}/>

          </Route>
        )}
      </Routes>

      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
      >
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
        />
      </button>
    </>
  );
}

export default App;
