import generateQuestions from "../QuestionsGenerator";
export const App = ({ options }) => {
    generateQuestions('People').then(questionObject => console.log(questionObject));
}