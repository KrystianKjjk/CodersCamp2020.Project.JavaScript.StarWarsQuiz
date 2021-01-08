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

  askQuestion(question, callback) {
    this._askedQuestions++;
    this._activeQuestion = question;
    callback();
  }

  answerQuestion(answer, callback) {
    this._answers.push(answer);
    if (answer.name === this._activeQuestion.rightAnswer.name) {
      this._points++;
    }
    callback();
  }
}

function createPlayer(name) {
  return new HumanPlayer(name);
}

export default createPlayer;
