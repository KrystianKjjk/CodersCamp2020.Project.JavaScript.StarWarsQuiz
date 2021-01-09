import { generateTextTimerComponent } from '../src/app/uicomponents/TextTimer/TextTimer';

describe('Text timer', () => {

    test('Should render 2 minutes left at the beginning', () => {
        jest.useFakeTimers();
        document.body.appendChild(generateTextTimerComponent());

        expect(document.body.querySelector('.text-timer').innerHTML).toBe('Time Left: 2m 0s');
    })

    test('Should render 1:59 after 1 second', () => {
        jest.useFakeTimers();
        document.body.appendChild(generateTextTimerComponent());

        jest.advanceTimersByTime(1000);

        expect(document.body.querySelector('.text-timer').innerHTML).toBe('Time Left: 1m 59s');
    })

    test('should render 0 minutes after time is out', () => {
        jest.useFakeTimers();
        document.body.appendChild(generateTextTimerComponent());

        jest.advanceTimersByTime(120 * 1000);

        expect(document.body.querySelector('.text-timer').innerHTML).toBe('Time Left: 0m 0s');
    })
})