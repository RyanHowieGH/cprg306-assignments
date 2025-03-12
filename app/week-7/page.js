'use client';

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import ItemsData from './items.json';
import React, { useState } from 'react';

export default function Page(){

    
    const [items, setItems] = useState(ItemsData);
    
    
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    return (
        <main className="bg-gray-800">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}