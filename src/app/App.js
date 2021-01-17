import mainMenu from './uicomponents/MainMenu/MainMenu.js';
import quizGameMode from './uicomponents/QuizGameMode/QuizGameMode.js'

export async function App({ options }) {
    document.body.appendChild(await mainMenu(quizGameMode));   
};
