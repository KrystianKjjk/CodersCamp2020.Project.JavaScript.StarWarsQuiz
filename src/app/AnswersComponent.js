function displayAnswersComponent(possibleAnswers = [], correctAnswer = '', callback){

  //Check passed arguments
  if(possibleAnswers.length === 0) throw Error('Possible answers not passed');
  if(correctAnswer.length === 0) throw Error('Correct answer not passed')
  if(possibleAnswers.length !== 4) throw Error('Invalid number of answers');
  possibleAnswers.forEach(answer => {
    if(typeof answer !== 'string') throw Error('Possible answers must be strings');
  });
  if(typeof correctAnswer !== 'string') throw Error('Correct answer must be a string');

  //Get buttons and check them
  const buttons = document.querySelectorAll('.answers-component__button');
  if(!buttons.length) throw Error('Answers component does not exist in DOM.');
  if(buttons.length !== 4) throw Error('Invalid number of buttons.');

  const maxLengthOfDisplayedAnswer = 20;
  let isAnswered = false;

  buttons.forEach( (button, index) => {
    let answer = possibleAnswers[index];

    //If a possible answer is too long shorten it and then add as a textContent to the button
    if(answer.length > maxLengthOfDisplayedAnswer) {
      answer = answer.substr(0,maxLengthOfDisplayedAnswer) + '...';
    }
    button.textContent = answer;

    //Remove classes from buttons that could be a remains of the previous function calls
    button.classList.remove('answers-component__button--correct', 'answers-component__button--wrong');

    /* Add EventListener to each button
       Check if answer was given before (prevent from accepting two or more answers)
       If answer wasn't given before, check correctness and add respective class to button
       Then invoke callback function
    */
    button.addEventListener('click', event => {
      if(!isAnswered) {
        isAnswered = true;
        const givenAnswer = possibleAnswers[index];

        if(givenAnswer === correctAnswer) {
          event.target.classList.add('answers-component__button--correct');
          callback(givenAnswer, true);
        }
        else {
          event.target.classList.add('answers-component__button--wrong');
          callback(givenAnswer, false);
        }
      }
    })
  });
}

function createAnswersComponent() {
  //Function returns the DOM answers element
  const numberOfButtons = 4;

  //Create container for buttons
  const answersComponent = document.createElement('div');
  answersComponent.classList.add('answers-component')

  //Create determined number of button elements
  for(let i = 0; i < numberOfButtons; i++) {
    const button = document.createElement('button');
    button.classList.add('answers-component__button')
    answersComponent.appendChild(button);
  }
  return answersComponent;
}

export {createAnswersComponent, displayAnswersComponent}
