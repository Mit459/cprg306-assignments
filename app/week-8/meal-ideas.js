"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setMeals(data.meals || []);
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  let mealContent;
  if (meals.length > 0) {
    mealContent = (
      <ul className="space-y-3">
        {meals.map(meal => (
          <li key={meal.idMeal} className="bg-gray-900 p-4 rounded-lg hover:bg-orange-600 cursor-pointer">
            <h3>{meal.strMeal}</h3>
          </li>
        ))}
      </ul>
    );
  } else {
    mealContent = (
      <p className="text-sm text-gray-400">No meal ideas found for {ingredient}</p>
    );
  }

  let message;
  message = `Here are some meal ideas using ${ingredient}`;

  return (
    <div className="max-w-3xl p-6 text-white bg-gray-600 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-2">Meal Ideas</h1>
      <h2 className="text-sm font-semibold text-white mb-6">{message}</h2>
      {mealContent}
    </div>
  );
};

export default MealIdeas;
