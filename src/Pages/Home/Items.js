/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';

function Items() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="mt-12 bg-sky-100 py-6">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl">Items</h1>
                <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                    {products.map((product) => (
                        <SingleItem key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Items;
