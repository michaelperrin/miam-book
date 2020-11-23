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

  const indexByLetter: any = {};

  for (const ingredient in ingredientIndex) {
    let ingredientLetter: string = ingredientIndex[ingredient].ingredient.name.charAt(0);

    if (ingredientLetter === 'É' || ingredientLetter === 'È') {
      ingredientLetter = 'E';
    }

    if (indexByLetter[ingredientLetter] === undefined) {
      indexByLetter[ingredientLetter] = [];
    }

    indexByLetter[ingredientLetter].push(ingredientIndex[ingredient]);
  }

  return indexByLetter;
};

const renderLetteredIndex = (recipes: Array<any>) => {
  const index = getIngredientIndex(recipes);

  const renderedIndex = [];

  const letters = Object.keys(index).sort();

  for (const letter of letters) {
    renderedIndex.push(
      <div>
        <div className="letter">{letter}</div>

        {renderIndex(index[letter])}
      </div>
    )
  }

  return renderedIndex;
};

const renderIndex = (index: any) => {
  const renderedIndex = [];

  for (const ingredient in index) {
    renderedIndex.push(
      <div>
        <span className="ingredient-name">{index[ingredient].ingredient.name}</span>

        {index[ingredient].recipeSlugs.map((slug: string) => (
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
      {renderLetteredIndex(recipes)}
    </div>
  );
}

export default Index;
