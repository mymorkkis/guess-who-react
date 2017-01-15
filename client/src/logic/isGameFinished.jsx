import React from 'react';

const isGameFinished = function(game, currentGuesses) {
  const previousBestScore = game.bestScore;

  game.state.startGrid.forEach(function(character) {
    if (character.name === "It's me blud!!!!!") {
      if (currentGuesses < previousBestScore) {
        localStorage.setItem('bestScore', JSON.stringify(currentGuesses));
      }
      gameFinished(game)
    }
  })
}

const gameFinished = function(game) {
  game.state.startGrid.forEach(function(character) {
    if (character.name !== "It's me blud!!!!!") {
      game.state.startGrid[character.id].picture = '/guess_who_players/x.png';
      game.state.startGrid[character.id].name = 'Not me blud!';
    }
  })
}

export default isGameFinished;