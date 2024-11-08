// Shan
import React, { useState, useEffect } from 'react';

// Dynamically import all images from the 'Images' directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../Images', false, /scroll\d+\.png$/));

const ScrollImages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically scroll to the next image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000); // 3000ms = 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-[1762px] h-[300px] mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-[300px] object-cover" />
                ))}
            </div>

            {/* Dots for navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => goToImage(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ScrollImages;