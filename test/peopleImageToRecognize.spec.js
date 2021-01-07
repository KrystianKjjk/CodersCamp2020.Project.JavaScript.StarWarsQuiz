import peopleImageToRecognize from '../src/app/uicomponents/people_image_to_recognize/PeopleImageToRecognize.js';

describe('peopleImageToRecognize test', () => {
    it("check parameter", () => {
        expect(peopleImageToRecognize).toThrowError('Pass base64 string as function argument');
    });
    it("check src", () => {
        const base64 = "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
        const src = "data:image/png;base64," + base64;
        expect(peopleImageToRecognize(base64).src).toBe(src);
    });
});
