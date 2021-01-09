import {convertBlobToBase64} from '../../logic/questionsGenerator/QuestionsGenerator.js';
import {getPersonImageBlobById} from '../../apiconnection/PeopleClient.js';


async function returnImageBase64() {
    const imageBlob = await getPersonImageBlobById('default');
    const imageBase64 = await convertBlobToBase64(imageBlob);
    return imageBase64;
}

export {returnImageBase64};
