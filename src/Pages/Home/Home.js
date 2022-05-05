import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from './Banner';
import Items from './Items';
import Pricing from './Pricing';
import Title from './Title';

function Home() {
    return (
        <div>
            <PageTitle title="Home" />
            <Banner />
            <Title />
            <Items />
            <Pricing />
        </div>
    );
}

export default Home;
