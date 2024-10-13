import React, { useState } from 'react';

const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCategory = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const prevCategory = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    };

    return (
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Categories</h2>
            <div className="flex items-center justify-center space-x-4">
                <button onClick={prevCategory} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                    &#8592;
                </button>
                <div className="w-64 text-center">
                    <button className="px-6 py-2 bg-white text-purple-600 rounded-full shadow hover:bg-purple-600 hover:text-white transition-colors duration-300">
                        {categories[currentIndex]}
                    </button>
                </div>
                <button onClick={nextCategory} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default CategoryCarousel;