import React, { Fragment, useState } from 'react';

import { HashLink as Link } from 'react-router-hash-link'; 

import logo from '../../img/logo.jpg';
import menu from '../../img/menu.png';
import close from '../../img/close.png';

import useWindowDimensions from '../../hooks/useDimensions';

export default function Nav() {
    const { width } = useWindowDimensions();

    const [click, setClick] = useState(false);

    const [scroll, setScroll] = useState(0);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    window.addEventListener('scroll', () => {
       setScroll(window.pageYOffset) 
    })

    return (
        <Fragment>
            
            <nav id="nav" className = { scroll && 'sticky' } >
            
            <img className="nlogo" src = { logo } alt="" />

            <div className = { click ? "menu-icon active" : "menu-icon"} onClick={handleClick}>
                { ( width <= 800 ) && <img src = { click ? close : menu } alt=""/> }
            </div>
            
            <ul className = { click ? "active" : "inactive"} id="enlaces-header">
                
                <li><Link smooth to='#' className={closeMenu}>Inicio</Link></li>
                <li><Link smooth to='#Salud' className={closeMenu}>Salud</Link></li>
                <li><Link smooth to='#TablaTurno' className={closeMenu}>Farmacias de Turno</Link></li>
                <li><Link smooth to='#Services' className={closeMenu}>Servicios</Link></li>
            </ul>
            </nav> 

        </Fragment>
    )
}
