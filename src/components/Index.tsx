import React from 'react';
import Ingredient from '../types/ingredient';

type IndexContent = {
  recipeSlugs: string[],
  ingredient: {
    name: string,
  }
};

type MyType = {
  [key: string]: IndexContent;
};

const getIngredientIndex = (recipes: Array<any>): MyType => {
  const ingredientIndex: MyType = {};

  recipes.forEach(recipe => {
    recipe.ingredients.forEach((ingredient: Ingredient) => {
      if (ingredientIndex[ingredient.name] === undefined) {
        ingredientIndex[ingredient.name] = {
          ingredient: {
            name: ingredient.name,
          },
          recipeSlugs: [],
        };
      }

      ingredientIndex[ingredient.name].recipeSlugs.push(recipe.slug);
    })
  });

  return ingredientIndex;
};

const renderIndex = (recipes: Array<any>) => {
  const index = getIngredientIndex(recipes);
  const renderedIndex = [];

  for (const ingredient in index) {
    renderedIndex.push(
      <div>
        <span className="ingredient-name">{index[ingredient].ingredient.name}</span>

        {index[ingredient].recipeSlugs.map(slug => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a href={`#${slug}`} />
        ))}
      </div>
    )
  }

  return renderedIndex;
}

const Index = ({ recipes }: any) => {
  return (
    <div className="index">
      {renderIndex(recipes)}
    </div>
  );
}

export default Index;
