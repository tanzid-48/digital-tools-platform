import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className=' bg-[#101727] text-white w-ful'>

            <div className="w-10/12 mx-auto px-6 py-14 ">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* 1st col heading */}
                    <div className="col-span-1 text-gray-400 ">
                        <h2 className="text-2xl font-bold hover:text-white mb-3">DigiTools</h2>
                        <p className="text-sm">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>
                    {/* 2nd col product */}
                    <div className='text-gray-400 '>
                        <h3 className="font-semibold mb-4 hover:text-white">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Templates</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                        </ul>
                    </div>
                    {/*  3rd clo Company */}
                    <div className='text-gray-400 '>
                        <h3 className="font-semibold mb-4 hover:text-white">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                        </ul>
                    </div>
                    {/*  4th col Resources */}
                    <div className='text-gray-400 '>
                        <h3 className="font-semibold mb-4 hover:text-white">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Documentation</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Community</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div className=''>
                        <h3 className="font-semibold mb-4">Social Links</h3>
                        <div className="flex gap-3">
                            <a href="#" className='bg-gray-400  p-2 rounded-full'><AiFillInstagram /></a>
                            <a href="#" className='bg-gray-400  p-2 rounded-full'><FaFacebook /></a>
                            <a href="#" className='bg-gray-400  p-2 rounded-full'><FaSquareXTwitter /></a>
                        </div>
                    </div>
                </div>
                <hr className='border-t border-gray-700 mt-8 mb-5' />

                <div className=" flex justify-between items-center text-sm text-gray-400  ">
                    <p className='text-gray-300'>© 2026 Tanzid Mondol. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0 text-sm">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;