import { imageRecognition } from '../src/app/googlevision/ImageRecognition/ImageRecognition.js';
import * as GoogleClient from '../src/app/googlevision/ImageRecognition/GoogleClient.js';
import { FIRST_ARGUMENT_WRONG, SECOND_ARGUMENT_WRONG } from '../src/app/googlevision/ImageRecognition/Errors.js';

describe('Test Google Vision API image recognition function', () => {
    it('throw error when first argument is wrong', () => {
        expect(imageRecognition(123, 'apiKey')).rejects.toEqual(Error(FIRST_ARGUMENT_WRONG));
    });
    
    it('throw error when second argument is wrong', () => {
        expect(imageRecognition('base64Image', 321)).rejects.toEqual(Error(SECOND_ARGUMENT_WRONG));
    });
    
    it('throw error when API response object has property error', () => {
        const errorObject = {
            error: {
                code: 400,
                message: 'Wrong API Key.'
            }
        };
        jest.spyOn(GoogleClient, "getLabel").mockResolvedValueOnce(errorObject);
        expect(imageRecognition('base64Image', 'Wrong API_KEY')).rejects.toEqual(Error(`${errorObject.error.code}: ${errorObject.error.message}`));
    });

    it('should generate label for base64 image', async () => {
        jest.spyOn(GoogleClient, "getLabel").mockResolvedValueOnce({
            responses: [{
                webDetection: {
                    webEntities: [{description: 'Luke Skywalker'}]
            }}]
        });
        const label = await imageRecognition('base64Image', 'API_KEY');
        expect(label).toBe('Luke Skywalker');
    });
});