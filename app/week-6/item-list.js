"use client"

import Item from "./item.js";
import { useEffect, useState } from "react";
import items from "./items.json";

export default function ItemList() {
  let itemList = [...items];
  const [sortby, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([...itemList]);

  useEffect(() => {
    sortItems();
  }, [sortby]);

  const sortItems = () => {
    if (sortby === "name") {
      itemList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortby === "category") {
      itemList.sort((a, b) => a.category.localeCompare(b.category));
    }
    setSortedItems([...itemList]);
  };
  return (
    <main>
      <button className = "bg-slate-200 font-bold m-4 p-4 rounded-md" onClick={() => (setSortBy("name"), sortItems())}>Sort by Name</button>
      <button className = "bg-slate-200 font-bold m-4 p-4 rounded-md" onClick={() => (setSortBy("category"), sortItems())}>Sort by Category</button>
      <h1 className="font-bold text-3xl p-4 text-slate-200">Shopping List</h1>
      {sortedItems.map((items) => (
        <Item key={items.id} {...items} />
      ))}
    </main>
  );
}

