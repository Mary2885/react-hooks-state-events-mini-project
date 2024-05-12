import React from "react";

function CategoryFilter({ categories, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
    </div>
  );
}

export default CategoryFilter;