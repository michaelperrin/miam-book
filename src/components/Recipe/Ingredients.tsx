import React from 'react';
import Ingredient from '../../types/ingredient';

type Props = {
  ingredients: Ingredient[],
};

const Ingredients = ({ ingredients }: Props) => {
  return (
    <ul>
      {ingredients.map((ingredient: Ingredient) => (
        <li>
          {ingredient.number && (
            <span className="number">{ingredient.number}</span>
          )}

          {ingredient.name}

          <span className="quantity">{ingredient.quantity}</span>
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
