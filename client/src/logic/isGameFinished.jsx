import React from 'react';

const isGameFinished = function(game, currentGuesses) {
  const previousBestScore = game.bestScore;
  console.log(currentGuesses)
  
  game.state.startGrid.forEach(function(character) {
    if (character.name === "It's me blud!!!!!") {
      if (currentGuesses > previousBestScore) {
        localStorage.setItem('bestScore', JSON.stringify(currentGuesses));
      }
    }
  })
};

export default isGameFinished;