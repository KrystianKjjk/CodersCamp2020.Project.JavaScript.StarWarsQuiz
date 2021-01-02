function generateQuestions(gameMode) {
    if (gameMode === 'People') {
        return fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(json => {
                let idRange = json.count;
                const questionsIds = drawQuestionsAndCorrectAnswer(idRange);
                return Promise.all(
                        [getPeopleById(questionsIds[0]),
                            getPeopleById(questionsIds[1]),
                            getPeopleById(questionsIds[2]),
                            getPeopleById(questionsIds[3])
                        ])
                    .then(peopleArray => {
                        let peopleNamesArray = peopleArray.map(obj => obj.name);
                        let correctAnswerIdIndex = Math.floor(Math.random() * questionsIds.length);
                        let correctAnswer = peopleNamesArray[correctAnswerIdIndex];
                        const correctAnswerId = questionsIds[correctAnswerIdIndex];

                        let questionObject = {
                            image: '',
                            answers: peopleNamesArray,
                            rightAnswer: correctAnswer,
                        }
                        return fetch(`static/assets/img/modes/people/${correctAnswerId}.jpg`)
                            .then(response => response.blob())
                            .then(blob => {
                                return new Promise((resolve) => {
                                    let reader = new FileReader();
                                    reader.readAsDataURL(blob);
                                    reader.onloadend = function() {
                                        let base64data = reader.result.substr(reader.result.indexOf(',') + 1);
                                        questionObject.image = base64data;
                                        resolve(questionObject);
                                    }
                                });
                            });
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


function getPeopleById(id) {
    return fetch(`https://swapi.dev/api/people/${id}`).then(response => response.json());
}