import React from 'react';
import logo2 from './Images/logo.png';
import ScrollImages from './Components/ScrollImages';
import ImageSection from './Components/ImageSections';

const Header = () => {
    const images = [
        require("./Images/scroll0.png"), 
        require("./Images/scroll1.png"), 
        require("./Images/Frame 9.png"), 
        require("./Images/Frame 12.png")
    ]; // Array of images to pass

    return (
        <>
            <header className="header flex flex-wrap items-center justify-between max-w-[1728px] w-full mx-auto p-5">
                <img src={logo2} alt="Logo" className="logo h-16 sm:h-20" />
                <nav className="nav-links flex flex-wrap gap-4 sm:gap-8">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-300">About Us</a>
                    <a href="#products" className="hover:text-gray-300">Products</a>
                    <a href="#contact" className="hover:text-gray-300">Contact Us</a>
                </nav>
                <button className="button sign-up-button">Sign Up</button>
            </header>
            <div className="second-frame text-center py-4">
                <h2>2</h2>
            </div>
            <div className="w-full h-[118px] bg-[#2BA9D8] mx-auto flex items-center justify-center">
                <div className="w-full max-w-[1657px] font-bold flex items-center justify-around py-3">
                    <a href="#homeopathy" className="text-white no-underline hover:text-gray-300">Homeopathy</a>
                    <a href="#fitness" className="text-white no-underline hover:text-gray-300">Fitness</a>
                    <a href="#personal-care" className="text-white no-underline hover:text-gray-300">Personal Care</a>
                    <a href="#ayurvedic" className="text-white no-underline hover:text-gray-300">Ayurvedic</a>
                    <a href="#skin-care" className="text-white no-underline hover:text-gray-300">Skin Care</a>
                    <a href="#senior-care" className="text-white no-underline hover:text-gray-300">Senior Care</a>
                    <a href="#other" className="text-white no-underline hover:text-gray-300">Other</a>
                </div>
            </div>
            <ScrollImages />
            <h2 className="w-[638px] ml-[36px] font-bold ">
    Deal Of The Day
</h2>


            <div className="mt-[100px]">
    <ImageSection /> {/* Pass the images array as props */}
</div>
<h2 className="w-[638px] ml-[36px] font-bold ">
Shop By Category
</h2>

        </>
    );
};

export default Header;
