import React, { Fragment } from 'react';

import ilustracion3 from '../img/ilustracion3.svg';
import Service from './Reusable/Service';

const ServicesData = [
    {
        id: 1,
        icon: "far fa-check-circle",
        service: "Dispensación de medicamentos."
    },
    {
        id: 2,
        icon: "far fa-check-circle",
        service: "Coordinacion con el ministerio de salud"
    },
    {
        id: 3,
        icon: "far fa-check-circle",
        service: "Indicación farmacéutica"
    },
    {
        id: 4,
        icon: "far fa-check-circle",
        service: "Entrega a domicilio"
    },
    {
        id: 5,
        icon: "far fa-check-circle",
        service: "Atención diaria de 7:00 am a 10:00pm"
    }
]

export default function Services() {
    return (
        <Fragment>
            <h2 className="tituloT2">Nuestros Servicios</h2>
            <section className="contenedor1 services" id="Services">
                <img src={ilustracion3} alt="" data-aos="zoom-in-right" data-aos-duration="1500"/>
                <div className="box-skills">
                    {ServicesData.map((Data) => (<Service key={Data.id} {...Data} />))}
                </div>
            </section>
        </Fragment>
    )
}
