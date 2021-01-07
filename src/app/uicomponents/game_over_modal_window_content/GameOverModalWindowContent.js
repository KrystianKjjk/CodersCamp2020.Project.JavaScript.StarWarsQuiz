import {FIRST_ARG_ERROR, SECOND_ARG_ERROR} from './Errors.js';
function gameOverModalWindowContent(answers, callback){
    if (!Array.isArray(answers) || 
        !answers.every((answer) => {
            return typeof answer.human === 'string' && typeof answer.computer === 'string' && typeof answer.correct === 'string' && typeof answer.image === 'string';
        })) 
    {
        throw Error(FIRST_ARG_ERROR);
    }

    if (typeof callback !== 'function') {
        throw Error(SECOND_ARG_ERROR);
    }

    const component = document.createElement('div');
    const gameOverH2 = document.createElement('h2');
    gameOverH2.innerHTML = 'Game Over';
    const gameOverParagraph = document.createElement('p');
    const humanCorrect = answers.filter((answer) => answer.human === answer.correct);
    const computerCorrect = answers.filter((answer) => answer.computer === answer.correct);
    gameOverParagraph.innerHTML = `The force is strong in you young Padawan! During 1 minute you have answered ${humanCorrect.length} / ${answers.length} questions. And Google quessed ${computerCorrect.length} / ${answers.length}.`;
    component.appendChild(gameOverH2);
    component.appendChild(gameOverParagraph);
    return component;
}

export default gameOverModalWindowContent;