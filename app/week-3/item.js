import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2">
      <span className="font-bold text-xl flex flex-col">{name}</span>
      <span className="text-sm text-white-500 ">Buy {quantity} in </span>
      <span className="text-sm text-white-500">{category}</span>
      
    </li>
  );
};

export default Item;
