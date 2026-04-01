import React from 'react';
import User from '../assets/user.png'
import Package from '../assets/package.png'
import Rocket from '../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className="mt-30">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-3">Get Started in 3 Steps</h2>
                <p className="text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-7 w-9/12 mx-auto">

 <div className="card bg-base-100 shadow-sm rounded-2xl relative">
    <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-2 py-2 rounded-full">01</span>
   <div className="card-body items-center text-center">
        <div className="bg-purple-100 p-6 rounded-full mb-4">
            <img src={User} alt="User" className="w-10 h-10 " />
        </div>
        <h2 className="card-title text-xl font-bold">Create Account</h2>
        <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started</p>
    </div>
</div>

 <div className="card bg-base-100 shadow-sm rounded-2xl relative">
    <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-2 py-2 rounded-full">02</span>
   <div className="card-body items-center text-center">
        <div className="bg-purple-100 p-6 rounded-full mb-4">
            <img src={Package} alt="package" className="w-10 h-10 " />
        </div>
        <h2 className="card-title text-xl font-bold">Choose Products</h2>
        <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
    </div>
</div>

 <div className="card bg-base-100 shadow-sm rounded-2xl relative">
    <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-2 py-2 rounded-full">03</span>
   <div className="card-body items-center text-center">
        <div className="bg-purple-100 p-6 rounded-full mb-4">
            <img src={Rocket} alt="rocket" className="w-10 h-10 " />
        </div>
        <h2 className="card-title text-xl font-bold">Start Creating</h2>
        <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
    </div>
</div>
 </div>
        </div>
    );
};

export default GetStarted;