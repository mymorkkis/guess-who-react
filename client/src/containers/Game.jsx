import React from 'react';
import Board from '../components/Board.jsx';
import QuestionSelector from '../components/QuestionSelector.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
      startGrid: this.props.characters
      // player: 1st player here?
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.chosenCharacter = this.props.characters[Math.floor(Math.random()*this.props.characters.length)]
    console.log(this.chosenCharacter)
  }
  handleSelectChange(e) {
    this.setState({selectValue: e.target.value});
    this.characterCheck(e.target.value); 
  }
  characterCheck(selectValue) {
    let gameGrid = this;

    if (this.chosenCharacter[selectValue]) {
      this.chosenValue(selectValue, gameGrid, false)
    } else {
      this.chosenValue(selectValue, gameGrid, true)
    }
  }
  chosenValue(selectValue, grid, boolean) {
    this.props.characters.forEach(function(character) {
      if (character[selectValue] === boolean) {
        grid.state.startGrid[character.id].picture = '/guess_who_players/x.png';
        grid.state.startGrid[character.id].name = 'Not me blud!';
      }
    })
  }
  render() {
    return(
      <div>
      <h1>Guess who blud!</h1>
      <Board characters={this.state.startGrid}/>
      <QuestionSelector questions={this.props.questions} onChange={this.handleSelectChange}/>
      </div>
      )
  }
}

export default Game;