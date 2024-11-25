import React, { useEffect, useState } from 'react';
import Frame12 from "../../Images/Frame 12.png";
import Frame13 from "../../Images/Frame 13.png";
import Frame16 from "../../Images/Frame 16.png";
import Frame9 from "../../Images/Frame 9.png";
import './DealoftheDay.css'; // Import the CSS file

const DealoftheDay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(600 + 20); // Default to 600 + 20

    const images = [Frame9, Frame12, Frame13, Frame16];
    const imageUrls = [
        "https://shrisamarth.sinfolix.com/shop/",
        "https://shrisamarth.sinfolix.com/product-category/vitamins/",
        "https://shrisamarth.sinfolix.com/product/inlife-magnesium-glycinate-1100-mg-veg-capsule-120s/",
        "https://example.com/page4"
    ];

    // Function to update image width based on screen size
    const updateImageWidth = () => {
        if (window.innerWidth <= 768) {
            setImageWidth(200 + 20); // Set to 400 + 20 for smaller screens
        } else {
            setImageWidth(600 + 20); // Set to 600 + 20 for larger screens
        }
    };

    // Call updateImageWidth on component mount and on window resize
    useEffect(() => {
        updateImageWidth();
        window.addEventListener('resize', updateImageWidth);
        return () => window.removeEventListener('resize', updateImageWidth);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    return (
        <div className="deal-slider">
            <div className="deal-slider-wrapper">
                <div className="deal-slider-images" style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}>
                    {images.map((image, index) => (
                        <a key={index} href={imageUrls[index]} target="_blank" rel="noopener noreferrer" className="deal-slider-link">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </a>
                    ))}
                </div>
            </div>

            <button className="deal-slider-button deal-slider-button-left" onClick={prevImage}>
                &#10094; {/* Left arrow */}
            </button>

            {/* Left fade effect */} 
            <div className="deal-slider-fade-left" />

            <button className="deal-slider-button deal-slider-button-right" onClick={nextImage}>
                &#10095; {/* Right arrow */}
            </button>
            
            {/* Right fade effect */}
            <div className="deal-slider-fade-right" />
        </div>
    );
};

export default DealoftheDay;
