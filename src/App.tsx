import React from 'react';
import './App.css';
import recipe from './recipes/dahl-de-lentilles-corail-au-potimarron-et-amandes/recipe.json';
import Recipe from './Recipe';

function App() {
  return (
    <div className="App">
      <Recipe recipe={recipe} />
    </div>
  );
}

export default App;
