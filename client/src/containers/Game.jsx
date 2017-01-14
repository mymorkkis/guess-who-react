import React from 'react';
import Board from '../components/Board.jsx';
import QuestionSelector from '../components/QuestionSelector.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: ""
      // grid: this.props.characters
      // player: 1st player here?
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(e) {
    this.setState({selectValue: e.target.value});
    this.characterCheck(e.target.value);
    
  }
  characterCheck(selectValue) {
    console.log(selectValue)
    this.props.characters.forEach(function(character) {
      if (character[selectValue] === false) {
        console.log(character)
      }
    })
  }
  render() {
    return(
      <div>
        <h1>Guess who blud!</h1>
        <Board characters={this.props.characters}/>
        <QuestionSelector questions={this.props.questions} onChange={this.handleSelectChange}/>
      </div>
    )
  }
}

export default Game;