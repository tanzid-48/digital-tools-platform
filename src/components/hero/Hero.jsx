import React from 'react';
import BannerImg from '../../assets/banner.png'
import { CircleDot, Play } from 'lucide-react';
const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-11/12 mx-auto  flex-col lg:flex-row-reverse gap-10">
                <img
                    src={BannerImg}
                    className="w-full max-w-sm object-contain"
                />
                <div>
                    <button className="btn btn-sm md:btn-md rounded-full text-[#4F39F6] bg-blue-50 my-4 flex items-center gap-2">
                        <CircleDot size={16} />
                        New: AI-Powered Tools Available
                    </button>
                    <h1 className="text-5xl font-extrabold">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6 text-[#627382] ">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn btn-primary rounded-full ">Explore Products</button>
                        <button className="btn border-[#4F39F6] text-[#4F39F6] rounded-full flex items-center gap-2">
                            <Play size={16} />
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;