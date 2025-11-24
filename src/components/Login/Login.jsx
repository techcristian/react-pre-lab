import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useState } from "react";
import "./Login.css"

export const Login = () => {
  const [userForm, setUserForm] = useState({ name: "", password: "" });
  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to={"alta-productos"} />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = login(userForm.name, userForm.password);
    if (success) {
      navigate("alta-producto");
    } else {
      alert("Credenciales incorrectas");
      setUserForm({ name: "", password: "" });
    }
  };

  return (
    <section className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>

        <div className="input-login">
          <input
            type="text"
            name="name"
            value={userForm.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre aquí..."
            required
          />
        </div>

        <div className="input">
          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña aquí..."
            required
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  );
};
