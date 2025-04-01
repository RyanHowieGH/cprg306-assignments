'use client';

import ItemList from '../week-8/item-list.js';
import NewItem from '../week-8/new-item.js';
import ItemsData from './items.json';
import React, { useState } from 'react';
import { MealIdeas } from './meal-ideas.js';

export default function Page(){

    
    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    
    const handleItemSelect = (item) => {
        console.log(item.name);
    let name = String(item.name);
    name = name.split(',')[0];
    console.log(name);
    name = name.replace(/[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1FAFF}]/gu, '');
    console.log(name);
    name = name.replace(/[0-9\s.,]+$/, '');
    console.log(name);
    name = name.replace(/\s+/g, '_');
    console.log(name);
        setSelectedItemName(name);
    }

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    // return (
    //     <main className="bg-gray-800">
    //         <NewItem onAddItem={handleAddItem}/>
    //         <ItemList items={items} onItemSelect={handleItemSelect}/>
    //     </main>
    // )
    return (
        <main className="flex items-center place-content-center flex-col">
          <h1 className="font-bold text-4xl ml-4 pb-5 pt-2">Shopping List</h1>
          <div className="flex flex-row align-top">
            <div className="flex flex-col items-center">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </main>
      );
    
}