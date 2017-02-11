import React from 'react';

const singleCharacterCheck = function(grid, guessedCharacter, actualCharacter) {
  
  if (guessedCharacter === actualCharacter) {
    grid[guessedCharacter].picture = '/guess_who_players/me.jpg';
    grid[guessedCharacter].name = "It's me!!!!!";
  } else {
    grid[guessedCharacter].picture = '/guess_who_players/x.jpg';
    grid[guessedCharacter].name = 'Not me!!!';
  }
  
  return grid;

};

export default singleCharacterCheck;