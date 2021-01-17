import {GameModes} from '../../Consts.js';
//FS change - modify object from Justynas function to be array of properties values
const MODES = Object.values(GameModes);


/* ---------addUserRankInLocalStorage-------------
  Function takes object:

  obj = {
    gameMode: string,
    userName: string,
    numberOfCorrectAnswers: number,
    numberOfTotalAnswers: number,
   }
   --------------------------------------------- */

function addUserRankInLocalStorage(obj) {
  //checks if passed arguments are correct
  if( typeof obj.gameMode !== 'string'
      || typeof obj.userName !== 'string'
      || typeof obj.numberOfCorrectAnswers !== 'number'
      || typeof obj.numberOfTotalAnswers !== 'number' ) throw Error('Incorrect type of arguments.');

  //check if the mode of the game is correct
  if( !MODES.includes(obj.gameMode) ) throw Error('Incorrect game mode.');

  //if gameMode doesn't exist in the localstorage create it
  let arrayOfUsersAndScores = JSON.parse(localStorage.getItem(obj.gameMode));
  if(arrayOfUsersAndScores === null) {
    let userAndScore = [new CreateUserAndScoreObject(obj.userName, obj.numberOfCorrectAnswers, obj.numberOfTotalAnswers)];
    localStorage.setItem(obj.gameMode,JSON.stringify(userAndScore));
  }
  else {
    let doesUserExist = false;
    //check if user exists
    for(let userAndScore of arrayOfUsersAndScores) {
      if(userAndScore.userName === obj.userName) {
        //if user exists overwrite his score
        userAndScore.numberOfCorrectAnswers = obj.numberOfCorrectAnswers;
        userAndScore.numberOfTotalAnswers = obj.numberOfTotalAnswers;
        doesUserExist = true;
      }
    }
    //if user doesn't exists create one
    if(!doesUserExist) {
      let userAndScore = new CreateUserAndScoreObject(obj.userName, obj.numberOfCorrectAnswers, obj.numberOfTotalAnswers);
      arrayOfUsersAndScores.push(userAndScore);
    }
    localStorage.setItem(obj.gameMode,JSON.stringify(arrayOfUsersAndScores));
  }
}

/* --------------getUserRankInLocalStorage-------------------------
    Function returns an empty object
    if in the localstorage doesn't exist selected gameMode.
    Otherwise function returns array of objects:

    obj = {
      userName: string,
      numberOfCorrectAnswers: number,
      numberOfTotalAnswers: number
    }
    -------------------------------------------------------------*/

function getUserRankInLocalStorage(gameMode) {
  //check if the mode of the game is correct
  if( !MODES.includes(gameMode) ) throw Error('Incorrect game mode.');

  let arrayOfUsersAndScores = JSON.parse(localStorage.getItem(gameMode));

  return arrayOfUsersAndScores === null ? {} : arrayOfUsersAndScores;
}


function CreateUserAndScoreObject(userName, numberOfCorrectAnswers, numberOfTotalAnswers) {
  this.userName = userName;
  this.numberOfCorrectAnswers = numberOfCorrectAnswers;
  this.numberOfTotalAnswers = numberOfTotalAnswers;
}

export { addUserRankInLocalStorage, getUserRankInLocalStorage }
