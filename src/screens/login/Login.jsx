// src/screens/Login.jsx
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icons/google-icon.svg"; // Ruta corregida
import logo from "../../assets/logo.svg"; // Ruta corregida
import { auth, provider } from "../../config/firebase";
import "./Login.scss";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setError(null); // Restablecer el estado de error antes de intentar iniciar sesión
    try {
      const result = await signInWithPopup(auth, provider);
      // const email = result.user.email;
      // if (email.endsWith("@uni.pe")) {
      //   navigate("/");
      // } else {
      //   setError("Solo se permite el acceso a cuentas con el dominio @uni.pe");
      //   await auth.signOut();
      // }
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
      setError("Error al iniciar sesión con Google");
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="Unipath Logo" />
      </div>
      <h2 className="login-title">Log in</h2>
      <button onClick={signInWithGoogle} className="google-login-btn">
        <img src={googleIcon} alt="Google Icon" className="icon" />
        Continue with Google
      </button>
      {error && <p className="error-message">{error}</p>}
      <p className="login-footer">
        &quot;Mejora tu desempeño académico con esta plataforma&quot;
      </p>
    </div>
  );
};

export default Login;
