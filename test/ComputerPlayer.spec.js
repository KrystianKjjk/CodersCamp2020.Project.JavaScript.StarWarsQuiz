import createPlayer from '../src/app/logic/Players/ComputerPlayer/ComputerPlayer';

describe('Computer Player function tests', () => {
    it('returns object', () => {
        const computer = createPlayer();
        expect(typeof computer).toBe('object');
    })

    it('return string from answers array', () => {
        const computer = createPlayer();
        const question = {answers: ['Luke Skywalker', 'Han Solo', 'Leia Organa', 'Obi-Wan Kenobi'], rightAnswer: 'Luke Skywalker'};
        const answer = computer.answerQuestion(question);
        expect(typeof answer).toBe('string');
        expect(question.answers.includes(answer)).toBe(true);
    })

    it('execute function given to the object', () => {
        const computer = createPlayer();
        const mockFunction = jest.fn();
        computer.onGiveAnswerDo(mockFunction);
        const question = {answers: ['Luke Skywalker', 'Han Solo', 'Leia Organa', 'Obi-Wan Kenobi'], rightAnswer: 'Luke Skywalker'};
        const answer = computer.answerQuestion(question);
        expect(mockFunction).toHaveBeenCalledWith(answer, question);
    })

    it('accepts one callback and array of callbacks', () => {
        const computer = createPlayer();
        const firstMockFunction = jest.fn();
        const secondMockFunction = jest.fn();
        const thirdMockFunction = jest.fn();
        computer.onGiveAnswerDo(firstMockFunction);
        expect(computer._giveAnswerCallbacks.length).toBe(1);
        computer.onGiveAnswerDo([secondMockFunction, thirdMockFunction]);
        expect(computer._giveAnswerCallbacks.length).toBe(3);
        expect(() => computer.onGiveAnswerDo('Some string')).toThrowError('Given argument is neither function nor array of functions');
        expect(() => computer.onGiveAnswerDo(123)).toThrowError('Given argument is neither function nor array of functions');
        expect(() => computer.onGiveAnswerDo([1,2,3])).toThrowError('Given argument is neither function nor array of functions');
    })

    it('keeps track of the points', () => {
        const computer = createPlayer();
        const question = {answers: ['Luke Skywalker'], rightAnswer: 'Luke Skywalker'};
        const answer = computer.answerQuestion(question);
        expect(computer._points).toBe(1);
        expect(computer._askedQuestions).toBe(1);
        expect(computer._answers).toHaveLength(1);
        expect(computer._answers[0]).toBe('Luke Skywalker');
    })

});