// Hero.js
import React from 'react';

const Hero = () => {
    return (
        <div className="w-full bg-white flex flex-col justify-between pt-16 md:pt-24">
            <div className="grid md:grid-cols-2 md:p-24 p-6">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 md:mt-0 mt-4">
                    <p className="md:text-5xl font-bold font-serif text-3xl ">Find the perfect <span className='text-[#415DB1]'>bank</span> for you</p>
                    <p className="py-3 md:mb-5 text-sm">Lorem ipsum dolor sit amet.</p>
                    <button className='rounded-full bg-[#415DB1] md:px-4 md:py-2 text-white px-2 py-2 md:w-auto w-40'>Create Account</button>
                </div>
                <img src='/assets/Download Online payment concept_ Mobile banking concept illustration of people using smartphone for free.jpeg' alt="" className="md:h-72 " />
            </div>
        </div>
    );
};

export default Hero;
