import { useState } from "react";

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1)
  const [category, setCategory] = useState("produce")

  const handleSubmit = () => {
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("")
    setQuantity("1");
    setCategory("produce");
  };
  const increment = (e) => {
    e.preventDefault();
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-amber-950 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-amber-300 text-center mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-sm text-amber-300 font-semibold">Name</label>
          <input className="text-black w-full rounded-lg p-1 mt-1 text-sm"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-amber-300 text-sm font-semibold">Quantity</label>
          <div className="items-center space-x-4">
            <button onClick={decrement} disabled={quantity == 1}
              className="px-4 py-2 bg-amber-500 text-white rounded-full disabled:bg-slate-700 hover:bg-amber-600">
              -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>
            <button onClick={increment} disabled={quantity == 20}
              className="px-4 py-2  bg-amber-500 text-white rounded-full disabled:bg-slate-700 hover:bg-amber-600">
              +
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm text-amber-300 font-semibold">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full rounded-lg p-2 mt-1 text-sm text-gray-700 placeholder-gray">
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-amber-700 text-white p-2 rounded mt-4 hover:bg-amber-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;



