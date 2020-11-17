import React from 'react';
import Ingredients from './components/Recipe/Ingredients';
import Picture from './components/Recipe/Picture';
import PreparationTimes from './components/Recipe/PreparationTimes';
import Steps from './components/Recipe/Steps';

const Recipe = ({ recipe }: any) => {
  return (
    <article className="recipe" id={ recipe.slug }>
      <header className="page">
        <h1>
          {recipe.title}
        </h1>

        <PreparationTimes
          preparationTime={recipe.duration_times.preparation}
          cookingTime={recipe.duration_times.cooking}
          totalTime={recipe.duration_times.total}
        />

        <Picture url={recipe.pictures[0].url} />

        <div className="ingredients">
          <p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
            Pour 2 personnes :
          </p>

          <Ingredients ingredients={recipe.ingredients} />
        </div>
      </header>

      <div className="content page">
        <div className="steps">
          <Steps steps={recipe.steps} />
        </div>
      </div>
    </article>
  );
}

export default Recipe;
