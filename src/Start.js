import React from 'react';
import Header from './Components/Header/Header';
import ScrollImages from './Components/ScrollImages/ScrollImages';
import FeatureBrands from './Components/FeaturedBrand/FeaturedBrand';
import Dealoftheday from './Components/DealoftheDay/DealoftheDay';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart'; 
import ads from './Images/Ads.png';
import BgPharma from './Images/BgPharma.png';

const Start = () => {    
    return (
        <>
            <Header />
            <ScrollImages />
            <FeatureBrands />
            <h2 className="title">
                Shop By Category
            </h2>
            {/* Add Cart component here */}
            <Cart />

            <h2 className="title">
                Deal Of The Day
            </h2>
            <Dealoftheday />

           <h2 className="title">
                Popular Category
            </h2>
            {/* Add Cart component here */}
            <Cart />
            {/* Full-width ad image */}
            <img src={ads} alt="Advertisement" className="full-width-ad" />

            <h2 className="title">
                Trending Products
            </h2>
            {/* Add Cart component here */}
            <Cart />

              {/* Image with custom margins, shadow, and overlay text */}
              <div className="trusted-pharmacy-container">
                <img src={BgPharma} alt="Trusted Pharmacy" className="trusted-pharmacy-image" />
                <span className="trusted-pharmacy-text">INDIA’S MOST TRUSTED ONLINE PHARMACY</span>
            </div>

            {/* Footer goes below Cart */}
            <Footer />
        </>
    );
};

export default Start;
