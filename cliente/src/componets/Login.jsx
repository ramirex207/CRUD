import React from 'react'
import '../sass/Login.scss'
import logo from '../assets/nefrocentro-good2.png'
function Login() {
    return (
    <div className="login">
        <div className="login_circle">
                <img className='login_circle_img' src={logo} alt="nefrocentro"/>
        </div>
        
        <h1>Login</h1>
        
        <form className='login_form' action="">
            
            <div className="login_form_container">
                <label className='login_form_fila1' htmlFor="email">correo electronico</label>
                <input className='login_form_fila2' type="email" name="email" id="email" placeholder="correo electronico"/>
                <label className='login_form_fila1' htmlFor="password">contraseña</label>
                <input className='login_form_fila2' type="password" name="password" id="password" placeholder="contraseña"/>
            </div>
        <button className='login_form_button' type="submit">Iniciar sesion</button>
        <button className='login_form_button' type="submit">Registrarse</button>
        <a href="">Olvidaste tu contraseña</a>
        </form>
    </div>
    )
}

export {Login}  