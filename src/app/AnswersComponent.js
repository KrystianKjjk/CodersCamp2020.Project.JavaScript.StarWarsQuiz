function displayAnswersComponent(possibleAnswers = [], correctAnswer = '', callback){

  if(possibleAnswers.length === 0) throw Error('Possible answers not passed');
  if(correctAnswer.length === 0) throw Error('Correct answer not passed')
  if(possibleAnswers.length !== 4) throw 'Invalid number of answers';

  const maxLengthOfDisplayedAnswer = 20;
  let isAnswered = false;

  const buttons = document.querySelectorAll('.answers-component__button');
  if(!buttons.length) throw Error('Answers component does not exist in DOM.');
  if(buttons.length !== 4) throw ('Invalid number of buttons.');

  buttons.forEach( (button, index) => {
    let answer = possibleAnswers[index];
    if(answer.length > maxLengthOfDisplayedAnswer) {
      answer = answer.substr(0,maxLengthOfDisplayedAnswer) + '...';
    }
    button.textContent = answer;
    button.classList.remove('answers-component__button--correct', 'answers-component__button--wrong');
  });

  buttons.forEach(button => button.addEventListener('click', event => {
    if(!isAnswered) {
      isAnswered = true;

      const givenAnswer = event.target.textContent;

      if(givenAnswer === correctAnswer) {
        event.target.classList.add('answers-component__button--correct');
        callback(givenAnswer, true);
      }
      else {
        event.target.classList.add('answers-component__button--wrong');
        callback(givenAnswer, false);
      }
    }
  }));
}

function createAnswersComponent() {
  //Function returns the DOM answers element
  const answersComponent = document.createElement('div');
  answersComponent.classList.add('answers-component')

  for(let i = 0; i < 4; i++) {
    const button = document.createElement('button');
    button.classList.add('answers-component__button')
    answersComponent.appendChild(button);
  }
  return answersComponent;
}

export {createAnswersComponent, displayAnswersComponent}
