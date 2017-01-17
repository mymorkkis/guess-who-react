import React from 'react';

const Character = function(props) {
  return(
    <div className="character" onClick={props.onClick}>
      <img src={props.character.picture}/>
      <p>{props.character.name}</p>
      <button value={props.index}>Is it me?</button>
    </div>)
};

export default Character;