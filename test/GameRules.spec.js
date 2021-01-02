import displayText from '../src/app/GameRules.js';

describe('Game Rules test', () => {
  it('displays provided text', () => {
    const text =
      'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.';
    document.body.appendChild(displayText(text));
    expect(document.body.querySelector('.gameRulesP').innerText).toBe(text);
  });
  it('throws error when data type is diffrent than String', () => {
    const text = 53;
    expect(() => displayText(text)).toThrowError(
      'This text area needs to have string data types only',
    );
  });
});
