/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 md:py-16">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div className="mb-5 w-11/12 flex-col items-center justify-center sm:mb-10  sm:w-2/3 lg:flex">
                    <h1 className="text-center text-2xl font-black leading-7 text-gray-800 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl">
                        The One place to store all of your
                        <span className="text-sky-700"> Furniture </span>
                        crafted by top class material
                    </h1>
                    <p className="mt-5 text-center text-sm font-normal text-gray-400 sm:mt-10 sm:text-lg lg:w-10/12">
                        An all in one warehouse services for storing all kind of furniture. We store
                        tons of material in our different cargo places. Just check below our
                        currently stocked product.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <a href="#price">
                        <button className="rounded border border-sky-700 bg-sky-700 px-4 py-2 text-sm text-white transition duration-150 ease-in-out  hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
                            Book now
                        </button>
                    </a>
                    <button
                        onClick={() => navigate('/contact')}
                        className="ml-4 rounded border border-sky-700 bg-transparent px-4 py-2 text-sm text-sky-700 transition duration-150 ease-in-out  hover:border-sky-600 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
