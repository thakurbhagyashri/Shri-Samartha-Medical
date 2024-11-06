import "./scrollImages.css";
import React, { useState } from 'react';
import scroll0 from "../Images/scroll0.png";
import scroll1 from "../Images/scroll1.png";

const ScrollImages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [scroll0, scroll1];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    

    return (
        <div className="relative w-full max-w-[1762px] h-[328px] mx-auto overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                ))}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full" onClick={prevImage}>
                &#10094; {/* Left arrow */}
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full" onClick={nextImage}>
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
};

export default ScrollImages;
