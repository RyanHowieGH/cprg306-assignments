export default function Item({ itemProp, onSelect }) {
    return (
      <main>
        <ul className="hover:bg-slate-600 px-4 bg-slate-200 max-w-sm mb-4 capitalize font-bold"
          onClick={() => onSelect(itemProp)}
        >
          <li>{itemProp.name}</li>
          <li className="font-light">{itemProp.quantity}</li>
          <li className="font-light">{itemProp.category}</li>
        </ul>
      </main>
    );
  }
  