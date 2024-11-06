import "./scrollImages.css";
import React, { useState } from 'react';
import Frame9 from "../Images/Frame 9.png";
import Frame12 from "../Images/Frame 12.png";
import Frame13 from "../Images/Frame 13.png"
import Frame16 from "../Images/Frame 16.png"
const ImageSections = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Frame9, Frame12, Frame13, Frame16];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + images.length) % images.length);
    };
    

    return (
        <div className="relative w-full max-w-[1728px] h-[328px] mx-auto overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 2}`} className="w-full h-full object-cover" />
                ))}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full" onClick={prevImage}>
                &#10094; 
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full" onClick={nextImage}>
                &#10095; 
            </button>
        </div>
    );
};

export default ImageSections;
