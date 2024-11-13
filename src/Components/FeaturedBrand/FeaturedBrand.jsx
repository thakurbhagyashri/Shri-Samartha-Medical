import React from 'react';
import FeatureBrand1 from "../../Images/FeatureBrand1.png";
import FeatureBrand2 from "../../Images/FeatureBrand2.png";
import FeatureBrand3 from "../../Images/FeatureBrand3.png";
import FeatureBrand4 from "../../Images/FeatureBrand4.png";
import './FeaturedBrand.css'; // Import the CSS file

const FeatureBrands = () => {
  const images = [FeatureBrand1, FeatureBrand2, FeatureBrand3, FeatureBrand4];

  return (
    <div className="feature-brands-container">
      {images.map((image, index) => (
        <div key={index} className="feature-brand">
          <img src={image} alt={`Feature Brand ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default FeatureBrands;
