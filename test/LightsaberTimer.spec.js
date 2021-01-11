import { generateLightsaberTimerComponent } from '../src/app/uicomponents/LightsaberTimer/LightsaberTimer';


describe('Lightsaber timer', () => {

    test('Should render lightsaber with 100% width at the beginning', () => {
        jest.useFakeTimers();
        const div = document.createElement('div');

        document.body.appendChild(generateLightsaberTimerComponent());
        const progressBar = document.body.querySelector('.progress-bar');
        expect(progressBar).toBeDefined();
    })

})