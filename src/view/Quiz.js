import React, { Component } from 'react';

class Quiz extends Component {
  constructor() {
    super();
    // this.state = {
    //   question: '',
    //   answers: [ '', '', '', '' ],
    //   image: ''
    // }
  }

  getTask(id) {
    fetch(`https://hackyeah-b8a56.firebaseio.com/x-nature-quiz/questions/${id}.json`)
      .then( (response) => {
        return response.json();
      })
      .then( (response) => {
        let newState = { question: response.question, image: response.image, answers: [] };
        for(const i in response.answers){
          console.log(i);
          newState.answers.push(response.answers[i]);
        }

        console.log(newState);
        this.setState(newState);
      })
      .catch( (err) => {
        alert('Nastąpił błąd podczas pobierania danych.');
      });
  }

  render() {
    if(!this.state) {
      this.getTask(0);
      return <div>Loading</div>;
    }
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
