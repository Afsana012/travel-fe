import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16 lg:py-20 bg-[#f4faf7] min-h-[60vh] lg:min-h-[80vh]">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
                    Build Your Dream Travel <br className="hidden sm:block" />
                    Bucket List
                </h1>

                <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                    Plan, track, and organize your travel adventures with our intuitive platform.
                    Discover new destinations, manage your itineraries, and never miss a dream trip.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <Link href="/signup" className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition text-center">
                        Start Planning Free
                    </Link>

                    <Link href="/signin" className="w-full sm:w-auto bg-white border border-gray-300 px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition text-center">
                        Sign In
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center overflow-hidden">
                <img
                    src="./images/banner.png"
                    alt="Travel Concept"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default Hero;