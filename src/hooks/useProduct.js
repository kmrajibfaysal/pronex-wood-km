import { useEffect, useState } from 'react';

const useProduct = () => {
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-dusk-31189.herokuapp.com/inventory')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(() => setLoading(false));
    }, []);
    return [products, setProducts, loading];
};

export default useProduct;
