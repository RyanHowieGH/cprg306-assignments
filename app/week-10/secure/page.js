"use client";

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import ItemsData from './items.json';
import React, { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import  Link  from "next/link";

export default function Page(){

    
    const [items, setItems] = useState(ItemsData);
    
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    return (
        <main>
            {!user && (
        <main><p>You are not logged in. Please sign in to continue.</p>
        <p><Link href="../week-9/">Go to login page</Link></p></main>
        )}
        {user && (
        <main className="bg-gray-800">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
        )}
        </main>
    )
}