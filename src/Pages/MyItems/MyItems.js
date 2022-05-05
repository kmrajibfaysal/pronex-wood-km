/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProduct from '../../hooks/useProduct';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SingleMyItem from './SingleMyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [products, setProducts] = useProduct();

    const filteredItem = products.filter((product) => product.managerId === user.uid);

    const filteredItemLength = filteredItem.length;

    if (filteredItemLength === 0) {
        return (
            <div className="mt-6 flex flex-col items-center justify-center pb-24">
                <h1 className="text-2xl md:text-4xl">You have not added any item!</h1>
                <div className="mt-6 flex flex-col items-center justify-center">
                    <span className="block text-sm md:text-xl">
                        Please add some item by click below.
                    </span>
                    <div className="mt-3">
                        <button
                            onClick={() => navigate('/addItem')}
                            className="mb-4 inline-flex items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                            type="button"
                        >
                            Add new items
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    if (filteredItemLength > 0) {
        return (
            <>
                <h1 className="my-5 text-center text-4xl font-bold">Your items</h1>
                <PageTitle title="My Items" />
                <div className="container relative mx-auto overflow-x-auto  sm:rounded-lg">
                    <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                        <div>
                            <label htmlFor="table-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative mt-1">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="table-search"
                                    className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <button
                                onClick={() => navigate('/addItem')}
                                className="mb-4 inline-flex items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                                type="button"
                            >
                                Add new items
                            </button>
                        </div>
                    </div>
                    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                        />
                                        <label htmlFor="checkbox-all-search" className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItem.map((item) => (
                                <SingleMyItem
                                    key={filteredItem._id}
                                    item={item}
                                    products={products}
                                    setProducts={setProducts}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
};

export default MyItems;
