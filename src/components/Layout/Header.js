import React, { Fragment } from 'react';

import Nav from './Nav';
import Presentation from './Presentation';

export default function Header() {

    return (
        <Fragment>

            <header>

                <Nav />

                <Presentation />

            </header>

        </Fragment>
    )
}
