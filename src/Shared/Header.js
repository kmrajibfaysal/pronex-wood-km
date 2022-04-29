/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import ActiveLink from '../hooks/ActiveLink';

function Header() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const handleLoginLogOutButton = () => {
        user ? signOut(auth) : navigate('/login');
    };

    return (
        <nav className=" rounded border-gray-200 bg-sky-50 px-2 py-2.5 transition-all duration-200 dark:bg-gray-800 sm:px-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <ActiveLink to="/" className="flex items-center">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-700 dark:text-white">
                        Pronex-Wood
                    </span>
                </ActiveLink>
                <div className="flex md:order-2">
                    <button
                        onClick={handleLoginLogOutButton}
                        type="button"
                        className="mr-3 rounded-full bg-sky-700 px-5 py-1.5 text-center text-sm font-medium text-white shadow-lg shadow-gray-300 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 md:mr-0"
                    >
                        {user ? 'Log out' : 'Log in'}
                    </button>
                    <button
                        data-collapse-toggle="mobile-menu-4"
                        type="button"
                        className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="mobile-menu-4"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            className="hidden h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                    id="mobile-menu-4"
                >
                    <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                        <li>
                            <ActiveLink to="/home" className="nav-link" aria-current="page">
                                Products
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/inventory" className="nav-link">
                                Inventory
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/blogs" className="nav-link">
                                Blogs
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/contact" className="nav-link">
                                Contact
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
