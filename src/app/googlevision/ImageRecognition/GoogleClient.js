import fetch from 'cross-fetch';
async function getLabel(base64Image, apiKey) {
    const ENDPOINT = "https://vision.googleapis.com/v1/images:annotate";
    const REQUEST_URL = ENDPOINT+'?key='+apiKey;
    const MAX_RESULTS = 1;
    const requestJSON = {
        "requests": [
            {
                "image": {
                    "content": base64Image,
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
    
    const response = await fetch(REQUEST_URL, {
        method: 'POST',
        body: JSON.stringify(requestJSON)
    });
    
    return response.json();
}
export { getLabel };