import React from "react";
import CategoryItem from "../category/CategoryItem";
import "./categoryList.scss";
const CategoryList = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
