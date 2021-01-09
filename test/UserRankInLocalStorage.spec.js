import {addUserRankInLocalStorage, getUserRankInLocalStorage } from '../src/app/logic/UserRankInLocalStorage/UserRankInLocalStorage';

const obj = {
  gameMode: 'People',
  userName: 'test',
  numberOfCorrectAnswers: 22,
  numberOfTotalAnswers: 33,
}

describe('UserRankInLocalStorage tests', () => {
  it('Correct type of arguments.', () => {
    expect(() => addUserRankInLocalStorage(obj)).not.toThrowError('Incorrect type of arguments.');
  });
  it('Correct game mode.', () => {
    expect(() => addUserRankInLocalStorage(obj)).not.toThrowError('Incorrect game mode.');
  });
  it('Incorrect type of arguments.', () => {
    obj.gameMode = 2;
    expect(() => addUserRankInLocalStorage(obj)).toThrowError('Incorrect type of arguments.');
  });
  it('Incorrect game mode.', () => {
    obj.gameMode = 'Peopleees';
    expect(() => addUserRankInLocalStorage(obj)).toThrowError('Incorrect game mode.');
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
