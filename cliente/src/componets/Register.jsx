import React from 'react'
import '../sass/Register.scss'
import logo from '../assets/nefrocentro-good2.png'
function Register() {
    return (
    <div className="register">
        <div className="register_circle">
                <img className='register_circle_img' src={logo} alt="nefrocentro"/>
        </div>
        
        <h1>Registro de usuario</h1>
        
        <form className='register_form' action="">
            
            <div className="register_form_container">

                <label className='register_form_fila1' htmlFor="rol">Rol</label>
                <select className='register_form_fila2' name="rol" id="rol">
                    <option value="paciente">Paciente</option>
                    <option value="medico">Medico</option>
                    <option value="enfermera">Enfermera</option>
                    <option value="administrador">Administrador</option>
                </select>                
                
                <label className='register_form_fila1' htmlFor="name">Nombre Completo:</label>
                <input className='register_form_fila2' type="text" name="name" id="name" placeholder="Nombre"/>

                <label className='register_form_fila1' htmlFor="lastname">Numero de indentificacion:</label>
                <input className='register_form_fila2' type="text" name="lastname" id="lastname" placeholder="Ci"/>
                
                <label className='register_form_fila1' htmlFor="email">Correo electronico</label>
                <input className='register_form_fila2' type="email" name="email" id="email" placeholder="correo electronico"/>
                
                <label className='register_form_fila1' htmlFor="celphone">Numero de celular</label>
                <input className='register_form_fila2' type="tel" name="celphone" id="celphone" placeholder="celular"/>

                <label className='register_form_fila1' htmlFor="password">Contraseña</label>
                <input className='register_form_fila2' type="password" name="password" id="password" placeholder="contraseña"/>




            
            </div>
        <button className='register_form_button' type="submit">Registrarse</button>
        <a href="">Olvidaste tu contraseña</a>
        </form>
    </div>
    )
}

export {Register}  