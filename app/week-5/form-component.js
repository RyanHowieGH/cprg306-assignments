import form from 'react';


export default function FormComponent() {
    return(
    <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" required />
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
    );
}
    
function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    const category = event.target.category.value;

    const newItem = {
        name: name,
        quantity: quantity,
        category: category,
    };

    console.log(newItem);
    alert("New item added: " + name + " " + quantity + " " + category);
    event.target.reset();
}