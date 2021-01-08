import JaroWrinker from "./JaroWrinker";

function answerCorrectness(correctAnswer, givenAnswer) {
    if(typeof correctAnswer !== 'string' || typeof givenAnswer !== 'string') throw Error('Answers must be strings');
    let similarity = JaroWrinker(correctAnswer, givenAnswer);
    return similarity > 0.6;
}

export default answerCorrectness;
