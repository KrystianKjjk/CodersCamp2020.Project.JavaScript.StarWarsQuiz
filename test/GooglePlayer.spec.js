import createPlayer from '../src/app/logic/Players/GooglePlayer/GooglePlayer';
import * as ImageRecognition from '../src/app/googlevision/ImageRecognition/ImageRecognition.js';

describe('Google Player function tests', () => {
    it('returns object', () => {
        const googlePlayer = createPlayer();
        expect(typeof googlePlayer).toBe('object');
    })

    it('return string from answers array', async () => {
        const googlePlayer = createPlayer();
        const question = {answers: ['Luke Skywalker', 'Han Solo', 'Leia Organa', 'Obi-Wan Kenobi'], rightAnswer: 'Luke Skywalker'};
        const answer = await googlePlayer.answerQuestion(question);
        expect(typeof answer).toBe('string');
        expect(question.answers.includes(answer)).toBe(true);
    })

    it('execute function given to the object', async () => {
        const googlePlayer = createPlayer();
        const mockFunction = jest.fn();
        googlePlayer.onGiveAnswerDo(mockFunction);
        const question = {answers: ['Luke Skywalker', 'Han Solo', 'Leia Organa', 'Obi-Wan Kenobi'], rightAnswer: 'Luke Skywalker'};
        const answer = await googlePlayer.answerQuestion(question);
        expect(mockFunction).toHaveBeenCalledWith(answer, question);
    })

    it('keeps track of the points', async () => {
        const googlePlayer = createPlayer();
        const question = {answers: ['Luke Skywalker'], rightAnswer: 'Luke Skywalker'};
        const answer = await googlePlayer.answerQuestion(question);
        expect(googlePlayer._points).toBe(1);
        expect(googlePlayer._askedQuestions).toBe(1);
        expect(googlePlayer._answers).toHaveLength(1);
        expect(googlePlayer._answers[0]).toBe('Luke Skywalker');
    })

    it('passes argument to image recognition function', async () => {
        const imageRecognition = jest.spyOn(ImageRecognition, "imageRecognition").mockResolvedValueOnce('answer');
        const mySecretApiKey = 'kodApi';
        const googlePlayer = createPlayer(mySecretApiKey);
        const question = {image: 'image', rightAnswer: 'chewbacca'};
        const answer = await googlePlayer.answerQuestion(question);
        expect(imageRecognition).toHaveBeenCalledWith(question.image, mySecretApiKey);
    })
});