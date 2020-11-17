import React from 'react';
import recipe from './recipes/dahl-de-lentilles-corail-au-potimarron-et-amandes/recipe.json';
import Book from './Book';

function App() {
  return (
    <Book recipes={[ recipe ]} />
  );
}

export default App;
