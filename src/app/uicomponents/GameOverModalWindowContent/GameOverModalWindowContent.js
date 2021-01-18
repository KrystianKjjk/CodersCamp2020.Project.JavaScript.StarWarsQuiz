import {FIRST_ARG_ERROR, SECOND_ARG_ERROR} from './Errors.js';
function gameOverModalWindowContent(answers, callback, gameMode){
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
    component.className = 'game-over-win';
    
    // Main header
    const gameOverH2 = document.createElement('h2');
    gameOverH2.innerHTML = 'Game Over';
    
    // Summary paragraph
    const gameOverParagraph = document.createElement('p');
    const humanCorrect = answers.filter((answer) => answer.human === answer.correct);
    const computerCorrect = answers.filter((answer) => answer.computer === answer.correct);
    gameOverParagraph.innerHTML = `The force is strong in you young Padawan! During 2 minutes you have answered ${humanCorrect.length} / ${answers.length} questions. And Google guessed ${computerCorrect.length} / ${answers.length}.`;

    // Main grid
    const mainGrid = document.createElement('div');
    
    // Scrollable list
    const listDiv = document.createElement('div');
    listDiv.className = 'scrollable-list';
    const listHeader = document.createElement('h3');
    listHeader.innerHTML = 'Detailed answers';
    const scrollableList = document.createElement('ul');
    const firstItem = `
        <li>
            <div></div>
            <div>You</div>
            <div>Computer</div>
            <div>Answer</div>
        </li>
    `;
    scrollableList.innerHTML = firstItem + answers.map((answer) => 
        `<li>
            <img height="100px" src="data:image/png;base64,${answer.image}">
            <div class="${answer.human === answer.correct ? "correct" : "wrong"}">${answer.human}</div>
            <div class="${answer.computer === answer.correct ? "correct" : "wrong"}">${answer.computer}</div>
            <div>${answer.correct}</div>
        </li>`
    ).join('');
    listDiv.appendChild(listHeader);
    listDiv.appendChild(scrollableList);

    // Yoda image
    const yodaImage = document.createElement('img');
    yodaImage.src = "static/assets/ui/MasterYodaLeft.png"
    yodaImage.className = 'yoda'

    // Text input
    const textInput = document.createElement('input');
    textInput.type = "text";
    textInput.required = true;
    textInput.placeholder = "Your name";

    const inputDescription = document.createElement('p');
    inputDescription.innerHTML = "Please fill your name in order to receive eternal glory in whole Galaxy!"

    // Submit button
    
    const submitButton = document.createElement('button');
    submitButton.addEventListener('click', (e) => {
        if (textInput.value.length > 0) {
            callback(textInput.value, answers.length, humanCorrect.length, gameMode);
            if(component.parentElement && component.parentElement.parentElement) {
                component.parentElement.parentElement.click();
            }
        }
    })
    submitButton.innerHTML = "MAY THE FORCE BE WITH YOU!"
    submitButton.className = "submit-btn";

    component.appendChild(gameOverH2);
    component.appendChild(gameOverParagraph);
    mainGrid.appendChild(listDiv);
    mainGrid.appendChild(yodaImage);
    mainGrid.appendChild(textInput);
    mainGrid.appendChild(inputDescription);
    component.appendChild(mainGrid);
    component.appendChild(submitButton);
    return component;
}

export default gameOverModalWindowContent;