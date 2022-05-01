/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function SingleProductMng({ product }) {
    const { name, supplier, price, quantity, category } = product;
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
                <a href="#" className="font-medium text-red-600 hover:underline dark:text-blue-500">
                    Delete
                </a>
            </td>
        </tr>
    );
}

export default SingleProductMng;
