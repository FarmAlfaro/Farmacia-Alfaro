import React, { Fragment } from 'react';

import { HashLink as Link } from 'react-router-hash-link'; 

import logo from '../../img/logo.jpg';

export default function Footer() {

    let facebook = 'https://www.facebook.com/Farmacia-Alfaro-396360233848425';

    return (
        <Fragment>
            <footer>
                <div className="partFooter">
                    <img src={logo} alt=""/>
                </div>
                <div className="partFooter">
                    <h4>Llamanos </h4>
                        <Link className="a" href="#Services">27220096</Link>
                </div>
                
                <div className="partFooter">
                    <h4>Redes Sociales</h4>
                        <div class="social-media">
                            <Link className="fab" to={{pathname:facebook}} target="_blank" ><i className="fab fa-facebook"></i></Link>
                            <Link className="fab" to={{pathname:facebook}} target="_blank" ><i className="fab fa-instagram"></i></Link>
                            <Link className="fab" to={{pathname:facebook}} target="_blank" ><i className="fab fa-youtube"></i></Link>
                        </div>
                </div>
            </footer>
        </Fragment>
    )
}
