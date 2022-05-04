/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function SingleProductMng({ item, products, setProducts }) {
    const [popUp, setPopup] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const { _id, name, supplier, price, quantity, category } = item;

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('deleted');
            fetch(`https://dry-dusk-31189.herokuapp.com/inventory/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            const filteredItem = products.filter((product) => product._id !== _id);
            setProducts(filteredItem);
        } else {
            console.log('cancel');
        }
    };
    return (
        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                    </label>
                </div>
            </td>
            <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
                {name}
            </th>
            <td className="px-6 py-4">{category}</td>
            <td className="px-6 py-4">{quantity}</td>
            <td className="px-6 py-4">৳.{price}</td>
            <td className="px-6 py-4 text-right">
                <button type="button" onClick={handleDelete}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:scale-110 hover:text-red-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>{' '}
                </button>
            </td>
        </tr>
    );
}

export default SingleProductMng;
