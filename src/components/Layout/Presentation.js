import React, { Fragment } from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import ilustracion1 from '../../img/ilustracion1.svg';

export default function Presentation() {

    let facebook = 'https://www.facebook.com/Farmacia-Alfaro-396360233848425';

    return (
        <Fragment>

            <div className="contenedor space">
                <section className="contenido-header" id="inicio">
                    <section className="textos-header">
                        <h1>Farmacia Alfaro</h1>
                        <p>Llevando bien estar hasta tu hogar</p>
                        <Link className="bcontacto" to={{pathname:facebook}} target="_blank">Contactanos</Link>
                    </section>
                    <img src={ilustracion1} alt="" />
                </section>
            </div>

        </Fragment>
    )
}
