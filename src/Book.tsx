import React from 'react';
import Cover from './components/Cover';
import Index from './components/Index';
import Toc from './components/Toc';
import Recipe from './Recipe';

const Book = ({ recipes }: any) => {
  return (
    <div className="Book">
      <Cover recipe={recipes[0]} />

      <div className="page" />
      <div className="page" />

      <div className="toc">
        <Toc recipes={recipes} />
      </div>

      <div className="recipes">
        {recipes.map((recipe: any) => (
          <Recipe recipe={recipe} />
        ))}
      </div>

      <div>
        <Index recipes={recipes} />
      </div>

      <div className="page" />
      <div className="page" />

      <div className="back-page">
        <p>
          Noël 2020 - De la part de Michaël et Véronique
        </p>
      </div>
    </div>
  );
}

export default Book;
