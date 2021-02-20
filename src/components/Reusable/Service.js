import React, { Fragment } from 'react'

export default function Service({ icon, service }) {
    return (
        <Fragment>
            <h4><i className= { icon } ></i> {service} </h4>
        </Fragment>
    )
}
