"use client";
import React, { useState } from 'react';
import Item from './item'; 

const ItemList = ({items, onItemSelect}) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); 
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category); 
    }
    return 0; 
  });

  return (
    <div>      
      <div>
        <button className='bg-slate-500 text-black rounded-lg p-3 m-4 active:bg-slate-600 '
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button className='bg-slate-500 text-black rounded-lg p-3 m-4 active:bg-slate-600'
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul className="max-w-2xl mx-auto p-2">
        {sortedItems.map(item => (
          <li key={item.id} className="mb-3 bg-gray-900 rounded-lg hover:bg-orange-600 cursor-pointer">
              <Item
                item={item}
                onSelect={onItemSelect}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
