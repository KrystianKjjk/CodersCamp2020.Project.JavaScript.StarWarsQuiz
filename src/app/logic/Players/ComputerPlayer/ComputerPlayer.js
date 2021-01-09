function createPlayer() {
    const player = {
        giveAnswerCallbacks: [],

        onGiveAnswerDo(callbacks) {
            const callbacksArray = Array.isArray(callbacks) ? callbacks : [callbacks];
            this.giveAnswerCallbacks.push(...callbacksArray);
        },

        answerQuestion(question) {
            const answer = this._giveRandomAnswer(question.answers);
            this.giveAnswerCallbacks.forEach((callback) => {callback(answer, question)});

            return answer;
        },

        _giveRandomAnswer(answers) {
            const randomIndex = Math.floor(Math.random() * answers.length);

            return answers[randomIndex];
        }
    };
    
    return player;
} 

export default createPlayer;