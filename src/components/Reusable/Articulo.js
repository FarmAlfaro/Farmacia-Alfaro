import React, { Fragment } from 'react';

export default function Articulo({ icon, titulo, parrafo}) {
    
    return (
        <Fragment>

            <div className="articulo" data-aos="zoom-in-right" data-aos-duration="1500">
                <i className={icon}></i>
                <h3>{titulo}</h3>
                <p>{parrafo}</p>     
            </div>

        </Fragment>
    )
}
