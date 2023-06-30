import { Link } from "react-router-dom";
import "./login.css";

export const RegisterPage = () => {
  return (
    <div className="container login-container position-absolute top-50 start-50 translate-middle">
      <div className="login-form-2">
        <h3>Registro</h3>
        <form>
          <div className="form-group mb-2">
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
          <div className="form-group mb-2">
            <input type="email" className="form-control" placeholder="Correo" />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>

          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Repita la contraseña"
            />
          </div>
    
          <div className="form-group mb-2">
            <input type="submit" className="btnSubmit" value="Crear cuenta" />
          </div>
          <h6 className="pt-3 text-white">ya tienes cuenta?</h6>
          <Link to={"/auth/login"} className="text-white text-decoration-none fw-bold fs-6">
            Logear
          </Link>
        </form>
      </div>
    </div>
  );
};
