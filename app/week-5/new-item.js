"use client";

import {use, useEffect, useState} from "react";

export default function NewItem() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [plusIsEnabled, setEnabledPlus] = useState(false);
    const [minusIsEnabled, setEnabledMinus] = useState(true);


    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    useEffect(() => {
        setEnabledPlus(count >= 9);
        setEnabledMinus(count <= 0);
    }, [count]);

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const itemCount = count;
        const category = event.target.category.value;
    
        const newItem = {
            name: name,
            count: itemCount,
            category: category,
        };
    
        console.log(newItem);
        alert("New item added: " + name + " " + count + " " + category);
        event.target.reset();
    
    }
    
    return (
        <main className="flex flex-col items-center bg-gray-200 p-4">
            <div className="flex justify-center items-center mb-4 w-full">
            <div><p className="justify-middle w-4 h-8 text-3xl m-4" >{count}</p></div>
            <div><button className="w-10 h-10 bg-blue-400 text-3xl m-4 rounded-md" onClick={increment} disabled={plusIsEnabled}>+</button></div>
            <div><button className="w-10 h-10 bg-blue-400 text-3xl m-4 rounded-md" onClick={decrement} disabled={minusIsEnabled}>-</button></div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
            <label htmlFor="name">Name:</label>
             <input type="text" id="name" name="name" required />
             <label htmlFor="category">Category:</label>
             <select id="category" name="category">
                 <option value="produce">Produce</option>
                 <option value="dairy">Dairy</option>
                 <option value="bakery">Bakery</option>
                 <option value="meat">Meat</option>
                 <option value="frozenFoods">Frozen Foods</option>
                 <option value="cannedGoods">Canned Goods</option>
                 <option value="dryGoods">Dry Goods</option>
                 <option value="beverages">Beverages</option>
                 <option value="snacks">Snacks</option>
                 <option value="household">Household</option>
                 <option value="other">Other</option>
             </select>
            <button type="submit">Add Item</button>
        </form>
        </main>
    );
}
 

