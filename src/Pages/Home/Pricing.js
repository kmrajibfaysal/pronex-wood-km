/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pricing() {
    const navigate = useNavigate();
    return (
        <div id="price" className=" py-20">
            <div className="container mx-auto w-full">
                <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                        <span className="tracking-wide text-sky-700">Flexible </span>
                        <span>Plans</span>
                    </h1>
                    <p className="w-full px-8 pt-6 text-xl font-normal text-gray-400 md:w-full">
                        Choose a plan that works best for your warehouse
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center pt-24 md:flex-row">
                    <div className="mx-auto my-4 w-80 rounded-3xl bg-white p-8 pr-16 text-center shadow-xl md:mx-0 md:w-96">
                        <h1 className="text-2xl font-semibold text-black">Small</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="align-top text-gray-400">$ </span>
                            <span className="text-3xl font-semibold">50</span>
                            <span className="font-medium text-gray-400">/ 10 small(1day)</span>
                        </p>
                        <hr className="border-1 mt-4" />
                        <div className="pt-8">
                            <p className="text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    Ground floor <span className="text-black">non AC</span>
                                </span>
                            </p>
                            <p className="pt-5 text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    Basic <span className="text-black">maintenance</span>
                                </span>
                            </p>
                            <p className="pt-5 text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    <span className="text-black">500sft</span>storage
                                </span>
                            </p>

                            <p className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-white">
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="font-medium"
                                >
                                    Choose Plan
                                </button>
                                <span className="material-icons pl-2 align-middle text-sm">
                                    east
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="relative mx-auto my-4 w-80 rounded-3xl border-4 border-white bg-gray-900 p-8 text-center text-white shadow-xl md:mx-0  md:w-96 md:scale-110 md:transform">
                        <h1 className="text-2xl font-semibold text-white">Medium</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="align-top text-gray-400">$ </span>
                            <span className="text-3xl font-semibold">200</span>
                            <span className="font-medium text-gray-400">/ 20 mid size(1day)</span>
                        </p>
                        <hr className="border-1 mt-4 border-gray-600" />
                        <div className="pt-8">
                            <p className="text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    2nd floor<span className="text-white"> Partly AC</span>
                                </span>
                            </p>
                            <p className="pt-5 text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    High <span className="text-white">maintenances</span>
                                </span>
                            </p>
                            <p className="pt-5 text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    <span className="text-white">1200sqf </span> storage
                                </span>
                            </p>

                            <p className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-white">
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="font-medium"
                                >
                                    Choose Plan
                                </button>
                                <span className="material-icons pl-2 align-middle text-sm">
                                    east
                                </span>
                            </p>
                        </div>
                        <div className="absolute top-4 right-4">
                            <p className="rounded-full bg-blue-700 px-4 py-1 text-xs font-semibold uppercase">
                                Popular
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto my-4 w-80 rounded-3xl bg-white p-8 pl-16 text-center shadow-xl md:mx-0 md:w-96">
                        <h1 className="text-2xl font-semibold text-black">Enterprise</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="align-top text-gray-400">$ </span>
                            <span className="text-3xl font-semibold">350</span>
                            <span className="font-medium text-gray-400">/ 30 any size(1day)</span>
                        </p>
                        <hr className="border-1 mt-4" />
                        <div className="pt-8">
                            <p className="text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    Any floor <span className="text-black">fully AC</span>
                                </span>
                            </p>
                            <p className="pt-5 text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    High <span className="text-black">maintenances</span>
                                </span>
                            </p>
                            <p className="pt-5 text-left font-semibold text-gray-400">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    <span className="text-black">2000sft </span>storage
                                </span>
                            </p>

                            <p className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-white">
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="font-medium"
                                >
                                    Choose Plan
                                </button>
                                <span className="material-icons pl-2 align-middle text-sm">
                                    east
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
