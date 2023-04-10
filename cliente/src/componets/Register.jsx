import React from 'react'
import '../sass/Register.scss'
import axios from 'axios'
import logo from '../assets/nefrocentro-good2.png'
import { useState } from 'react'
function Register() {
    const [user, setUser] = useState({});
    const handleChange = (event) => {
        const{ name, value} = event.target;
        setUser({...user, [name]: value});
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/users', user);
            console.log(response.data);
        
        }catch(error){
            console.error(error);
        }
    };


    return (
        <div className="register__container">
            <div className="register">
                <div className="register_circle">
                    <img className='register_circle_img' src={logo} alt="nefrocentro"/>
                </div>
        
                <h1>Registro de usuario</h1>
        
                <form className='register_form' onSubmit={handleSubmit}>
            
                <div className="register_form_container">

                <label className='register_form_fila1' htmlFor="rol">Rol</label>
                <select className='register_form_fila2' name="rol" id="rol" onChange={handleChange} >
                    <option value="paciente">Paciente</option>
                    <option value="medico">Medico</option>
                    <option value="enfermera">Enfermera</option>
                    <option value="administrador">Administrador</option>
                </select>                
                
                <label className='register_form_fila1' htmlFor="name">Nombre Completo:</label>
                <input className='register_form_fila2' type="text" name="name" id="name" placeholder="Nombre" onChange={handleChange} />

                <label className='register_form_fila1' htmlFor="Ci">Numero de indentificacion:</label>
                <input className='register_form_fila2' type="text" name="Ci" id="Ci" placeholder="Ci" onChange={handleChange} />
                
                <label className='register_form_fila1' htmlFor="email">Correo electronico</label>
                <input className='register_form_fila2' type="email" name="email" id="email" placeholder="correo electronico" onChange={handleChange}/>
                
                <label className='register_form_fila1' htmlFor="celular">Numero de celular</label>
                <input className='register_form_fila2' type="tel" name="celular" id="celular" placeholder="celular" onChange={handleChange}/>

                <label className='register_form_fila1' htmlFor="password">Contraseña</label>
                <input className='register_form_fila2' type="password" name="password" id="password" placeholder="contraseña" onChange={handleChange}/>




            
            </div>
        <button className='register_form_button' type="submit">Registrarse</button>
        <a href="">Olvidaste tu contraseña</a>
        </form>
    </div>
        </div>
    
    )
}

export {Register}  