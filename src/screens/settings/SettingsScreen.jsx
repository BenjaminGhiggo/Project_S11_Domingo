// src/screens/settings/SettingsScreen.jsx
// import React from 'react';
import ActiveSessionsIcon from '@/assets/icons/active-sessions.svg';
import ChangePasswordIcon from '@/assets/icons/change-password.svg';
import HelpCenterIcon from '@/assets/icons/help-center.svg';
import NotificationsIcon from '@/assets/icons/notifications.svg';
import SettingsImageIcon from '@/assets/icons/settings-image.svg';
import TasksComponent from '../../components/tasks/TasksComponent';
import './SettingsScreen.scss';

const SettingsScreen = () => {
  return (
    <div className="settings-container">
      <div className="settings-main">
        <h2 className="settings-title">Settings</h2>
        <div className="settings-content">
          <div className="settings-section">
            <div className="settings-button">
              <img src={NotificationsIcon} alt="Notifications" className="settings-icon" />
              <span>Notificaciones</span>
            </div>
            <div className="settings-button">
              <img src={ActiveSessionsIcon} alt="Active Sessions" className="settings-icon" />
              <span>Sesiones Activas</span>
            </div>
            <div className="settings-button">
              <img src={HelpCenterIcon} alt="Help Center" className="settings-icon" />
              <span>Centro de Ayuda</span>
            </div>
            <div className="settings-button">
              <img src={ChangePasswordIcon} alt="Change Password" className="settings-icon" />
              <span>Cambiar Contraseña</span>
            </div>
          </div>
          <div className="settings-image">
            <img src={SettingsImageIcon} alt="Settings" />
          </div>
        </div>
      </div>
      <TasksComponent />
    </div>
  );
};

export default SettingsScreen;
