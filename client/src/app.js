import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game.jsx';
import characters from '../build/guessWhoCharacters.js';
import questions from '../build/questions.js';


window.onload = function(){
  ReactDOM.render(
    <Game characters={characters} questions={questions}/>,
    document.getElementById('app')
  );
}
