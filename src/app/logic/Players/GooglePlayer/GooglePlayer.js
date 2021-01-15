import answerCorrectness from '../../AnswerCorrectness/AnswerCorrectness';

function createPlayer() {
    const player = {
        _giveAnswerCallbacks: [],
        _points: 0,
        _askedQuestions: 0,
        _answers: [],

        getPoints() {
            return this._points;
        },

        getAnswers() {
            return this._answers;
        },

        getAskedQuestions() {
            return this._askedQuestions;
        },

        onGiveAnswerDo(callbacks) {
            const callbacksArray = Array.isArray(callbacks) ? callbacks : [callbacks];
            if (callbacksArray.some(callback => typeof callback !== 'function')) {
                throw Error('Given argument is neither function nor array of functions');
            }
            this._giveAnswerCallbacks.push(...callbacksArray);
        },

        answerQuestion(question) {
            const answer = ''; //TODO USE GOOGLE VISION
            this._answers.push(answer);
            this._askedQuestions++;
            if (answerCorrectness(question.rightAnswer, answer)) {
              this._points++;
            }
            this._giveAnswerCallbacks.forEach((callback) => {callback(answer, question)});

            return answer;
        },
    };
    
    return player;
} 

export default createPlayer;