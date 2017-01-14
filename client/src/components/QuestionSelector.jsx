import React from 'react';

class QuestionSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <select id="question-selector" onChange={this.props.onChange}>
        {this.props.questions.map(function(question, index) {
          return(
            <option key={index} value={question.value}>{question.question}</option>
            )
        })}
      </select>
      )
  }
};

export default QuestionSelector;