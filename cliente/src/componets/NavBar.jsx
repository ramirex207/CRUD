import React from 'react'
import '../sass/NavBar.scss'
import logo from '../assets/nefrocentro-good2.png'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import {Login} from './Login'
import {Register} from './Register'
import {About} from './About'
import {Contact} from './Contact'
import {Home} from './Home'



function NavBar() {
    return (
        <BrowserRouter>
        
        <div className='navbar' >
            <div className="navbar__circle">
                <img src={logo} alt="" />
            </div>
            <div className="navbar_container">
                <ul className='navbar_container_ul'>

                    <li className='navbar_container_ul_li'>
                        <NavLink to = '/'>
                            <button className="navbar_container_ul_li_botton op">
                                Inicio 
                            </button>
                        </NavLink>

                    </li>
                    <li className='navbar_container_ul_li'>
                        <NavLink to = '/Contact'>
                        <button className="navbar_container_ul_li_botton op">
                            Contactenos
                        </button>
                        </NavLink>
                    </li>
                    <li className='navbar_container_ul_li'>
                        <NavLink to = '/About'>
                        <button className='navbar_container_ul_li_botton op'>
                            Quienes Somos
                        </button>
                        </NavLink>
                    </li>
                
                    <li className='navbar_container_ul_li'>
                        <NavLink to = '/Login'>
                        <button className='navbar_container_ul_li_botton'>Iniciar Sesion</button>
                        </NavLink>
                    </li>

                    <li className='navbar_container_ul_li'>
                        <NavLink to = '/Register'>
                        <button className='navbar_container_ul_li_botton'>Registrarse</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>


        </Routes>

        
        </BrowserRouter>
        
    )
}

export default NavBar