import { getPersonById, getPersonImageBlobById, getPeople } from "./PeopleClient";

function generateQuestions(gameMode) {
    if (gameMode === 'People') {
        return getPeople()
            .then(people => {
                let idRange = people.count;
                const questionsIds = drawQuestionsAndCorrectAnswer(idRange);
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

    } else if (gameMode === 'Vehicles') {

    } else {
        throw new Error('Invalid game mode');
    }
}
export default generateQuestions;


function drawQuestionsAndCorrectAnswer(idRange) {
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