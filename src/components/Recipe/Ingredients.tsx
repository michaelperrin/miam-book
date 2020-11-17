import React from 'react';

type Props = {
  ingredients: Ingredient[],
};

type Ingredient = {
  name: string;
  number?: string;
  quantity: string;
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
