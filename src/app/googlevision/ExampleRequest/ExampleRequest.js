import { dogImgBase64 } from './img.js';
import { catsImgBase64 } from "./img2.js";
import { API_KEY } from './Key.js';

const MAX_RESULTS = 1;
const ENDPOINT = "https://vision.googleapis.com/v1/images:annotate";
const REQUEST_URL = ENDPOINT+'?key='+API_KEY;

const requestJSON = {
    "requests": [
        {
            "image": {
                "content": dogImgBase64,
            },
            "features": [
                {
                    "maxResults": MAX_RESULTS,
                    "type": "LABEL_DETECTION"
                }
            ]
        }
    ]
}

fetch(REQUEST_URL, {
    method: 'POST',
    body: JSON.stringify(requestJSON)
})
    .then(res => res.json())
    .then(data => console.log(data.responses[0].labelAnnotations[0].description));
