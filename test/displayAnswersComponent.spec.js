import {displayAnswersComponent, createAnswersComponent} from '../src/app/AnswersComponent.js'

describe('displayAnswersComponent test', () => {
  it('does component not exist in dom', () => {
    expect(displayAnswersComponent).toThrowError(new Error('Answers component does not exist in DOM.'));
  });
  it('does component exist in dom', () => {
    document.body.appendChild(createAnswersComponent());
    expect(displayAnswersComponent).not.toThrowError(new Error('Answers component does not exist in DOM.'));
  });
  it('valid number of buttons', () => {
    document.body.appendChild(createAnswersComponent());
    expect(displayAnswersComponent).not.toThrow(new Error('Invalid number of buttons.'));
  });
});
