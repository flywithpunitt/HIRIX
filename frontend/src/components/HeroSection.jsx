import React, { useState } from 'react';

const HeroSection = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", query);
        // Here you would typically handle the search action
    };

    return (
        <div className='bg-gradient-to-r from-purple-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
                <span className='inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-6'>
                    No. 1 Job Hunt Website
                </span>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900'>
                    Search, Apply & Get Your <br className="hidden sm:inline" />
                    <span className='text-purple-600'>Dream Jobs</span>
                </h1>
                <p className='text-xl text-gray-600 mb-10'>
                    Transform Your Career with Premier IT Job Openings Across the Nation
                </p>
                <form onSubmit={handleSearch} className='flex flex-col sm:flex-row w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='flex-grow px-6 py-4 rounded-l-full sm:rounded-r-none outline-none text-gray-700 border border-gray-300'
                    />
                    <button type="submit" className="mt-2 sm:mt-0 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-300 rounded-full sm:rounded-l-none">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;