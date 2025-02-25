"use client";

import {useState} from "react";

export default function NewItem() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    if (count > 9) {
        return (
            <main className="flex justify-center align-bottom w-48 h-24 bg-gray-200">
            <div><p className="w-4 h-4 text-3xl m-4" >{count}</p></div>
            <div><button className="w-10 h-10 bg-gray-500 text-3xl m-4 rounded-md "onClick={increment} disabled>+</button></div>
            <div><button className="w-10 h-10 bg-blue-400 text-3xl m-4 rounded-md" onClick={decrement}>-</button></div>
        </main>
        );
    }
    if (count < 1) {
        return (
            <main className="flex justify-center align-bottom w-48 h-24 bg-gray-200">
            <div><p className="w-4 h-4 text-3xl m-4" >{count}</p></div>
            <div><button className="w-10 h-10 bg-blue-400 text-3xl m-4 rounded-md "onClick={increment}>+</button></div>
            <div><button className="w-10 h-10 bg-gray-500 text-3xl m-4 rounded-md "onClick={decrement} disabled>-</button></div>
        </main>
        );
    }
    return (
        <main className="flex justify-center align-bottom w-48 h-24 bg-gray-200">
            <div><p className="w-4 h-4 text-3xl m-4" >{count}</p></div>
            <div><button className="w-10 h-10 bg-blue-400 text-3xl m-4 rounded-md" onClick={increment}>+</button></div>
            <div><button className="w-10 h-10 bg-blue-400 text-3xl m-4 rounded-md" onClick={decrement}>-</button></div>
        </main>
    );
}
