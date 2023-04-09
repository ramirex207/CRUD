import React from 'react'
import '../sass/NavBar.scss'
import logo from '../assets/nefrocentro-good2.png'

function NavBar() {
    return (
        <div className='navbar' >
            <div className="navbar__circle">
                <img src={logo} alt="" />
            </div>
            <div className="navbar_container">
                <ul className='navbar_container_ul'>

                    <li className='navbar_container_ul_li'>
                        <button className="navbar_container_ul_li_botton op">
                            Inicio 
                        </button>
                    </li>
                    <li className='navbar_container_ul_li'>
                        <button className="navbar_container_ul_li_botton op">
                            Contactenos
                        </button>
                    </li>
                    <li className='navbar_container_ul_li'>
                        <button className='navbar_container_ul_li_botton op'>
                            Quienes Somos
                        </button>
                    </li>
                
                        <li className='navbar_container_ul_li'>
                            <button className='navbar_container_ul_li_botton'>Iniciar Sesion</button>
                        </li>
                        <li className='navbar_container_ul_li'>
                            <button className='navbar_container_ul_li_botton'>Registrarse</button>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar