import React from 'react';

const InsightCategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <>
      <div className="category-filter">
        <select 
          value={selectedCategory} 
          onChange={(e) => onSelectCategory(e.target.value)} 
          className="form-select mt-4 d-flex d-md-none">
          <option value="all">View all</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="category-buttons d-none d-md-flex flex-column mt-4">
          <button 
            key="all" 
            onClick={() => onSelectCategory("all")} 
            className={selectedCategory === "all" ? 'btn btn-light border-0 text-start active' : 'btn btn-light border-0 text-start'}>
            View all
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              onClick={() => onSelectCategory(category)} 
              className={selectedCategory === category ? 'btn btn-light border-0 text-start active' : 'btn btn-light border-0 text-start'}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default InsightCategoryFilter;
