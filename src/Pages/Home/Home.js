import { motion } from 'framer-motion';
import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from './Banner';
import Items from './Items';
import Pricing from './Pricing';
import Title from './Title';

const containerVariables = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.5,
        },
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
    },
};

function Home() {
    return (
        <motion.div variants={containerVariables} initial="hidden" animate="visible" exit="exit">
            <PageTitle title="Home" />
            <Banner />
            <Title />
            <Items />
            <Pricing />
        </motion.div>
    );
}

export default Home;
