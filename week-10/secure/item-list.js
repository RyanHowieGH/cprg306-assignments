"use client"

import Item from "./item.js";
import { useEffect, useState } from "react";
// import items from "./items.json";

export default function ItemList({items}) {
  // let itemList = [...items];
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([...items]);

  // useEffect(() => {
  //   sortItems();
  // }, [items, sortby]);

  // const sortItems = () => {
  //   let sortedList = [...items];
  //   if (sortby === "name") {
  //     sortedList.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (sortby === "category") {
  //     sortedList.sort((a, b) => a.category.localeCompare(b.category));
  //   }
  //   setSortedItems(sortedList);
  // };

  useEffect(() => {
    // Create a copy of the items array to avoid mutating the original prop
    let sortedList = [...items];

    // Sort the list based on the current `sortBy` state
    if (sortBy === "name") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      sortedList.sort((a, b) => a.category.localeCompare(b.category));
    }

    // Update the sortedItems state
    setSortedItems(sortedList);
  }, [items, sortBy]); // Re-run the effect when `items` or `sortBy` changes

  return (
    <main>
      <button className = "bg-slate-200 font-bold m-4 p-4 rounded-md" onClick={() => (setSortBy("name"))}>Sort by Name</button>
      <button className = "bg-slate-200 font-bold m-4 p-4 rounded-md" onClick={() => (setSortBy("category"))}>Sort by Category</button>
      <h1 className="font-bold text-3xl p-4 text-slate-200">Shopping List</h1>
      {sortedItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </main>
  );
}

