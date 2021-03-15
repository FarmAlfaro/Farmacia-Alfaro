import React, { Fragment } from 'react';

import Header from './Layout/Header'
import Salud from './Salud';
import TablaTurno from './TablaTurno';
import Services from './Services';
import Footer from './Layout/Footer';

export default function Page() {
    return (
        <Fragment>
            <Header />
            <Salud />
            <TablaTurno />
            <Services />
            <Footer />
        </Fragment>
    )
}
