import React, { use } from 'react';

const Products = ({productPromise}) => {

    const products = use(productPromise);
    console.log(products);
    
    return (
        <div className="mt-16 ">

    <div className="text-center space-y-4">
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>



            </div>
        </div>
    );
};

export default Products;