import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dry-dusk-31189.herokuapp.com/inventory')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return [products, setProducts];
};

export default useProduct;
