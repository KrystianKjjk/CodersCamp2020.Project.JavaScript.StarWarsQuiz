import { async } from "regenerator-runtime";
import { GameModes } from "./Consts";
import { getPersonById, getPersonImageBlobById } from "./PeopleClient";
import { getStarshipById, getStarshipImageBlobById } from "./StarshipsClient";
import { getVehicleById, getVehicleImageBlobById } from "./VehiclesClient";


async function generateQuestions(gameMode) {
    if (gameMode === GameModes.PEOPLE) {
        const allowedIds = [];
        for (let i = 1; i < 83; i++) {
            if (i === 17) continue;
            allowedIds.push(i);
        }

        const questionsIds = drawQuestionsIds(allowedIds);
        const peopleArray = await Promise.all([
            getPersonById(questionsIds[0]),
            getPersonById(questionsIds[1]),
            getPersonById(questionsIds[2]),
            getPersonById(questionsIds[3])
        ]);
        const peopleNamesArray = peopleArray.map(person => person.name);
        const { correctAnswer, correctAnswerId } = drawCorrectAnswer(questionsIds, peopleNamesArray);

        const questionObject = {
            image: '',
            answers: peopleNamesArray,
            rightAnswer: correctAnswer,
        }

        const imageBlob = await getPersonImageBlobById(correctAnswerId);
        const imageBase64 = await convertBlobToBase64(imageBlob);
        questionObject.image = imageBase64;
        return questionObject;

    } else if (gameMode === GameModes.STARSHIPS) {
        const allowedIds = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];

        const questionsIds = drawQuestionsIds(allowedIds);
        const starshipsArray = await Promise.all([
            getStarshipById(questionsIds[0]),
            getStarshipById(questionsIds[1]),
            getStarshipById(questionsIds[2]),
            getStarshipById(questionsIds[3])
        ])

        const starshipsNamesArray = starshipsArray.map(starship => starship.name);
        const { correctAnswer, correctAnswerId } = drawCorrectAnswer(questionsIds, starshipsNamesArray);

        const questionObject = {
            image: '',
            answers: starshipsNamesArray,
            rightAnswer: correctAnswer,
        }

        const imageBlob = await getStarshipImageBlobById(correctAnswerId);
        const imageBase64 = await convertBlobToBase64(imageBlob);
        questionObject.image = imageBase64;
        return questionObject;


    } else if (gameMode === GameModes.VEHICLES) {
        const allowedIds = [4, 6, 7, 8, 14, 16, 18, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];

        const questionsIds = drawQuestionsIds(allowedIds);
        const vehiclesArray = await Promise.all([
            getVehicleById(questionsIds[0]),
            getVehicleById(questionsIds[1]),
            getVehicleById(questionsIds[2]),
            getVehicleById(questionsIds[3])
        ])

        const vehiclesNamesArray = vehiclesArray.map(vehicle => vehicle.name);
        const { correctAnswer, correctAnswerId } = drawCorrectAnswer(questionsIds, vehiclesNamesArray);

        const questionObject = {
            image: '',
            answers: vehiclesNamesArray,
            rightAnswer: correctAnswer,
        }
        const imageBlob = await getVehicleImageBlobById(correctAnswerId);
        const imageBase64 = await convertBlobToBase64(imageBlob);
        questionObject.image = imageBase64;
        return questionObject;

    } else {
        throw new Error('Invalid game mode');
    }
}
export default generateQuestions;


function drawQuestionsIds(allowedIdArray) {
    const chosenIds = [];
    for (let i = 0; i < 4; i++) {
        const randomNumberIndex = Math.floor(Math.random() * allowedIdArray.length);
        chosenIds.push(allowedIdArray[randomNumberIndex]);
        allowedIdArray.splice(randomNumberIndex, 1);
    }
    return chosenIds;
}

function convertBlobToBase64(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
            const base64data = reader.result.substr(reader.result.indexOf(',') + 1);
            resolve(base64data);
        }
    });
}


function drawCorrectAnswer(questionsIds, questionsNames) {
    const correctAnswerIdIndex = Math.floor(Math.random() * questionsIds.length);
    const correctAnswer = questionsNames[correctAnswerIdIndex];
    const correctAnswerId = questionsIds[correctAnswerIdIndex];
    return { correctAnswer, correctAnswerId };
}