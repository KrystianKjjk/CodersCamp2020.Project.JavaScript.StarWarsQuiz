import generateQuestions from '../src/QuestionsGenerator';

describe('Questions Generator tests', () => {

    test('should throw error when invalid game mode', () => {
        expect(() => generateQuestions('invalidGameMode')).toThrow('Invalid game mode');
    })

    test('should generate questions for people game mode', () => {

    })

    test('should generate questions for starships game mode', () => {

    })

    test('should generate questions for vehicles game mode', () => {

    })

})