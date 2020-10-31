import React from 'react';
import Ingredients from './components/Recipe/Ingredients';
import Picture from './components/Recipe/Picture';
import PreparationTimes from './components/Recipe/PreparationTimes';
import Steps from './components/Recipe/Steps';

const Recipe = ({ recipe }: any) => {
  return (
    <div className="recipe">
      {recipe.title}

      <PreparationTimes
        preparationTime={recipe.duration_times.preparation}
        cookingTime={recipe.duration_times.cooking}
        totalTime={recipe.duration_times.total}
      />

      <Picture url={recipe.pictures[0].url} />

      <div className="ingredients">
        <Ingredients ingredients={recipe.ingredients} />
      </div>

      <div className="steps">
        <Steps steps={recipe.steps} />
      </div>
    </div>
  );
}

export default Recipe;
