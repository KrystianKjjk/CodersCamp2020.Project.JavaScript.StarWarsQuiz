import { getPersonById, getPersonImageBlobById, getPeople } from "./PeopleClient";
import { getStarshipById, getStarshipImageBlobById, getStarships } from "./StarshipsClient";
import { getVehicleById, getVehicleImageBlobById, getVehicles } from "./VehiclesClient";


function generateQuestions(gameMode) {
    if (gameMode === 'People') {
        return getPeople()
            .then(people => {
                let idRange = people.count;
                const questionsIds = drawQuestions(idRange);
                return Promise.all(
                        [getPersonById(questionsIds[0]),
                            getPersonById(questionsIds[1]),
                            getPersonById(questionsIds[2]),
                            getPersonById(questionsIds[3])
                        ])
                    .then(peopleArray => {
                        let peopleNamesArray = peopleArray.map(person => person.name);
                        let correctAnswerIdIndex = Math.floor(Math.random() * questionsIds.length);
                        let correctAnswer = peopleNamesArray[correctAnswerIdIndex];
                        const correctAnswerId = questionsIds[correctAnswerIdIndex];

                        let questionObject = {
                            image: '',
                            answers: peopleNamesArray,
                            rightAnswer: correctAnswer,
                        }
                        return getPersonImageBlobById(correctAnswerId)
                            .then(convertBlobToBase64)
                            .then(base64Image => {
                                questionObject.image = base64Image;
                                return questionObject;
                            })
                    });
            });


    } else if (gameMode === 'Starships') {
        return getStarships()
            .then(starship => {
                let idRange = starship.count;
                const questionsIds = drawQuestions(idRange);
                return Promise.all(
                        [getStarshipById(questionsIds[0]),
                            getStarshipById(questionsIds[1]),
                            getStarshipById(questionsIds[2]),
                            getStarshipById(questionsIds[3])
                        ])
                    .then(starshipsArray => {
                        let starshipsNamesArray = starshipsArray.map(starship => starship.name);
                        let correctAnswerIdIndex = Math.floor(Math.random() * questionsIds.length);
                        let correctAnswer = starshipsNamesArray[correctAnswerIdIndex];
                        const correctAnswerId = questionsIds[correctAnswerIdIndex];

                        let questionObject = {
                            image: '',
                            answers: starshipsNamesArray,
                            rightAnswer: correctAnswer,
                        }
                        return getStarshipImageBlobById(correctAnswerId)
                            .then(convertBlobToBase64)
                            .then(base64Image => {
                                questionObject.image = base64Image;
                                return questionObject;
                            })
                    });
            });

    } else if (gameMode === 'Vehicles') {
        return getVehicles()
            .then(vehicle => {
                let idRange = vehicle.count;
                const questionsIds = drawQuestions(idRange);
                return Promise.all(
                        [getVehicleById(questionsIds[0]),
                            getVehicleById(questionsIds[1]),
                            getVehicleById(questionsIds[2]),
                            getVehicleById(questionsIds[3])
                        ])
                    .then(vehiclesArray => {
                        let vehiclesNamesArray = vehiclesArray.map(vehicle => vehicle.name);
                        let correctAnswerIdIndex = Math.floor(Math.random() * questionsIds.length);
                        let correctAnswer = vehiclesNamesArray[correctAnswerIdIndex];
                        const correctAnswerId = questionsIds[correctAnswerIdIndex];

                        let questionObject = {
                            image: '',
                            answers: vehiclesNamesArray,
                            rightAnswer: correctAnswer,
                        }
                        return getVehicleImageBlobById(correctAnswerId)
                            .then(convertBlobToBase64)
                            .then(base64Image => {
                                questionObject.image = base64Image;
                                return questionObject;
                            })
                    });
            });
    } else {
        throw new Error('Invalid game mode');
    }
}
export default generateQuestions;


function drawQuestions(idRange) {
    let idArray = [];
    for (let i = 1; i < idRange + 1; i++) {
        idArray.push(i);
    }
    let chosenIds = [];
    for (let i = 0; i < 4; i++) {
        let randomNumberIndex = Math.floor(Math.random() * idArray.length);
        chosenIds.push(idArray[randomNumberIndex]);
        idArray.splice(randomNumberIndex, 1);
    }
    return chosenIds;
}

function convertBlobToBase64(blob) {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
            let base64data = reader.result.substr(reader.result.indexOf(',') + 1);
            resolve(base64data);
        }
    });
}