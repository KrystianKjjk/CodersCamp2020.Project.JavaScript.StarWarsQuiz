import {addUserRankInLocalStorage, getUserRankInLocalStorage } from '../src/app/logic/UserRankInLocalStorage/UserRankInLocalStorage';

const obj = {
  gameMode: 'People',
  userName: 'test',
  numberOfCorrectAnswers: 22,
  numberOfTotalAnswers: 33,
}

let objIncorrect = Object.create(obj);
    objIncorrect.gameMode = 2;

describe('UserRankInLocalStorage tests', () => {
  it('Correct type of arguments.', () => {
    expect(() => addUserRankInLocalStorage(obj)).not.toThrowError('Incorrect type of arguments.');
  });
  it('Incorrect type of arguments.', () => {
    let objIncorrect = Object.create(obj);
    objIncorrect.gameMode = 2;
    expect(() => addUserRankInLocalStorage(objIncorrect)).toThrowError('Incorrect type of arguments.');
  });
  it('Correct game mode.', () => {
    objIncorrect.gameMode = 'People';
    expect(() => addUserRankInLocalStorage(objIncorrect)).not.toThrowError('Incorrect game mode.');
  });
  it('Incorrect game mode.', () => {
    objIncorrect.gameMode = 'Peopleees';
    expect(() => addUserRankInLocalStorage(objIncorrect)).toThrowError('Incorrect game mode.');
  });
  it('Incorrect game mode.', () => {
    const gameMode = 'Peopleees';
    expect(() => getUserRankInLocalStorage(gameMode)).toThrowError('Incorrect game mode.');
  });
  it('Incorrect game mode.', () => {
    const gameMode = 'People';
    expect(() => getUserRankInLocalStorage(gameMode)).not.toThrowError('Incorrect game mode.');
  });
});
