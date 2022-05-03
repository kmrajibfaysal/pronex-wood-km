/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SingleItem({ product }) {
    const { _id, name, seller, description, price, quantity, supplier, img } = product;

    const navigate = useNavigate();

    const handleManageItem = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <div>
            <div className="mx-3 my-3 max-h-[600px] max-w-xs rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                <a href="#">
                    <img className="mx-auto max-h-[250px] rounded-t-lg pt-2" src={img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                    </a>
                    <div className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                        <p className=" text-gray-600"> {description} </p> <br />
                        <span>Price: ৳.{price} </span> <br />
                        <span>Quantity: {quantity}</span> <br />
                        <span>Supplier: {supplier}</span> <br />
                    </div>
                    <button
                        onClick={() => handleManageItem(_id)}
                        type="button"
                        className="inline-flex items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    >
                        Manage
                        <svg
                            className="ml-2 -mr-1 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleItem;
