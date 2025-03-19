'use client';

import ItemList from '../week-7/item-list.js';
import NewItem from '../week-7/new-item.js';
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