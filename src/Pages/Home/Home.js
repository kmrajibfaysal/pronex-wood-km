import React from 'react';
import Banner from './Banner';
import Items from './Items';
import Pricing from './Pricing';
import Title from './Title';

function Home() {
    return (
        <div>
            <Banner />
            <Title />
            <Items />
            <Pricing />
        </div>
    );
}

export default Home;
