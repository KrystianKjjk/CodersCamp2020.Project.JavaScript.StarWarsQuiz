import gameOverModalWindowContent from '../src/app/uicomponents/game_over_modal_window_content/GameOverModalWindowContent.js';

const FIRST_ARG_ERROR = 'First argument should be an array of objects. Each object should have defined following properties: human(string), computer(string), correct(string) and image(string).';
const SECOND_ARG_ERROR = 'Second argument should be function.';
describe('Game Over Modal Window Content test', () => {
    it('when wrong first argument throw error', () => {
        let answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 2, computer: 'C', correct: 'D', image: 'img2'}]
        const cb = jest.fn();
        expect(() => gameOverModalWindowContent(answers, cb)).toThrowError(FIRST_ARG_ERROR);
        answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 3, correct: 'D', image: 'img2'}]
        expect(() => gameOverModalWindowContent(answers, cb)).toThrowError(FIRST_ARG_ERROR);
        answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 4, image: 'img2'}]
        expect(() => gameOverModalWindowContent(answers, cb)).toThrowError(FIRST_ARG_ERROR);
        answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 2}]
        expect(() => gameOverModalWindowContent(answers, cb)).toThrowError(FIRST_ARG_ERROR);
        answers = "[{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}]";
        expect(() => gameOverModalWindowContent(answers, cb)).toThrowError(FIRST_ARG_ERROR);
    })
    it('when wrong callback argument throw error', () => {
        const answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}];
        const cb = 'callback';
        expect(() => gameOverModalWindowContent(answers, cb)).toThrowError(SECOND_ARG_ERROR);
    })
    it('component should be HTMLElement', () => {
        const answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}];
        const cb = jest.fn()
        expect(gameOverModalWindowContent(answers, cb)).toBeInstanceOf(HTMLElement);
    })
    describe('component should contain paragraph with summary text', () => {
        it('Summary text should contain number of correct answers and number of asked questions', () => {
            const numberOfTests = 10;
            const ANSWERS = ['A', 'B', 'C', 'D'];
            const answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}];
            const cb = jest.fn()
            let component = gameOverModalWindowContent(answers, cb);
            for(let i = 0; i < numberOfTests; i++){
                answers.push({
                    human: ANSWERS[Math.floor(Math.random() * 4)],
                    computer: ANSWERS[Math.floor(Math.random() * 4)],
                    correct: ANSWERS[Math.floor(Math.random() * 4)],
                    image: `img${i}`
                });
                expect(component.innerHTML.includes(`${answers.filter( (answer) => answer.human === answer.correct ).length}`)).toBe(true);
                expect(component.innerHTML.includes(`${answers.filter( (answer) => answer.computer === answer.correct ).length}`)).toBe(true);
                expect(component.innerHTML.includes(`${answers.length}`)).toBe(true);
            }
        })
    })

    it('component should contain vertically scrollable list of detailed answers with images to recognize', () => {
        const answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}];
        const cb = jest.fn()
        let component = gameOverModalWindowContent(answers, cb);
        const uls = Array.from(component.getElementsByTagName('ul'));
        const passed = uls.some( (ul) => {
            const items = Array.from(ul.getElementsByTagName('li'));
            return items.every( (item) => {
                const elems = Array.from(ul.querySelectorAll('*'));
                return elems.some( (elem) => elem.tagName === 'img' );
            })
        });
        expect(passed).toBe(true);
    })

    it('component should contain text input, which is required', () => {
        const answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}];
        const cb = jest.fn()
        let component = gameOverModalWindowContent(answers, cb);
        expect(component.querySelector('input[type="text"]')).not.toBeNull();
        expect(component.querySelector('input[type="text"]').required).toBe(true);
    })

    it('when button clicked, call callback function', () => {
        const answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}];
        const cb = jest.fn();
        let component = gameOverModalWindowContent(answers, cb);
        const button = component.querySelector('input[type="submit"]');
        const textInput = component.querySelector('input[type="text"]');
        expect(textInput).not.toBeNull();
        textInput.value = "Player";
        expect(button).not.toBeNull();
        button.click();
        expect(cb).toHaveBeenCalledTimes(1);
    })

    it('when button clicked and text input is empty, do not call callback function', () => {
        const answers = [{human: 'A', computer: 'B', correct: 'C', image: 'img1'}, {human: 'B', computer: 'C', correct: 'D', image: 'img2'}];
        const cb = jest.fn();
        let component = gameOverModalWindowContent(answers, cb);
        const button = component.querySelector('input[type="submit"]');
        expect(button).not.toBeNull();
        button.click();
        expect(cb).not.toHaveBeenCalled();
    })
})