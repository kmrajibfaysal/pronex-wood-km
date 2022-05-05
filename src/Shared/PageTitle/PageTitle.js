import React from 'react';
import { Helmet } from 'react-helmet-async';

function PageTitle({ title }) {
    return (
        <Helmet>
            <title>{title} - Pronex-Wood</title>
        </Helmet>
    );
}

export default PageTitle;
