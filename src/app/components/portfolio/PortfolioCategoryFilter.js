import React from 'react';

const PortfolioCategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
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
        <div className="category-buttons d-none d-md-flex flex-column flex-md-row mt-4">
          <button 
            key="all" 
            onClick={() => onSelectCategory("all")} 
            className={selectedCategory === "all" ? 'btn rounded-2 border-0 text-start active flex-grow-1' : 'btn btn-white rounded-2 border-0 text-start flex-grow-1'}>
            View all
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              onClick={() => onSelectCategory(category)} 
              className={selectedCategory === category ? 'btn rounded-2 border-0 text-start active flex-grow-1' : 'btn btn-white rounded-2 border-0 text-start flex-grow-1'}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioCategoryFilter;
