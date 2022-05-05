/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';

function AddItem() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // input value References

    const nameRef = useRef('');
    const categoryRef = useRef('');
    const supplierRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef(0);
    const quantityRef = useRef(0);
    const imgRef = useRef('');

    const getRefValue = (ref) => ref.current.value;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const managerId = user.uid;
        const name = nameRef.current.value;
        const category = categoryRef.current.value;
        const supplier = supplierRef.current.value;
        const description = descriptionRef.current.value;
        const price = parseInt(priceRef.current.value);
        const quantity = parseInt(quantityRef.current.value);
        const img = imgRef.current.value;
        const sold = 0;
        const newItem = {
            managerId,
            name,
            category,
            supplier,
            description,
            price,
            quantity,
            img,
            sold,
        };
        // Sends post req to server
        fetch(`https://dry-dusk-31189.herokuapp.com/addItem`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    navigate('/addItem/success');
                }
            });
    };

    return (
        <form
            className="mt-4 flex-col items-center justify-center md:mt-6"
            onSubmit={handleOnSubmit}
        >
            <PageTitle title="Add Item" />
            <h1 className="mx-auto  mb-6 rounded py-2  text-center text-3xl font-bold text-sky-700">
                Add Item
            </h1>
            <div className="mx-auto w-11/12 md:w-3/4 lg:w-[600px]">
                <div className="group relative z-0 mb-6 w-full">
                    <input
                        type="text"
                        name="floating_email"
                        className="text-md peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5  px-0 text-gray-600 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                        placeholder=" "
                        required
                        defaultValue={user.displayName}
                        disabled
                    />
                    <label
                        htmlFor="floating_email"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                    >
                        Manager
                    </label>
                </div>
                <div className="group relative z-0 mb-6 w-full">
                    <input
                        ref={nameRef}
                        type="text"
                        name="floating_email"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                    >
                        Product name
                    </label>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            ref={categoryRef}
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                        >
                            Category
                        </label>
                    </div>
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            ref={supplierRef}
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                        >
                            Supplier
                        </label>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            type="text"
                            ref={descriptionRef}
                            name="floating_company"
                            id="floating_company"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_company"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                        >
                            Description
                        </label>
                    </div>
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            type="number"
                            ref={priceRef}
                            name="floating_company"
                            id="floating_company"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                            placeholder=" "
                            required
                            min="0"
                        />
                        <label
                            htmlFor="floating_company"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                        >
                            Price
                        </label>
                    </div>
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            type="number"
                            ref={quantityRef}
                            name="floating_company"
                            id="floating_company"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                            placeholder=" "
                            required
                            min="0"
                        />
                        <label
                            htmlFor="floating_company"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                        >
                            Quantity
                        </label>
                    </div>
                    <div className="group relative z-0 mb-6 w-full">
                        <input
                            ref={imgRef}
                            name="floating_company"
                            id="floating_company"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-sky-500"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_company"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-sky-500"
                        >
                            Product Image Link
                        </label>
                    </div>
                </div>
                <input
                    type="submit"
                    className="w-full rounded-lg bg-sky-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 sm:w-auto"
                    value="Add item"
                />
            </div>
        </form>
    );
}

export default AddItem;
