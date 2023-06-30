import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { RegisterPage } from "./RegisterPage";

export const LoginPage = () => {
  return (
    <div className="login-container position-absolute top-50 start-50 translate-middle">
      <div className="login-form-1">
        <h3>Ingreso</h3>
        <form>
          <div className="form-group mb-2">
            <input type="text" className="form-control" placeholder="Correo" />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
          <div className="form-group mb-2 pt-3">
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
          <h6 className="pt-3">No tienes cuenta?</h6>
          <Link to={"/auth/register"} className="text-decoration-none">
            Crear Cuenta
          </Link>
        </form>
      </div>
    </div>
  );
};
