import React from 'react';

const Pricing = () => {
    return (
        <div className="">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-3">Simple, Transparent Pricing</h2>
                <p className="text-gray-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid md:grid-cols-3 justify-center gap-10  w-9/12 mx-auto mb-25 ">

                <div className="card bg-base-100 shadow-xl rounded-xl">
                    <div className="card-body ">
                        
                       <div className="space-y-2">
                         <h2 className="text-3xl font-bold">Starter</h2>
                            <p className='text-gray-600 '>Perfect for getting started</p>
                       </div>
                           
                       <p className="text-2xl font-bold ">$0<span className='text-gray-600 text-sm font-medium'>/month</span></p>

                        <ul className=" mt-4 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-20">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-white font-semibold">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-xl relative  rounded-xl scale-105 -translate-y-1">
                    <div className="card-body">
                               <span className="badge bg-[#FEF3C6] text-[#BB4D00] self-start text-xs absolute -top-3 left-1/4">Most Popular</span>
                       <div className="space-y-2">
                         <h2 className="text-3xl font-bold">Pro</h2>
                            <p className='text-gray-600 mb-4'>Best for professionals</p>
                       </div>
                           
                       <p className="text-2xl font-bold">$29<span className='text-gray-600 text-sm font-medium'>/month</span></p>
                        
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>  Advanced analytics</span>
                            </li>
                        </ul>
                       <div className="mt-6">
                            <button className="btn btn-block rounded-full bg-white text-[#4F39F6]">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                 <div className="card bg-base-100 shadow-xl rounded-xl">
                    <div className="card-body">
                        
                       <div className="space-y-2">
                         <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className='text-gray-600 mb-4'>For teams and businesses</p>
                       </div>
                           
                       <p className="text-2xl font-bold">$99<span className='text-gray-600 text-sm font-medium'>/month</span></p>
                        
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                       <div className="mt-6">
                            <button className="btn btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Pricing;