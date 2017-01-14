import React from 'react';
import Cell from './Cell.jsx';

const Board = function(props) {
  return(
    <div>
      {props.characters.map(function(character, index) {
        return(<Cell character={character} key={index}></Cell>)
      })}
    </div>
  )
};

export default Board;