/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

function Inventory() {
    const { productId } = useParams();

    return (
        <div>
            <h1 className="text-5xl">This is inventory of : {productId}</h1>
        </div>
    );
}

export default Inventory;
