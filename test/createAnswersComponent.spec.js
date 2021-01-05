import {createAnswersComponent} from '../src/app/AnswersComponent.js'

describe('createAnswersComponent test', () => {
  it('is html element', () => {
    expect(createAnswersComponent()).toBeInstanceOf(HTMLElement);
  });
  it('was the container answers-component created', () => {
    expect(createAnswersComponent().classList.contains('answers-component')).toBeTruthy();
  })
  it('was the element answers-component__button created', () => {
    expect(createAnswersComponent().firstChild.classList.contains('answers-component__button')).toBeTruthy();
  })
  it('is the number of buttons equal 4', () => {
    expect(createAnswersComponent().childElementCount).toBe(4);
  })
});
