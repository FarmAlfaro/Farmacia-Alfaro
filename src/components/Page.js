import React, { Fragment } from 'react';

import Salud from './Salud';
import TablaTurno from './TablaTurno';
import Services from './Services';
import Footer from './Layout/Footer';

export default function Page() {
    return (
        <Fragment>
            <Salud />
            <TablaTurno />
            <Services />
            <Footer />
        </Fragment>
    )
}
