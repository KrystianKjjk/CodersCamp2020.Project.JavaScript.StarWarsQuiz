import { async } from "regenerator-runtime";
import { GameModes } from "./Consts";
import { GetPersonById, GetPersonImageBlobById } from "./PeopleClient";
import { GetStarshipById, GetStarshipImageBlobById } from "./StarshipsClient";
import { GetVehicleById, GetVehicleImageBlobById } from "./VehiclesClient";


async function GenerateQuestions(gameMode) {
    let answers;
    let rightAnswer;
    let imageBlob;
    if (gameMode === GameModes.PEOPLE) {
        const allowedIds = [];
        for (let i = 1; i < 83; i++) {
            if (i === 17) continue;
            allowedIds.push(i);
        }

        const questionsIds = DrawQuestionsIds(allowedIds);
        const peopleArray = await Promise.all([
            GetPersonById(questionsIds[0]),
            GetPersonById(questionsIds[1]),
            GetPersonById(questionsIds[2]),
            GetPersonById(questionsIds[3])
        ]);
        answers = peopleArray.map(person => person.name);
        const { correctAnswer, correctAnswerId } = DrawCorrectAnswer(questionsIds, answers);
        rightAnswer = correctAnswer;
        imageBlob = await GetPersonImageBlobById(correctAnswerId);

    } else if (gameMode === GameModes.STARSHIPS) {
        const allowedIds = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];

        const questionsIds = DrawQuestionsIds(allowedIds);
        const starshipsArray = await Promise.all([
            GetStarshipById(questionsIds[0]),
            GetStarshipById(questionsIds[1]),
            GetStarshipById(questionsIds[2]),
            GetStarshipById(questionsIds[3])
        ])

        answers = starshipsArray.map(starship => starship.name);
        const { correctAnswer, correctAnswerId } = DrawCorrectAnswer(questionsIds, answers);
        rightAnswer = correctAnswer;
        imageBlob = await GetStarshipImageBlobById(correctAnswerId);


    } else if (gameMode === GameModes.VEHICLES) {
        const allowedIds = [4, 6, 7, 8, 14, 16, 18, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];

        const questionsIds = DrawQuestionsIds(allowedIds);
        const vehiclesArray = await Promise.all([
            GetVehicleById(questionsIds[0]),
            GetVehicleById(questionsIds[1]),
            GetVehicleById(questionsIds[2]),
            GetVehicleById(questionsIds[3])
        ])

        answers = vehiclesArray.map(vehicle => vehicle.name);
        const { correctAnswer, correctAnswerId } = DrawCorrectAnswer(questionsIds, answers);
        rightAnswer = correctAnswer;
        imageBlob = await GetVehicleImageBlobById(correctAnswerId)

    } else {
        throw new Error('Invalid game mode');
    }
    const imageBase64 = await ConvertBlobToBase64(imageBlob);
    const questionObject = {
        image: imageBase64,
        answers: answers,
        rightAnswer: rightAnswer,
    }
    return questionObject;
}
export default GenerateQuestions;


function DrawQuestionsIds(allowedIdArray) {
    const chosenIds = [];
    for (let i = 0; i < 4; i++) {
        const randomNumberIndex = Math.floor(Math.random() * allowedIdArray.length);
        chosenIds.push(allowedIdArray[randomNumberIndex]);
        allowedIdArray.splice(randomNumberIndex, 1);
    }
    return chosenIds;
}

function ConvertBlobToBase64(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
            const base64data = reader.result.substr(reader.result.indexOf(',') + 1);
            resolve(base64data);
        }
    });
}


function DrawCorrectAnswer(questionsIds, questionsNames) {
    const correctAnswerIdIndex = Math.floor(Math.random() * questionsIds.length);
    const correctAnswer = questionsNames[correctAnswerIdIndex];
    const correctAnswerId = questionsIds[correctAnswerIdIndex];
    return { correctAnswer, correctAnswerId };
}