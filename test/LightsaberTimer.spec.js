import { generateLightsaberTimerComponent } from '../src/app/uicomponents/LightsaberTimer/LightsaberTimer';


describe('Lightsaber timer', () => {

    test('Should render lightsaber with 100% width at the beginningg', () => {
        jest.useFakeTimers();

        document.body.appendChild(generateLightsaberTimerComponent());
        const progressBar = document.body.querySelector('.progress-bar');
        expect(progressBar.style.width).toBe('100%');

    })

    test('Should render lightsaber with 50% width at the 60s', () => {
        jest.useFakeTimers();

        document.body.appendChild(generateLightsaberTimerComponent());
        jest.advanceTimersByTime(60 * 1000);

        const progressBar = document.body.querySelector('.progress-bar');
        expect(progressBar.style.width).toBe('50%');

    })

    test('Should render lightsaber with 0% width at the 0s', () => {
        jest.useFakeTimers();

        document.body.appendChild(generateLightsaberTimerComponent());
        jest.advanceTimersByTime(120 * 1000);

        const progressBar = document.body.querySelector('.progress-bar');
        expect(progressBar.style.width).toBe('0%');

    })

})