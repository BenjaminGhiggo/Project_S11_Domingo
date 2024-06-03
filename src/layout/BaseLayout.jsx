// src/layout/BaseLayout.jsx
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import { auth } from '../config/firebase';

const BaseLayout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');  // Asegúrate de redirigir a /login en lugar de /signin
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
