import createPlayer from '../src/app/logic/Players/HumanPlayer';
describe('Human Player function tests', () => {
  it('returns object with given name', () => {
    const player = createPlayer('Julia');
    expect(typeof player).toBe('object');

    const info = player.playerInfo;
    expect(info.name).toBe('Julia');
    expect(info.points).toBe('0/0');
  })

  it('returns errors when wrong parameters are given', () => {
    const player = createPlayer('Julia');
    const callback = jest.fn();
    expect(() => player.askQuestion('question', null)).toThrowError(
      'First argument must be an object',
    );
    expect(() => player.askQuestion({}, callback)).toThrowError(
      'Second argument must be an array',
    );
    expect(() => player.answerQuestion({}, null)).toThrowError(
      'First argument must be a string',
    );
    expect(() => player.answerQuestion('Luke Skywalker', callback)).toThrowError(
      'Second argument must be an array',
    );
  })

  it('correctly asks a question', () => {
    const player = createPlayer('Julia');
    const callback = jest.fn();
    const question = {
      answers: ['a', 'b', 'c', 'd'],
      rightAnswer: 'c'
    };

    player.askQuestion(question, [callback]);
    expect(player._askedQuestions).toBe(1);
    expect(player._activeQuestion).toBe(question);
    expect(callback).toHaveBeenCalledTimes(1);
  })

  it('answers to a question and counts points', () => {
    const player = createPlayer('Julia');
    const callback = jest.fn();
    const callback2 = jest.fn();
    const question = {
      answers: ['a', 'b', 'c', 'd'],
      rightAnswer: 'c'
    };

    player.askQuestion(question, [callback]);
    player.answerQuestion('c', [callback2]);
    expect(player.answersHistory).toContain('c');

    player.askQuestion(question, [callback]);
    player.answerQuestion('a', [callback2]);
    const info = player.playerInfo;
    expect(info.points).toBe('1/2');
    expect(callback2).toHaveBeenCalledTimes(2);
  })
});