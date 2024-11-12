import React, { useState } from 'react';
import Frame9 from "../Images/Frame 9.png";
import Frame12 from "../Images/Frame 12.png";
import Frame13 from "../Images/Frame 13.png";
import Frame16 from "../Images/Frame 16.png";

const DealoftheDay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Frame9, Frame12, Frame13, Frame16];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-[1728px] h-[300px] mx-auto overflow-hidden" >  
            <div className="relative mx-[50px] overflow-hidden">
                <div className=" flex transition-transform duration-300 " style={{ transform: `translateX(-${currentIndex * (600 + 20)}px)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} className="w-[600px] h-full object-cover rounded-[15px] mx-2" />
                    ))}
                </div>
            </div>

            <button className="absolute left-10     `top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 z-10 rounded-full" onClick={prevImage}>
                &#10094; {/* Left arrow */}
            </button>

            {/* Left fade effect */} 
            <div className="absolute left-10 top-0 bottom-0 bg-gradient-to-r from-white via-transparent z-5 w-[300px]" />

            <button className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 z-10 rounded-full" onClick={nextImage}>
                &#10095; {/* Right arrow */}
            </button>
            
            {/* Right fade effect */}
            <div className="absolute right-7 top-0 bottom-0 bg-gradient-to-l from-white via-transparent z-5 w-[300px]" />

        </div>
    );
};

export default DealoftheDay;
