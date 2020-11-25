import React from 'react';

const Cover = ({ recipe }: any) => {
  return (
    <div className="cover" style={{ backgroundImage: `url(${recipe.pictures[0].url})` }}>
      <h1>Carnet de recettes</h1>
    </div>
  );
}

export default Cover;
