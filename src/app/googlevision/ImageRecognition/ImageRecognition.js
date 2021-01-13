import {FIRST_ARGUMENT_WRONG} from './Errors.js';
import vision from '@google-cloud/vision';
export async function imageRecognition(base64Image) {
    if (typeof base64Image !== 'string')
        throw Error(FIRST_ARGUMENT_WRONG);
    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        credentials: {
            private_key: 'my_secret_key',
            client_email: 'email@email.com'
        }
    });
    
    // Performs label detection on the image file
    const [result] = await client.labelDetection({
        image: {
            content: base64Image
            //source: './img.png'
        }
    });

    const labels = result.labelAnnotations;
    console.log('Labels:');
    console.log(labels);
    labels.forEach(label => console.log(label.description));
    
    
    return labels[0].description;
}