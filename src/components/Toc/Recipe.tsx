import React from 'react';
import Picture from '../Recipe/Picture';

const Recipe = ({ recipe }: any) => {
  return (
    <article className="recipe">
      <div className="recipe-content">
        <Picture url={recipe.pictures[0].url} />

        <a href={`#${recipe.slug}`} className="recipe-link">
          {recipe.title}
        </a>
      </div>
    </article>
  );
}

export default Recipe;
