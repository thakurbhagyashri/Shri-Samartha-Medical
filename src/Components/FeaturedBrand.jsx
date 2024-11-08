import React from 'react';
import FeatureBrand1 from "../Images/FeatureBrand1.png";
import FeatureBrand2 from "../Images/FeatureBrand2.png";
import FeatureBrand3 from "../Images/FeatureBrand3.png";
import FeatureBrand4 from "../Images/FeatureBrand4.png";

const FeatureBrands = () => {
  const images = [FeatureBrand1, FeatureBrand2, FeatureBrand3, FeatureBrand4];

  return (
    <div className="flex justify-center gap-5">
      {images.map((image, index) => (
        <div key={index} className="w-50 h-20 mx-10 my-5">
          <img src={image} alt={`Feature Brand ${index + 1}`} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
};

export default FeatureBrands;
