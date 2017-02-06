import React from 'react';
import Board from '../components/Board.jsx';
import QuestionSelector from '../components/QuestionSelector.jsx';
import singleCharacterCheck from '../functions/singleCharacterCheck.jsx';
import multipleCharacterCheck from '../functions/multipleCharacterCheck.jsx';
import questionDeleter from '../functions/questionDeleter.jsx'
import isGameFinished from '../functions/isGameFinished.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      grid: this.props.characters,
      questions: this.props.questions,
      guesses: 0
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.bestScore = JSON.parse(localStorage.getItem('bestScore') || 0);
    this.chosenCharacter = this.props.characters[Math.floor(Math.random()*this.props.characters.length)]
  }

  handleButtonClick(e) {
    const newGrid = this.state.grid.slice();
    const chosenCharacterId = this.chosenCharacter.id.toString();
    const value = e.target.value;
    const currentBestScore = this.bestScore
    let addToGuesses = this.state.guesses;
    addToGuesses ++;

    const gridAfterCharacterCheck = singleCharacterCheck(newGrid, value, chosenCharacterId)

    const updatedGrid = isGameFinished(gridAfterCharacterCheck, addToGuesses, currentBestScore)

    this.setState({
      grid: updatedGrid,
      guesses: addToGuesses
    })
  }

  handleSelectChange(e) {
    const newGrid = this.state.grid.slice();
    const selectValue = e.target.value;
    const chosenCharacter = this.chosenCharacter;
    const questions = this.state.questions;
    let addToGuesses = this.state.guesses;
    addToGuesses ++;

    const updatedGrid =  multipleCharacterCheck(newGrid, chosenCharacter, selectValue);

    const questionAskedDeleted = questionDeleter(questions, addToGuesses, selectValue)

    this.setState({
      selectValue: selectValue,
      grid: updatedGrid,
      questions: questionAskedDeleted,
      guesses: addToGuesses
    }); 
  }

  render() {
    return(
      <div>
      <h1>Guess who's top of Cohort 7!</h1>
      <Board characters={this.props.characters} onButtonClick={this.handleButtonClick}/>
      <div id="info">
        <QuestionSelector questions={this.props.questions} onChange={this.handleSelectChange}/>
        <p id="guesses">No of guesses: {this.state.guesses}</p>
        <p id="best-score">Best score: {this.bestScore}</p>
      </div>
      </div>
      )
  }
}

export default Game;