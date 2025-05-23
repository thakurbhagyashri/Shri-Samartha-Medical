import React from "react";
import { Link } from "react-router-dom";
import Category from "./Components/Categories/Categories";
import FeatureBrands from "./Components/FeaturedBrand/FeaturedBrand";
import ScrollImages from "./Components/ScrollImages/ScrollImages";
import Search from "./Components/Search/Search";
import ShopByCategory from "./Components/ShopByCategory/ShopByCategory";
import TrustedPharmacy from "./Components/TrustedPharmacy/TrustedPharmacy";
import AdDevices from "./Images/AdDevices.png";
import ads from "./Images/Ads.png";

const Start = () => {

    return (
        <>
            <Search />
            <Category />
            <ScrollImages />
            <FeatureBrands />

            {/* <h2 className="title font-custom">Deal Of The Day</h2> */}
            {/* <DealoftheDay /> */}
            {/* <h2 className="title font-custom">Shop By Category</h2> */}
            {/* Add Cart component here */}
            <ShopByCategory />

            {/* <h2 className="title font-custom">Popular Category</h2> */}
            {/* Add Cart component here */}
            {/* <PopularCategory /> */}
            
            {/* Full-width ad image */}
            <img src={ads} alt="Advertisement" className="full-width-ad" />

            <h2 className="title font-noto">Trending Products</h2>
            {/* Add Cart component here */}
            {/* <TrendingProducts /> */}
           

            <div className="card font-noto">
                    <img src={AdDevices} alt="Product Image" className="card-image" />
             
                <p className="card-text">Flat 25% Off Medicine Order</p>
               <Link to="all-categories"><button className="card-button">Shop Now</button></Link> 
            </div>

            {/* Image with custom margins, shadow, and overlay text */}
            {/* <div className="trusted-pharmacy-container ml-5 mr-5 ">
                <img
                    src={BgPharma}
                    alt="Trusted Pharmacy"
                    style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                    className="trusted-pharmacy-image "
                />
                <span className="trusted-pharmacy-text font-semibold">
                    INDIA’S MOST TRUSTED ONLINE PHARMACY
                </span>
            </div>
            <div className="ml-[100px] mr-40">
                <div className="flex ">
                    <div className="bg-white flex-[7]">
                        <h2 className="text-blue text-1xl  mb-4">
                            Quick order with prescription
                        </h2>

                        <h1 className="text-3xl  mb-5">
                            How to order medicines on Shree Samarth Pharmacy? It’s
                            Simple.
                        </h1>

                        <ul className="list-disc list-inside mb-6 space-y-1 text-xl text-gray-700 ml-10">
                            <li>Upload valid Prescription</li>
                            <li>Receive a confirmation call</li>
                            <li>Delivery at your door step</li>
                        </ul>

                        <p className="text-green-700  text-2xl mb-6">
                            Don’t have Prescription? Don’t worry!
                            <br />
                            <span className="text-gray-700">
                                Simply search & add the medicines.
                            </span>
                        </p>
                    </div>
                    <div className="flex-[3]">
                        <img
                            src={Reason}
                            alt="Trusted Pharmacy"
                            style={{ height: '80%', width: '100%', objectFit: 'cover' }}
                            className="trusted-pharmacy-image m-10 p-5 rounded-xl "
                        />
                    </div>
                </div>

                <h3 className="text-3xl font-500 mb-10">Why Shree Samarth Pharmacy</h3>

                <div className="grid grid-col-1-1 md:grid-col-2 lg:grid-cols-2 gap-4 mb-5">
                    <div className="flex m-3">
                        <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-5 mb-2">
                            <span className="text-1xl">💰</span>
                        </div>
                        <div className="flex-row">
                        <h4 className=" text-2xl">Maximize Your Savings</h4>
                        <p className="text-gray-600 text-sm  ">
                            With FlexiRewards. Choose the Reward cash discount or free goods.
                        </p>
                        </div>
                    </div>

                    <div className="flex m-3">
                        <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-5 mb-2">
                            <span className="text-1xl">🛒</span>
                        </div>
                        <div className="flex-row">
                        <h4 className=" text-2xl">Click and Pick</h4>
                        <p className="text-gray-600 text-sm  ">
                        Click to buy a range of products across categories.
                        </p>
                        </div>
                    </div>

                    <div className="flex m-3">
                        <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-5 mb-2">
                            <span className="text-1xl">🏠</span>
                        </div>
                        <div className="flex-row">
                        <h4 className=" text-2xl">Home Delivery</h4>
                        <p className="text-gray-600 text-sm ">
                            We offer convenient home delivery ofmedicines & general goods.
                        </p>
                        </div>
                    </div>

                    <div className="flex m-3">
                        <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-5 mb-2">
                            <span className="text-1xl">📋</span>
                        </div>
                        <div className="flex-row">
                        <h4 className=" text-2xl">Unlimited Health Records</h4>
                        <p className="text-gray-600 text-sm ">
                        Save all your health records (Prescriptions,Medical....)
                        </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <TrustedPharmacy />
        </>
    );
};

export default Start;
