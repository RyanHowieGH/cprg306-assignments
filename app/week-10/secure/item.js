export default function Item ({name, quantity, category}){
    return (
    <main>
        <ul>
            <li className="px-4 bg-slate-200 max-w-sm capitalize font-bold">{name}</li>
            <li className="px-4 bg-slate-200 max-w-sm">{quantity}</li>
            <li className="px-4 bg-slate-200 max-w-sm mb-4">{category}</li>
        </ul>
    </main>
    )
}