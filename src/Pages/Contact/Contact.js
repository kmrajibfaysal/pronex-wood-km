/* eslint-disable react/button-has-type */
import { motion } from 'framer-motion';
import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

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

function Contact() {
    return (
        <motion.div
            variants={containerVariables}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" bg-white"
        >
            <PageTitle title="Contact" />
            <div className="container mx-auto my-4 px-4 lg:px-20">
                <div className="my-4 mr-auto w-full rounded-2xl p-8 shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40">
                    <div className="flex">
                        <h1 className="text-5xl font-bold uppercase">
                            Send us a <br /> message
                        </h1>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <input
                            className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                            type="text"
                            placeholder="First Name*"
                        />
                        <input
                            className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                            type="text"
                            placeholder="Last Name*"
                        />
                        <input
                            className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                            type="email"
                            placeholder="Email*"
                        />
                        <input
                            className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                            type="number"
                            placeholder="Phone*"
                        />
                    </div>
                    <div className="my-4">
                        <textarea
                            placeholder="Message*"
                            className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                        />
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button
                            className="focus:shadow-outline w-full rounded-lg bg-sky-900 p-3 text-sm font-bold uppercase tracking-wide 
                      text-gray-100 focus:outline-none"
                        >
                            Send Message
                        </button>
                    </div>
                </div>

                <div className="ml-auto w-full rounded-2xl bg-sky-900 px-8 py-12 lg:-mt-96 lg:w-2/6">
                    <div className="flex flex-col text-white">
                        <h1 className="my-4 text-4xl font-bold uppercase">Drop in our office</h1>
                        <p className="text-gray-400">
                            We are based on various places as needed, you will get a office in the
                            opposite of the road for a meantime you will find a sign board calling
                            Pronex-Wood and a big size building with wood stored.
                        </p>

                        <div className="my-4 flex w-2/3 lg:w-1/2">
                            <div className="flex flex-col">
                                <i className="fas fa-map-marker-alt pt-2 pr-2" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">Main Office</h2>
                                <p className="text-gray-400">6600 Uttara RD, Dhaka, BD 24665</p>
                            </div>
                        </div>

                        <div className="my-4 flex w-2/3 lg:w-1/2">
                            <div className="flex flex-col">
                                <i className="fas fa-phone-alt pt-2 pr-2" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">Call Us</h2>
                                <p className="text-gray-400">Tel: 919-898-782</p>
                                <p className="text-gray-400">Fax: 899-778-899</p>
                            </div>
                        </div>

                        <div className="my-4 flex w-2/3 lg:w-1/2">
                            <a
                                href="https://www.facebook.com/ENLIGHTENEERING/"
                                target="_blank"
                                rel="noreferrer"
                                className="mx-1 inline-block h-8 w-8 rounded-full bg-white pt-1 text-center"
                            >
                                <i className="fab fa-facebook-f text-sky-900" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/enlighteneering-inc-"
                                target="_blank"
                                rel="noreferrer"
                                className="mx-1 inline-block h-8 w-8 rounded-full bg-white pt-1 text-center"
                            >
                                <i className="fab fa-linkedin-in text-sky-900" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
