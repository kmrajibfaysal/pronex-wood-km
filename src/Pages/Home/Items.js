import React from 'react';
import SingleItem from './SingleItem';

function Items() {
    return (
        <div className="mt-12 bg-sky-100 py-6">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl">Items</h1>
                <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                    <SingleItem />
                    <SingleItem />
                    <SingleItem />
                    <SingleItem />
                    <SingleItem />
                    <SingleItem />
                </div>
            </div>
        </div>
    );
}

export default Items;
