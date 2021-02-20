import React, { Fragment } from 'react';

import Articulo from './Reusable/Articulo';

const ArticulosData = [
    {
        id: 1,
        icon: 'fas fa-carrot',
        titulo: 'Alimentacion',
        parrafo: 'Una dieta saludable ayuda a protegernos de la malnutrición en todas sus formas, así como de las enfermedades no transmisibles, entre ellas la diabetes, las cardiopatías, los accidentes cerebrovasculares y el cáncer.'
    },
    {
        id: 2,
        icon: 'fas fa-running',
        titulo: 'Ejercicio',
        parrafo: 'Hacer ejercicio con regularidad es parte importante de un estilo de vida saludable. Las personas que llevan una vida activa tienen menos probabilidad de enfermarse, por ejemplo padecimientos cronicas tales como la diabetes.'
    },
    {
        id: 3,
        icon: 'fas fa-capsules',
        titulo: 'Medicacion',
        parrafo: 'El uso adecuado de los medicamentos es un factor importantísimo para aliviar los síntomas que se estén padeciendo o curar la enfermedad que se esté sufriendo, además de ser imprescindible para proteger al paciente de reacciones adversas por causa de la toxicidad propia de los medicamentos'
    }
]

export default function Salud() {
    return (
        <Fragment>

        <section className="about-us" id="Salud">
            <div className="contenedor1">
                <h2 className="titulo">Para una vida Sana</h2>
                <div className="contenedor-articulo">           
                { ArticulosData.map((Data) => (<Articulo key={Data.id} {...Data} />))}
                </div>
            </div>
        </section>
            
        </Fragment>
    )
}
