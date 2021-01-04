import GenerateQuestions from "../QuestionsGenerator";
export const App = ({ options }) => {
    GenerateQuestions('People').then(questionObject => console.log(questionObject));
}