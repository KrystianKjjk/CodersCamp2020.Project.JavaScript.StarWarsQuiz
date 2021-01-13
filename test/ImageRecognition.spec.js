import {imageRecognition} from '../src/app/googlevision/ImageRecognition.js';
import {FIRST_ARGUMENT_WRONG} from '../src/app/googlevision/Errors.js';

describe('Test Google Vision API image recognition function', () => {
    it('throw error when first argument is wrong', () => {
        expect(imageRecognition(123)).rejects.toEqual(Error(FIRST_ARGUMENT_WRONG));
    });
    it('function should return label of type string', async () => {
        const res = await imageRecognition('base64image');
        expect(typeof res).toBe('string');
    });
});