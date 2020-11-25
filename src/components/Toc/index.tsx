import React from 'react';
import chunk from '../../utils/chunk';
import Recipe from './Recipe';

const RECIPES_PER_PAGE = 16;

type Props = {
  recipes: any[],
};

const Toc = ({ recipes }: Props) => (
  <>
    {chunk(recipes, RECIPES_PER_PAGE).map((pageRecipes: any[]) => (
      <div className="toc-chunk">
        {pageRecipes.map((recipe: any) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    ))}
  </>
);

export default Toc;
