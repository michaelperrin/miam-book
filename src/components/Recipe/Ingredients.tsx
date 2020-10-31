import React from 'react';

type Props = {
  ingredients: Ingredient[],
};

type Ingredient = {
  name: string;
  quantity: string;
};

const Ingredients = ({ ingredients }: Props) => {
  return (
    <ul>
      {ingredients.map((ingredient: Ingredient) => (
        <li>
          {ingredient.name}
          {ingredient.quantity}
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
