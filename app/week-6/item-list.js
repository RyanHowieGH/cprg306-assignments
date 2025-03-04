"use client"

import Item from "./item.js";
import { useState } from "react";
import {items} from "./items.json";
// import items from "./items.json";
// import {sortby} from "./sortby.js";
// import {Item} from "./items.js";
// import {items} from "./items.js";

export default function ItemList() {
  const [sortby, setSortBy] = useState("name");
  const [Item, setItem] = useState(items);

  const sortedItems = (criteria) => {
    if (criteria === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "category") {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }
    setItem(sortedItems)
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    sortedItems(criteria);
  };

  return (
    <main>
      <button onClick={() => handleSort("name")}>Sort by Name</button>
      <button onClick={() => handleSort("category")}>Sort by Category</button>
      <h1 className="font-bold text-3xl p-4 text-slate-200">Shopping List</h1>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </main>
  );
}

//   const sortedItems = [...Item];

//   if (sortby === "name" ){
//     sortedItems.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortby === "category") {
//     sortedItems.sort((a, b) => a.category.localeCompare(b.category));
//   }

//   return (
//     <main>
//     <button onClick={() => setSortBy("name")}>Sort by Name</button>
//     <button onClick={() => setSortBy("category")}>Sort by Category</button>
//     <h1 className="font-bold text-3xl p-4 text-slate-200">Shopping List</h1>
//     {sortedItems.map((item, index) => (
//       <Item key={index} {...item} />
//     ))}
//     </main>
//   )
// }

// import Item from "./item.js";
// export default function ItemList() {
//   const item1 = {
//     name: "milk, 4 L 🥛",
//     quantity: 1,
//     category: "dairy",
//   };

//   const item2 = {
//     name: "bread 🍞",
//     quantity: 2,
//     category: "bakery",
//   };

//   const item3 = {
//     name: "eggs, dozen 🥚",
//     quantity: 2,
//     category: "dairy",
//   };

//   const item4 = {
//     name: "bananas 🍌",
//     quantity: 6,
//     category: "produce",
//   };

//   const item5 = {
//     name: "broccoli 🥦",
//     quantity: 3,
//     category: "produce",
//   };

//   const item6 = {
//     name: "chicken breasts, 1 kg 🍗",
//     quantity: 1,
//     category: "meat",
//   };

//   const item7 = {
//     name: "pasta sauce 🍝",
//     quantity: 3,
//     category: "canned goods",
//   };

//   const item8 = {
//     name: "spaghetti, 454 g 🍝",
//     quantity: 2,
//     category: "dry goods",
//   };

//   const item9 = {
//     name: "toilet paper, 12 pack 🧻",
//     quantity: 1,
//     category: "household",
//   };

//   const item10 = {
//     name: "paper towels, 6 pack",
//     quantity: 1,
//     category: "household",
//   };

//   const item11 = {
//     name: "dish soap 🍽️",
//     quantity: 1,
//     category: "household",
//   };

//   const item12 = {
//     name: "hand soap 🧼",
//     quantity: 4,
//     category: "household",
//   };

//   return (
//     <>
//       <h1 className="font-bold text-3xl p-4 text-slate-200">Shopping List</h1>
//       <Item {...item1} />
//       <Item {...item2} />
//       <Item {...item3} />
//       <Item {...item4} />
//       <Item {...item5} />
//       <Item {...item6} />
//       <Item {...item7} />
//       <Item {...item8} />
//       <Item {...item9} />
//       <Item {...item10} />
//       <Item {...item11} />
//       <Item {...item12} />
//     </>
//   );
// }
