/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import MngInvBtn from '../../Shared/ManageInvetoryBtn/MngInvBtn';
import './Inventory.css';

function Inventory() {
    const { productId } = useParams();
    const [item, setItem] = useState({});
    const restockRef = useRef();

    const [quantity, setQuantity] = useState(0);
    const [sold, setSold] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setQuantity(data.quantity);
                setSold(data.sold);
            });
    }, []);

    const handleDeliver = async () => {
        const prevQuantity = parseInt(quantity);
        const newQuantity = prevQuantity - 1;
        const prevSold = parseInt(sold);
        const newSold = prevSold + 1;
        if (quantity > 0) {
            await setQuantity(newQuantity);
            await setSold(newSold);
            item.quantity = newQuantity;
            item.sold = newSold;

            // database update method
            fetch(`http://localhost:5000/inventory/${productId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(item),
            });
        } else {
            alert('Please restock item, selected item is stock out!');
        }
    };

    const handleRestock = async () => {
        const restockQuantity = parseInt(restockRef.current.value);
        if (!isNaN(restockQuantity) && restockQuantity > 0) {
            const prevQuantity = parseInt(quantity);

            const restockedQuantity = prevQuantity + restockQuantity;
            await setQuantity(restockedQuantity);
            item.quantity = restockedQuantity;
            // database update method
            fetch(`http://localhost:5000/inventory/${productId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            restockRef.current.value = 0;
        } else {
            alert('restock item must be a valid number!');
            restockRef.current.value = 0;
        }
        //
    };

    return (
        <section className="body-font overflow-hidden bg-white text-gray-700">
            <div className="container mx-auto px-5 py-24">
                <div className="flex justify-end">
                    <MngInvBtn />
                </div>
                <div className="mx-auto flex flex-wrap lg:w-4/5">
                    <img
                        alt="ecommerce"
                        className="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
                        src={item.img}
                    />
                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
                        <h2 className="title-font text-sm tracking-widest text-gray-500">
                            {item.supplier}
                        </h2>
                        <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
                            {item.name}
                        </h1>
                        <h2 className="title-font text-sm tracking-widest text-gray-500">
                            Product code: {item._id}
                        </h2>
                        <div className="mb-4 flex">
                            <span className="flex items-center">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="ml-3 text-gray-600">4 Reviews</span>
                            </span>
                            <span className="ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                                <a className="text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">
                            {item.description}
                            <span className="title-font block text-sm tracking-widest text-gray-500">
                                Quantity: {quantity} items left & {sold} sold.
                            </span>
                        </p>
                        <div className="mt-6 mb-5 flex items-center border-b-2 border-gray-200 pb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none" />
                                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none" />
                                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-red-500 focus:outline-none" />
                            </div>
                            <div className="ml-6 flex items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="appearance-none rounded border border-gray-400 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-b-2 border-gray-200 pb-5">
                            <span className="title-font text-2xl font-medium text-gray-900">
                                ৳.{item.price}
                            </span>
                            <button
                                onClick={handleDeliver}
                                className="ml-auto flex rounded border-0 bg-red-500 py-2 px-6 text-white hover:bg-red-600 focus:outline-none"
                            >
                                Delivered
                            </button>
                            <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </button>
                        </div>
                        <h2 className="text-2xl">Restock item.</h2>
                        <div className="align-center mt-4 flex justify-between">
                            <input
                                ref={restockRef}
                                className="block rounded border-sky-600"
                                type="number"
                                name="stock"
                                id=""
                            />
                            <button
                                onClick={handleRestock}
                                className="block rounded bg-sky-500 px-4 py-2 text-white"
                            >
                                Add to inventory
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Inventory;
