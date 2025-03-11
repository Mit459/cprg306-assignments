"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import {useState} from "react";

export default function App(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return(
        <div className="max-w-md p-3">
            <h1 className="text-4xl font-bold mb-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </div>
    );
}