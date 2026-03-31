import React from 'react';

const NavBar = ({ cards }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6 w-11/12 mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl font-bold text-[#4F39F6]">
          DigiTools
        </a>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-semibold">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="flex items-center gap-4 ml-7">
        {/* function add.. */}
        <div className="indicator">
          {cards.length > 0 ? (<span className="indicator-item badge rounded-full w-0.5 badge-primary">
            {cards.length}
          </span>) : ""
          }

          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
              2.293c-.63.63-.184 1.707.707 1.707H17m0 
              0a2 2 0 100 4 2 2 0 000-4zm-8 
              2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <a className="hidden md:block">Login</a>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white font-light">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default NavBar;