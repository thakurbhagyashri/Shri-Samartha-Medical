import cartData from './PopularCategoryJs'; // Adjust the import path
import './PopularCategory.css';

const PopularCategory = () => {
  return (
    <div className="popular-category-container">
      {cartData.map((category) => (
        <a key={category.id} href="#" className="category-link">
          <img src={category.imageUrl} alt={category.title} className="category-image" />
        </a>
      ))}
    </div>
  );
};

export default PopularCategory;
