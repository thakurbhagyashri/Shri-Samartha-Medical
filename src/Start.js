import React from 'react';
import Header from './Components/Header/Header';
import ScrollImages from './Components/ScrollImages/ScrollImages';
import FeatureBrands from './Components/FeaturedBrand/FeaturedBrand';
import Dealoftheday from './Components/DealoftheDay/DealoftheDay';

const Start = () => {    return (
        <>
            <Header />
            <ScrollImages />
            <FeatureBrands/>
            <h2 className="title">
                Deal Of The Day
            </h2>
            <Dealoftheday/>
            <h2 className="title ">
                Shop By Category
            </h2>
        </>
    );
};

export default Start;
