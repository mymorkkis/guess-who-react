import React from 'react';

const Character = function(props) {
  return(
    <div className="character">
      <img src={props.character.picture}/>
      <p>{props.character.name}</p>
      <button value={props.index} onClick={props.onClick}>Is it me?</button>
    </div>)
};

export default Character;