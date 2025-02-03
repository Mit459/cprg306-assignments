'use client';

import NewItem from "./new-item";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-cyan-400 p-3 rounded-3xl">
        <h1 className="text-2xl font-semibold text-black text-center mb-2">Quantity</h1>
        <NewItem />
      </div>
    </div>
  );
}