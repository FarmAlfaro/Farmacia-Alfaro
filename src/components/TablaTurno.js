import React from 'react';

import CardsTt from './Reusable/CardsTt';

const CardsData = [
    {
        mes: "Marzo",
        turno: {
            s1: "01 al 07",
            s2: "08 al 14",
            s3: "15 al 21",
            s4: "22 al 28"
        },
        farmacias: {
            s1: "FARMA 17 | A & L | LA CLINICA",
            s2: "GABRIELA | M & L | SANTIS ESPIRITUS Nº2",
            s3: "MILENIUM | EL DESCUENTO | ALFARO",
            s4: "BELEN | IRELA | SHALOM"
        }

    },
    {
        mes: "Abril",
        turno: {
            s1: "29 MARZO al 04 ABRIL",
            s2: "05 al 11",
            s3: "12 al 18",
            s4: "19 al 25"
        },
        farmacias: {
            s1: "JERUSALEN Nº2 | FARMACENTER | LA MERCED",
            s2: "SANTA MARIA | REGINA | YIREH",
            s3: "INMACULADA CONCEPCION | EL AHORRO | GUADALUPE Nº2",
            s4: "SOL,SOMOTO | MADRIZ Nº1 | SANTA LUCIA"
        }
    },
    {
        mes: "Mayo",
        turno: {
            s1: "26 ABRIL al 02 MAYO",
            s2: "03 al 09",
            s3: "10 al 16",
            s4: "17 al 23",
            s5: "24 al 30"
        },
        farmacias: {
            s1: "JERUSALEN Nº1 | EL ABUELO | SAN JOSE",
            s2: "KAREL | MADRIZ Nº2 | CELESTIAL",
            s3: "JENNY | DR. GERRERO | FARMAMEDICAL",
            s4: "CELESTIAL | LA BOTICA | SAN FRANCISCO",
            s5: "YAMILETH | SANTANDER | DIVINO NIÑO"
        }
        
    },
    {
        mes: "Junio",
        turno: {
            s1: "31 MAYO al 06 JUNIO",
            s2: "07 al 13",
            s3: "14 al 20",
            s4: "21 al 27"
        },
        farmacias: {
            s1: "SERVI FARMA | MI ESPERANZA | ECONOFAR",
            s2: "LA CENTRAL | MI FAMILIA | SARAHI",
            s3: "ALTAMIRANO | FARMA 17 | A & L",
            s4: "LA CLINICA | GABRIELA | M & L"
        }
    },
    {
        mes: "Julio",
        turno: {
            s1: "28 JUNIO al 04 JULIO",
            s2: "05 al 11",
            s3: "12 al 18",
            s4: "19 al 25"
        },
        farmacias: {
            s1: "SANTIS ESPIRITUS Nº2 | MILENIUM | EL DESCUENTO",
            s2: "ALFARO | BELEN | IRELA",
            s3: "SHALOM | JERUSALEM Nº2 | FARMACENTER",
            s4: "LA MERCED | SANTA MARIA | REGINA"
        }
    },
    {
        mes: "Agosto",
        turno: {
            s1: "26 JULIO al 01 AGOSTO",
            s2: "02 al 08",
            s3: "09 al 15",
            s4: "16 al 22"
        },
        farmacias: {
            s1: "YIREH | INMACULADA CONCEPCION | EL AHORRO",
            s2: "GUADALUPE Nº2 | SOL,SOMOTO | MADRIZ Nº1",
            s3: "SANTA LUCIA | JERUSALEM Nº1 | EL ABUELO",
            s4: "SAN JOSE | KAREL | MADRIZ Nº2"
        }
    }
]

export default function TablaTurno() {
    return (
        <>

            <h2 className="tituloT">Farmacia de Turno</h2>
            
            <section className="tabla-turno" id="TablaTurno">

                <div className="contenedor1 cards">

                { CardsData.map((Data) => (<CardsTt key={Data.mes} {...Data} /> )) }

                </div>
            </section>

        </>
    )
}
