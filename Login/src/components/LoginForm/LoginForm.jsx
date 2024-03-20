import React from 'react'; 
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className = "wrapper">
            <form action="">
                <h1>Iniciar sesion</h1>
                <div className="input-box">
                    <input type="text" placeholder= 'Usuario' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder= 'Contraseña' required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" /> Recordar cuenta </label>
                    <a href="#"> Olvide mi contraseña </a>
                </div>
                <button type="submit">Iniciar sesion</button>
                <div className="register-link">
                    <p>¿No tienes una cuenta?<a href="C:\Users\loij0\Documents\Integradora\UTTTfood\Login\src\Register.js" >Registrate</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm