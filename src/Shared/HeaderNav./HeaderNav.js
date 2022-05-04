/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function HeaderNav() {
    return (
        <div className="dark-mode:text-gray-200 dark-mode:bg-gray-800 w-full bg-white text-gray-700">
            <div
                x-data="{ open: false }"
                className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
            >
                <div className="flex flex-row items-center justify-between p-4">
                    <a
                        href="#"
                        className="dark-mode:text-white focus:shadow-outline rounded-lg text-lg font-semibold uppercase tracking-widest text-gray-900 focus:outline-none"
                    >
                        Flowtrail UI
                    </a>
                    <button
                        className="focus:shadow-outline rounded-lg focus:outline-none md:hidden" /* @click="open = !open" */
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                            <path
                                x-show="!open"
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                            <path
                                x-show="open"
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="hidden flex-grow flex-col pb-4 md:flex md:flex-row md:justify-end md:pb-0">
                    <a
                        className="dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                        href="#"
                    >
                        Blog
                    </a>
                    <a
                        className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4"
                        href="#"
                    >
                        Portfolio
                    </a>
                    <a
                        className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4"
                        href="#"
                    >
                        About
                    </a>
                    <a
                        className="dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 focus:shadow-outline mt-2 rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4"
                        href="#"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default HeaderNav;
