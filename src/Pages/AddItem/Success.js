import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto">
            <div className="mt-6 flex flex-col items-center justify-center pb-24">
                <h1 className="text-center text-2xl font-bold text-green-500 md:text-4xl">
                    Your item has been added to inventory!
                </h1>
                <div className="mt-6 flex flex-col items-center justify-center">
                    <span className="block text-sm md:text-xl">
                        Check out all the items in the inventory.
                    </span>
                    <div className="mt-3 flex flex-col ">
                        <button
                            onClick={() => navigate('/inventory')}
                            className="my-4 block items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                            type="button"
                        >
                            Inventory
                        </button>
                        <span className="block text-sm md:text-xl">Want to add more?</span>
                        <button
                            onClick={() => navigate('/addItem')}
                            className="my-4  block items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                            type="button"
                        >
                            Add items
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
