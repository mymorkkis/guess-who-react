import React from 'react';

const Cell = function(character) {
  return(
    <div className="cell" onClick={character.onClick}>
      <img src={character.character.picture}/>
      <p>{character.character.name}</p>
      <button value={character.index}>Is it me?</button>
    </div>)
};

export default Cell;