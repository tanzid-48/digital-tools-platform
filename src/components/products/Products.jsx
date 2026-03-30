import React, { use } from 'react';
import ProductCards from '../../ui/ProductCards';
import Tab from '../../ui/Tab';

const Products = ({ productPromise }) => {

    const products = use(productPromise);
    // console.log(products);

    return (
        <div className="mt-16 ">

            <div className="text-center space-y-4">
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

              
              <Tab></Tab>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 w-9/12 mx-auto">
                {
                 products.map( product => (<ProductCards key={product.id} product = {product}></ProductCards>))

                 }

                </div>




            </div>
        </div>
    );
};

export default Products;