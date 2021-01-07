import {FIRST_ARG_ERROR, SECOND_ARG_ERROR} from './Errors.js';
function gameOverModalWindowContent(answers, callback){
    // First argument should be array of answers
    if (!Array.isArray(answers) || 
        !answers.every((answer) => {
            return typeof answer.human === 'string' && typeof answer.computer === 'string' && typeof answer.correct === 'string' && typeof answer.image === 'string';
        })) 
    {
        throw Error(FIRST_ARG_ERROR);
    }

    // Second argument should be callback function
    if (typeof callback !== 'function') {
        throw Error(SECOND_ARG_ERROR);
    }

    const component = document.createElement('div');
    
    // Main header
    const gameOverH2 = document.createElement('h2');
    gameOverH2.innerHTML = 'Game Over';
    
    // Summary paragraph
    const gameOverParagraph = document.createElement('p');
    const humanCorrect = answers.filter((answer) => answer.human === answer.correct);
    const computerCorrect = answers.filter((answer) => answer.computer === answer.correct);
    gameOverParagraph.innerHTML = `The force is strong in you young Padawan! During 1 minute you have answered ${humanCorrect.length} / ${answers.length} questions. And Google quessed ${computerCorrect.length} / ${answers.length}.`;
    
    // scrollable list
    const scrollableList = document.createElement('ul');
    scrollableList.innerHTML = answers.map((answer) => 
        `<li>
            <img src="data:image/png;base64,${answer.image}">
            <div class="${answer.human === answer.correct ? "correct" : "wrong"}">${answer.human}</div>
            <div class="${answer.computer === answer.correct ? "correct" : "wrong"}">${answer.computer}</div>
            <div>${answer.correct}</div>
        </li>`
    ).join('');

    // Text input
    const textInput = document.createElement('input');
    textInput.type = "text";
    textInput.required = true;

    const inputDescription = document.createElement('p');
    inputDescription.innerHTML = "Please fill your name in order to receive eternal glory in whole Galaxy!"

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.addEventListener('click', (e) => {
        if (textInput.value.length > 0) {
            callback(textInput.value, humanCorrect.length);
            component.remove();
        }
    })
    submitButton.innerHTML = "MAY THE FORCE BE WITH YOU!"

    component.appendChild(gameOverH2);
    component.appendChild(gameOverParagraph);
    component.appendChild(scrollableList);
    component.appendChild(textInput);
    component.appendChild(inputDescription);
    component.appendChild(submitButton);
    return component;
}

export default gameOverModalWindowContent;