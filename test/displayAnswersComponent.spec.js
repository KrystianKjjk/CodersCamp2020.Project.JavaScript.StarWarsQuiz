import {displayAnswersComponent, createAnswersComponent} from '../src/app/AnswersComponent.js'

const possibleAnswers = ['Luke Skywalker', 'Jar Jar Binksa', 'Padme Amidala', 'Darth Vader'];
const correctAnswer = 'LukeSkywalker';

describe('displayAnswersComponent test', () => {
  it('Does component NOT exist in DOM', () => {
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
      .toThrowError(new Error('Answers component does not exist in DOM.'));
  });
  it('Does component exist in DOM', () => {
    document.body.appendChild(createAnswersComponent());
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
      .not.toThrowError(new Error('Answers component does exist in DOM.'));
  });
  it('Valid number of buttons', () => {
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
    .not.toThrowError(new Error('Invalid number of buttons.'));
  });
  it('Valid number of possible answers', () => {
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
    .not.toThrowError(new Error('Invalid number of possible answers'));
  });
  it('Invalid number of possible answers', () => {
    const possibleAnswers = ['Luke Skywalker', 'Jar Jar Binksa', 'Padme Amidala'];
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
      .toThrowError(new Error('Invalid number of answers'));
  });
  it('Possible answers not passed', () => {
    const possibleAnswers = [];
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
      .toThrowError(new Error('Possible answers not passed'));
  });
  it('Correct answer not passed', () => {
    const correctAnswer = '';
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
      .toThrowError(new Error('Correct answer not passed'));
  });
  it('Possible Answers are not strings', () => {
    const possibleAnswers = [1,2,'Luke Skywalker', 'Jar Jar Binksa'];
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
      .toThrowError(new Error('Possible answers must be strings'));
  });
  it('Correct answer must be string', () => {
    const correctAnswer = 2;
    expect(() => displayAnswersComponent(possibleAnswers,correctAnswer))
      .toThrowError(new Error('Correct answer must be a string'));
  });
});
