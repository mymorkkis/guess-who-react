import React from 'react';

const Cell = function(character) {
  return(<div className="cell" id={`character${character.index}`}>
    <img src={character.character.picture}/>{character.character.name}</div>)
};

export default Cell;