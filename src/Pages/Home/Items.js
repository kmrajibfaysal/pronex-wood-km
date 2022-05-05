/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import useProduct from '../../hooks/useProduct';
import Loading from '../../Shared/Loading/Loading';
import MngInvBtn from '../../Shared/ManageInvetoryBtn/MngInvBtn';
import SingleItem from './SingleItem';

function Items() {
    const [products, setProducts, loading] = useProduct();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="bg-gray-100 pb-6 pt-12">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl">Our stock</h1>
                <div className="mb-4 w-full">
                    <div className="mx-auto my-0 h-1 w-48 rounded-t bg-gradient-to-r from-sky-500 to-white py-0 " />
                </div>
                <div>
                    <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                        {products.slice(0, 6).map((product) => (
                            <SingleItem key={product._id} product={product} />
                        ))}
                    </div>
                    <div className="mt-5 flex items-center justify-center">
                        <MngInvBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;
