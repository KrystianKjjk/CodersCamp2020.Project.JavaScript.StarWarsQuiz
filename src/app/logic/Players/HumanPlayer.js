import answerCorrectness from '../AnswerCorrectness/AnswerCorrectness';

class HumanPlayer {
  constructor(name) {
    this._name = name;
    this._points = 0;
    this._askedQuestions = 0;
    this._activeQuestion = null;
    this._answers = [];
  }

  get playerInfo() {
    return {
      name: this._name, 
      points: `${this._points}/${this._askedQuestions}`
    };
  }

  get answersHistory() {
    return this._answers;
  }

  askQuestion(question, callbacks) {
    if (typeof question !== 'object' || question === null) throw Error('First argument must be an object');
    if (!Array.isArray(callbacks)) throw Error('Second argument must be an array');
    this._askedQuestions++;
    this._activeQuestion = question;
    callbacks.forEach((callback) => {callback()});
  }

  answerQuestion(answer, callbacks) {
    if (typeof answer !== 'string') throw Error('First argument must be a string');
    if (!Array.isArray(callbacks)) throw Error('Second argument must be an array');
    this._answers.push(answer);
    if (answerCorrectness(this._activeQuestion.rightAnswer, answer)) {
      this._points++;
    }
    callbacks.forEach((callback) => {callback(answer)});
  }
}

function createPlayer(name) {
  return new HumanPlayer(name);
}

export default createPlayer;
