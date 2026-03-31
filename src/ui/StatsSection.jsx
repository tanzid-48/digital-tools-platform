import React from 'react';
const StatsSection = () => {
    return (
        <>
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 w-full mb-16">
            
            <div className="  flex flex-col md:flex-row justify-evenly items-center gap-8 text-center">

                <div className=''>
                    <h3 className="text-white font-bold text-4xl">50K+</h3>
                    <p className="text-white">Active Users</p>
                </div>

                <div className="hidden md:block h-12 w-0.5 bg-white opacity-40"></div>
                <div className=''>
                    <h3 className="text-white font-bold text-4xl">200K+</h3>
                    <p className="text-white">Premium Tools</p>
                </div>

                <div className="hidden md:block h-12 w-0.5 bg-white opacity-40"></div>
                <div>
                    <h3 className="text-white font-bold text-4xl">4.9</h3>
                    <p className="text-white">Rating</p>
                </div>

            </div>
        </div>
        
     <div className="text-center space-y-4 my-10">
     <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
     </div>
   </>

    );
};
export default StatsSection;