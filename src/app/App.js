import { createAnswersComponent, displayAnswersComponent } from './AnswersComponent';
import launchGame from '../app/logic/LaunchTheGame/LaunchTheGame';
export const App = ({ options }) => {
    const imageDiv = document.createElement('div');
    imageDiv.className = 'image';
    const quizElement = document.body.querySelector('#swquiz-app');
    quizElement.appendChild(imageDiv);
    quizElement.appendChild(createAnswersComponent());





    launchGame("People", endGame);


    function endGame(humanPlayer, computerPlayer) {
        console.log(humanPlayer);
        console.log(computerPlayer);
    }

};