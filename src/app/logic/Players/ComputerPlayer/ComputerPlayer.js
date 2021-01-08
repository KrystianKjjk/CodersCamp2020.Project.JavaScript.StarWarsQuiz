function createPlayer() {
    const player = {
        giveAnswerCallbacks: [],

        onGiveAnswerDo(callback) {
            this.giveAnswerCallbacks.push(callback);
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