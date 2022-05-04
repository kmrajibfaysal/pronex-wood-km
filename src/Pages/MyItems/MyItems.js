/* eslint-disable no-underscore-dangle */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProduct from '../../hooks/useProduct';
import SingleItem from '../Home/SingleItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [products] = useProduct();

    const filteredItem = products.filter((product) => product.managerId === user.uid);

    if (!filteredItem) {
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
    return (
        <>
            <h1 className="my-5 text-center text-4xl font-bold">Your items</h1>
            <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                {filteredItem.map((product) => (
                    <SingleItem key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default MyItems;
