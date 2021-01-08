import answerCorrectness from "../src/app/logic/answercorrectness/AnswerCorrectness"
import {displayAnswersComponent} from "../src/app/AnswersComponent";

describe('AnswerCorrectness test', () => {
    it('check if input arguments are strings', () => {
        expect(answerCorrectness).toThrowError('Answers must be strings');
    });
    it('check different answers', () => {
        const correctAnswer = 'Luke Skywalker';
        const givenAnswer = 'Jar Jar Binks';
        expect(answerCorrectness(correctAnswer, givenAnswer)).toBe(false);
    });
    it('check the same answers', () => {
        const correctAnswer = 'Luke Skywalker';
        const givenAnswer = 'Luke Skywalker';
        expect(answerCorrectness(correctAnswer, givenAnswer)).toBe(true);
    });
    it('check similar answers', () => {
        const correctAnswer = 'Luke Skywalker';
        const givenAnswer = 'Luke Skywalker in the starship';
        expect(answerCorrectness(correctAnswer, givenAnswer)).toBe(true);
    });
    it('check similar answers', () => {
        const correctAnswer = 'Luke Skywalker';
        const givenAnswer = 'Skywalker';
        expect(answerCorrectness(correctAnswer, givenAnswer)).toBe(true);
    });
    it('check different answers', () => {
        const correctAnswer = 'Luke Skywalker';
        const givenAnswer = 'Darth Vader in the starship';
        expect(answerCorrectness(correctAnswer, givenAnswer)).toBe(false);
    });
});
