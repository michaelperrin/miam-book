import React from 'react';
import TocRecipe from './components/Toc/Recipe';
import Recipe from './Recipe';

const Book = ({ recipes }: any) => {
  return (
    <div className="Book">
      <div className="toc">
        {recipes.map((recipe: any) => (
          <div className="recipe">
            <TocRecipe recipe={recipe} />
          </div>
        ))}
      </div>

      <div className="recipes">
        {recipes.map((recipe: any) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Book;
