import React, { Fragment } from 'react'

export default function CardsTt({ mes, turno, farmacias }) {
    return (
        <Fragment>
            <div className="card" data-aos="zoom-in-right" data-aos-duration="1500">
                <div className="face face1">
                    <div className="content">
                        <h2>{mes}</h2>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h4 className="hc">{turno.s1}</h4>
                        <p className="pc">{farmacias.s1}</p>
                        <h4 className="hc">{turno.s2}</h4>
                        <p className="pc">{farmacias.s2}</p>
                        <h4 className="hc">{turno.s3}</h4>
                        <p className="pc">{farmacias.s3}</p>
                        <h4 className="hc">{turno.s4}</h4>
                        <p className="pc">{farmacias.s4}</p>
                        <h4 className="hc">{turno.s5}</h4>
                        <p className="pc">{farmacias.s5}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}