import React, { Component } from 'react';

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      question: '',
      answers: [ '', '', '', '' ],
      image: ''
    }
  }

  render() {
    return (
      <div className="Quiz">
        <div className="question">
          {this.state.question}
        </div>

        <div className="image">
          <img src={this.state.image} alt=""/>
        </div>

        <div className="answers">
          <div className="answer">
            {this.state.answers[0]}
          </div>

          <div className="answer">
            {this.state.answers[1]}
          </div>

          <div className="answer">
            {this.state.answers[2]}
          </div>

          <div className="answer">
            {this.state.answers[3]}
          </div>

        </div>
      </div>
    );
  }
}

export default Quiz;
