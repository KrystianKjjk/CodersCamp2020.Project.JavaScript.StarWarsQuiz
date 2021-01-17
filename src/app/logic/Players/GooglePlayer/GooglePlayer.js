import answerCorrectness from '../../AnswerCorrectness/AnswerCorrectness';
import {imageRecognition} from '../../../googlevision/ImageRecognition/ImageRecognition';

function createPlayer(apiKey) {
    const player = {
        _giveAnswerCallbacks: [],
        _points: 0,
        _askedQuestions: 0,
        _answers: [],
        _apiKey: apiKey,

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

        async answerQuestion(question) {
            let answer;
            
            try {
                answer = await imageRecognition(question.image, this._apiKey); 
            } catch(error) {
                answer = this._giveRandomAnswer(question.answers);
            }
            
            this._answers.push(answer);
            this._askedQuestions++;
            if (answerCorrectness(question.rightAnswer, answer)) {
              this._points++;
            }
            this._giveAnswerCallbacks.forEach((callback) => {callback(answer, question)});

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