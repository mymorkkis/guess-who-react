import React from 'react';

const Cell = function(character) {
  console.log(character)
  return(<div className="cell">
    <img src={character.character.picture}/>{character.character.name}</div>)
};

export default Cell;