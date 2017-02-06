import React from 'react';
import Character from './Character.jsx';

const Board = function(props) {
  return(
    <div id="board">
      {props.characters.map(function(character, index) {
        return(<Character character={character} key={index} index={index}
          onClick={props.onButtonClick}></Character>)
      })}
    </div>
  )
};

export default Board;