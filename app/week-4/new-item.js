'use client';

import { useState } from "react";

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="items-center space-x-4">
            <button onClick={decrement} disabled={quantity == 1}
                className="px-4 py-2 bg-blue-500 text-black rounded-full disabled:bg-gray-300 hover:bg-black hover:text-white disabled:hover:text-black">
                -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>
            <button onClick={increment} disabled={quantity == 20}
                className="px-4 py-2  bg-blue-500 text-black rounded-full disabled:bg-gray-300 hover:bg-black hover:text-white disabled:hover:text-black">
                +
            </button>
        </div>
    );
};

export default NewItem;
