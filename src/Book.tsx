import React from 'react';
import Recipe from './Recipe';

const Book = ({ recipes }: any) => {
  return (
    <div className="Book">
      <div className="recipes">
        {recipes.map((recipe: any) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Book;
