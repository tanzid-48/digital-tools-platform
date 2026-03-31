import { use } from 'react';
import ProductCards from '../../ui/ProductCards';

const Products = ({ productPromise,cards,SetCards}) => {
    const products = use(productPromise);
    return (
        <div className="mt-16 ">

            <div className="">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 w-9/12 mx-auto">
                    {
                        products.map(product => (<ProductCards key={product.id} product={product} cards = {cards} SetCards = {SetCards} 
                        ></ProductCards>

                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Products;