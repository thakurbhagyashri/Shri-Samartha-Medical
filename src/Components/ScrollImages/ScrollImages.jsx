import React, { useState, useEffect } from 'react';
import './ScrollImages.css'; // Import the CSS file

// Dynamically import all images from the 'Images' directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../Images', false, /scroll\d+\.png$/));

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
        <div className="scroll-container">
            <div className="scroll-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} className="scroll-image" />
                ))}
            </div>

            {/* Dots for navigation */}
            <div className="nav-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ScrollImages;
