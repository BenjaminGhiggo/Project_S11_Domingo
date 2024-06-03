import { signOut } from 'firebase/auth';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  MdOutlineClose,
  MdOutlineLogout,
  MdOutlineMenu,
  MdOutlineSettings,
} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase'; // Actualiza la ruta a config/firebase
import { SidebarContext } from '../../context/SidebarContext';
import './Sidebar.scss';

// Importa los iconos correctamente usando Vite
import ChatbotIcon from '@/assets/icons/chatbot.svg';
import CoursesIcon from '@/assets/icons/courses.svg';
import HomeIcon from '@/assets/icons/home.svg';
import LibraryIcon from '@/assets/icons/library.svg';
import ProjectsIcon from '@/assets/icons/projects.svg';
import ScholarshipsIcon from '@/assets/icons/scholarships.svg';
import SpecializationIcon from '@/assets/icons/specialization.svg';
import TutoringIcon from '@/assets/icons/tutoring.svg';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleClickOutside = useCallback((event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target) && event.target.className !== 'sidebar-open-btn') {
      closeSidebar();
    }
  }, [closeSidebar]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <button className="sidebar-open-btn" onClick={openSidebar}>
        <MdOutlineMenu size={24} />
      </button>
      <nav className={`sidebar ${isSidebarOpen ? 'sidebar-show' : ''}`} ref={navbarRef}>
        <div className="sidebar-top">
          <div className="sidebar-user">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="User Avatar" className="sidebar-user-avatar" />
            ) : (
              <div className="sidebar-user-avatar-placeholder">U</div>
            )}
            <span className="sidebar-user-name">{user?.displayName || 'Usuario'}</span>
          </div>
          <button className="sidebar-close-btn" onClick={closeSidebar}>
            <MdOutlineClose size={24} />
          </button>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  <img src={HomeIcon} alt="Home Icon" className="menu-link-icon" />
                  <span className="menu-link-text">Menu</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/courses" className="menu-link">
                  <img src={CoursesIcon} alt="Courses Icon" className="menu-link-icon" />
                  <span className="menu-link-text">Mis cursos</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/chatbot" className="menu-link">
                  <img src={ChatbotIcon} alt="Chatbot Icon" className="menu-link-icon" />
                  <span className="menu-link-text">ChatBot</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/tutoring" className="menu-link">
                  <img src={TutoringIcon} alt="Tutoring Icon" className="menu-link-icon" />
                  <span className="menu-link-text">Tutoria</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/library" className="menu-link">
                  <img src={LibraryIcon} alt="Library Icon" className="menu-link-icon" />
                  <span className="menu-link-text">Biblioteca</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/specialization" className="menu-link">
                  <img src={SpecializationIcon} alt="Specialization Icon" className="menu-link-icon" />
                  <span className="menu-link-text">Malla y Especialización</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/scholarships" className="menu-link">
                  <img src={ScholarshipsIcon} alt="Scholarships Icon" className="menu-link-icon" />
                  <span className="menu-link-text">Info de Becas</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/projects" className="menu-link">
                  <img src={ProjectsIcon} alt="Projects Icon" className="menu-link-icon" />
                  <span className="menu-link-text">Proyectos</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu sidebar-menu2">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/settings" className="menu-link">
                  <MdOutlineSettings size={20} className="menu-link-icon" />
                  <span className="menu-link-text">Settings</span>
                </Link>
              </li>
              <li className="menu-item" onClick={handleLogout}>
                <span className="menu-link">
                  <MdOutlineLogout size={20} className="menu-link-icon" />
                  <span className="menu-link-text">Logout</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
