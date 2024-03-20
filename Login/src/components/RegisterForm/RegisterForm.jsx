import React from 'react'; 
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
const RegisterForm = () => {
    return (
        <div className = "wrapper">
            <form action="">
                <h1>Registrate</h1>
                <div className="input-box">
                    <input type="text" placeholder= 'Ingresa tu nombre de usuario' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder= 'Contraseña' required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" /> Recordar cuenta </label>
                    <a href="#"> Olvide mi cobtraseña </a>
                </div>
                <button type="submit">Iniciar sesion</button>
                <div className="register-link">
                    <p>¿No tienes una cuenta?<a href="#">Registrate</a></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm