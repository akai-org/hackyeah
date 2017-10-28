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
        let newState = { question: response.question, image: response.image, answerName: [], answerImages: [] };
        for(const i in response.answers){
          console.log(i);
          newState.answerName.push( response.answers[i].name );
          newState.answerImages.push( response.answers[i].name );
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
            {this.state.answerName[0]}
          </div>

          <div className="answer">
            {this.state.answerName[1]}
          </div>

          <div className="answer">
            {this.state.answerName[2]}
          </div>

          <div className="answer">
            {this.state.answerName[3]}
          </div>

        </div>
      </div>
    );
  }
}

export default Quiz;
