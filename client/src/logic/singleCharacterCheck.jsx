import React from 'react';

const singleCharacterCheck = function(game, guessedCharacter, actualCharacter, grid, addToGuesses) {
  
  if (guessedCharacter === actualCharacter) {
    grid[guessedCharacter].picture = '/guess_who_players/me.png';
    grid[guessedCharacter].name = "It's me blud!!!!!";
  } else {
    grid[guessedCharacter].picture = '/guess_who_players/x.png';
    grid[guessedCharacter].name = 'Not me blud!';
  }

  game.setState({
    startGrid: grid,
    guesses: addToGuesses
  })
};

export default singleCharacterCheck;