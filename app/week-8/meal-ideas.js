"use-client"
import { useEffect, useState } from "react"



async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }


export function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const newMeals = await fetchMealIdeas(ingredient);
        setMeals(newMeals);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <>
        {ingredient && (
        <div className="meal-ideas">
            <h2>Meal Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
                    </li>
                ))}
            </ul>
        </div>
        )}
        </>
    );
}


