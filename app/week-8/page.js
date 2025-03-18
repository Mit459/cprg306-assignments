"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import {useState} from "react";
import MealIdeas from "./meal-ideas";

export default function App(){
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedName] = useState("");

  const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
  };

  const handleItemSelect = (item) =>{
      let cleanName = item.name.split(',')[0].trim(); 
      cleanName = cleanName.replace(/[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}|\u{2300}-\u{23FF}|\u{2B50}]/gu, '');
      setSelectedName(cleanName);
  };

  return (
    <div className="max-w-full p-3">
      <h1 className="text-4xl font-bold mb-2">Shopping List</h1>
      <div className="flex space-x-8">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          {selectedItemName && (
            <div className="mt-4">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}