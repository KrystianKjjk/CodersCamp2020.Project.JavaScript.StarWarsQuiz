import { FIRST_ARGUMENT_WRONG, SECOND_ARGUMENT_WRONG } from './Errors.js';
import { getLabel } from './GoogleClient.js';

async function imageRecognition(base64Image, apiKey) {
    if (typeof base64Image !== 'string')
        throw Error(FIRST_ARGUMENT_WRONG);
    if (typeof apiKey !== 'string')
        throw Error(SECOND_ARGUMENT_WRONG);
    
    const result = await getLabel(base64Image, apiKey);
    if (result.error) {
        throw Error(`${result.error.code}: ${result.error.message}`);
    }
    return result.responses[0].webDetection.webEntities[0].description;
}

export { imageRecognition };