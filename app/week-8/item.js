import React from "react";

const Item = ({ item, onSelect }) => {
  const handleClick = () => {
    onSelect(item);
  };
  return (
    <div className="p-2" onClick={handleClick}>
      <span className="font-bold text-xl flex flex-col">{item.name}</span>
      <span className="text-sm text-white-500 ">Buy {item.quantity} in </span>
      <span className="text-sm text-white-500">{item.category}</span>
    </div>
  );
};

export default Item;
