import React from 'react';

const isGameFinished = function(grid, currentGuesses, bestScore) {

  grid.forEach(function(character) {
    if (character.name === "It's me!!!!!") {
      if (bestScore === 0 || currentGuesses < bestScore) {
        localStorage.setItem('bestScore', JSON.stringify(currentGuesses));
      }
      return gameFinished(grid);
    }
  })
  
  return grid;
}

const gameFinished = function(grid) {

  grid.forEach(function(character) {
    if (character.name !== "It's me!!!!!") {
      grid[character.id].picture = '/guess_who_players/x.png';
      grid[character.id].name = 'Not me!!!';
    }
  })

  return grid;
}

export default isGameFinished;