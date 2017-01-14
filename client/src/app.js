import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game.jsx';
import Characters from '../build/guessWhoCharacters';


window.onload = function(){
  ReactDOM.render(
    <Game characters={Characters}/>,
    document.getElementById('app')
  );
}
