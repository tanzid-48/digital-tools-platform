import React from 'react';

const Explore = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 w-full text-center space-y-6">
            <div className="space-y-4">
                <h2 className='font-bold text-5xl text-white'>Ready to Transform Your Workflow?</h2>
                <p className='font-light text-sm text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className="flex justify-center gap-4">
              <button className="btn rounded-full bg-white text-[#4F39F6] ">Explore Products</button> 
              <button className="btn rounded-full 
              bg-transparent 
              text-white border border-white">View Pricing</button>
                
            </div>
           <div className=" md:flex gap-5 justify-center text-gray-300 text-sm">
            <li>14-day free trial  </li>
            <li>No credit card required</li>
            <li>Cancel anytime</li>
           </div>

        </div>
    );
};

export default Explore;