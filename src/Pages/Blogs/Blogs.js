/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Blogs() {
    return (
        <div className="container mx-auto w-full pt-6 md:max-w-3xl md:pt-12">
            <div className="w-full px-4 text-xl leading-normal text-gray-800 md:px-6">
                <div className="font-sans">
                    <h1 className="break-normal pt-6 pb-2 font-sans text-3xl font-bold text-gray-900 md:text-4xl">
                        👋 Welcome to Popular Developer FAQ!
                    </h1>
                    <div className="text-sm font-normal text-gray-600 md:text-base">
                        Published 05 May 2022
                    </div>
                </div>

                <div className="py-6">
                    <span className="font-sans text-2xl font-bold">
                        1. Difference between Javascript and Nodejs
                    </span>{' '}
                    <br />
                    <blockquote className="my-8 border-l-4 border-sky-500 pl-8 italic md:pl-12">
                        Javascript is a lightweight interpreted programming language for front end
                        scripting and nodejs is a scripting language for server side based on Google
                        chrome v8 engine.
                    </blockquote>
                </div>
                <div className="py-6">
                    <span className="font-sans text-2xl font-bold">
                        2. When should you use nodejs and when should you use mongodb
                    </span>{' '}
                    <br />
                    <blockquote className="my-8 border-l-4 border-sky-500 pl-8 italic md:pl-12">
                        To communicate with database we need a broker who will make a connection
                        with client side to database. In this case we need to use a server side
                        script. Nodejs is used for that particular purpose. <br />
                        And mongodb is used to store various type of data as it is knows as no sql
                        database
                    </blockquote>
                </div>
                <div className="py-6">
                    <span className="font-sans text-2xl font-bold">
                        3. Differences between sql and nosql databases.
                    </span>{' '}
                    <br />
                    <blockquote className="my-8 border-l-4 border-sky-500 pl-8 italic md:pl-12">
                        SQL databases are relational , predefined schemed, vertically scalable table
                        based database where sequences are important. <br />
                        On the other hand nosql databases are non relational, unstructured,
                        horizontally scalable obj based database where sequences of data is not
                        important.
                    </blockquote>
                </div>
                <div className="py-6">
                    <span className="font-sans text-2xl font-bold">
                        4. What is the purpose of jwt and how does it work
                    </span>{' '}
                    <br />
                    <blockquote className="my-8 border-l-4 border-sky-500 pl-8 italic md:pl-12">
                        JWT is a mechanism to verify user of some particular json data. It's a
                        mechanism of encoding information and pull that out when needed to verify
                        whether the owner of this data is authenticated or not.
                    </blockquote>
                </div>
            </div>

            <div className="px-4 py-6 text-base text-gray-500 md:text-sm">
                Tags:{' '}
                <a
                    href="#"
                    className="text-base text-sky-500 no-underline hover:underline md:text-sm"
                >
                    Javascript
                </a>{' '}
                .{' '}
                <a
                    href="#"
                    className="text-base text-sky-500 no-underline hover:underline md:text-sm"
                >
                    Nodejs. MongoDB
                </a>
            </div>

            <hr className="mx-4 mb-8 border-b-2 border-gray-400" />

            <div className="container px-4">
                <div className="rounded-lg bg-gradient-to-b from-sky-100 to-gray-100 p-4 text-center font-sans shadow-xl">
                    <h2 className="break-normal text-xl font-bold md:text-3xl">
                        Subscribe to my Newsletter
                    </h2>
                    <h3 className="break-normal text-sm font-bold text-gray-600 md:text-base">
                        Get the latest posts delivered right to your inbox
                    </h3>
                    <div className="w-full pt-4 text-center">
                        <form action="#">
                            <div className="mx-auto flex max-w-xl flex-wrap items-center p-1 pr-0">
                                <input
                                    type="email"
                                    placeholder="youremail@example.com"
                                    className="mt-4 mr-2 flex-1 appearance-none rounded border border-gray-400 p-3 text-gray-600 shadow-md focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="mt-4 block flex-1 appearance-none rounded bg-sky-500 py-4 text-base font-semibold uppercase tracking-wider text-white shadow hover:bg-sky-400 md:inline-block"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex w-full items-center px-4 py-12 font-sans">
                <img
                    className="mr-4 h-10 w-10 rounded-full"
                    src="https://i.ibb.co/sQcyXhb/profile-pic-compressed.png"
                    alt="Avatar of Author"
                />
                <div className="flex-1 px-2">
                    <p className="mb-2 text-base  font-bold leading-none md:text-xl">
                        K. M. Rajib Faysal
                    </p>
                    <p className="text-xs text-gray-600 md:text-base">Front end Developer</p>
                </div>
                <div className="justify-end">
                    <button className="rounded-full border border-gray-500 bg-transparent py-2 px-4 text-xs font-bold text-gray-500 hover:border-sky-500 hover:text-sky-500">
                        Read More
                    </button>
                </div>
            </div>

            <hr className="mx-4 mb-8 border-b-2 border-gray-400" />

            <div className="flex content-center justify-between px-4 pb-12 font-sans">
                <div className="text-left">
                    <span className="text-xs font-normal text-gray-600 md:text-sm">
                        &lt; Previous Post
                    </span>
                    <br />
                    <p>
                        <a
                            href="#"
                            className="break-normal text-base font-bold text-sky-500 no-underline hover:underline md:text-sm"
                        >
                            NodeJs tips and tricks
                        </a>
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-xs font-normal text-gray-600 md:text-sm">
                        Next Post &gt;
                    </span>
                    <br />
                    <p>
                        <a
                            href="#"
                            className="break-normal text-base font-bold text-sky-500 no-underline hover:underline md:text-sm"
                        >
                            MongoDB Crud
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
