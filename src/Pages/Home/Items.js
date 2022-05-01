/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import useProduct from '../../hooks/useProduct';
import MngInvBtn from '../../Shared/ManageInvetoryBtn/MngInvBtn';
import SingleItem from './SingleItem';

function Items() {
    const [products, setProducts] = useProduct();

    return (
        <div className="mt-12 bg-sky-100 py-6">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl">Items</h1>
                <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                    {products.map((product) => (
                        <SingleItem key={product._id} product={product} />
                    ))}
                </div>
                <div className="mt-5 flex items-center justify-center">
                    <MngInvBtn />
                </div>
            </div>
        </div>
    );
}

export default Items;
