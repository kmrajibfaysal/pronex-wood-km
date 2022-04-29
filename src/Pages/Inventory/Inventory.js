import React from 'react';
import { useParams } from 'react-router-dom';

function Inventory() {
    const { productId } = useParams();

    return (
        <div>
            <h1 className="text-5xl">This is inventory of : {productId}</h1>
        </div>
    );
}

export default Inventory;
