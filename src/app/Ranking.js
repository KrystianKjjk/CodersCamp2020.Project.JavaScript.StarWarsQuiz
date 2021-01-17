function displayRanking(listOfUsers) {
  if (listOfUsers.length > 3) {
    listOfUsers = listOfUsers.sort((a,b) => ((a.numberOfCorrectAnswers/a.numberOfTotalAnswers) < (b.numberOfCorrectAnswers/b.numberOfTotalAnswers)) ? 1: -1);

    while(listOfUsers.length > 3){
      listOfUsers.pop();
    }
  }

  const ranking = document.createElement('div');
  ranking.id = 'theBestPlayers';

  const titleDiv = document.createElement('div');
  const image = document.createElement('i');
  image.className = 'fas fa-id-card-alt';
  const title = document.createElement('p');
  titleDiv.className = 'rankingTitle';
  title.className = 'rankingTitle';
  title.innerText = 'Mode Ranking';
  titleDiv.appendChild(image);
  titleDiv.appendChild(title);
  ranking.appendChild(titleDiv);

  const place = document.createElement('p');
  place.className = 'header';
  place.innerText = 'Place';
  ranking.appendChild(place);

  const player = document.createElement('p');
  player.className = 'header';
  player.innerText = 'Player';
  ranking.appendChild(player);

  const answered = document.createElement('p');
  answered.className = 'header';
  answered.innerText = 'Answered';
  ranking.appendChild(answered);

  const places = ['1st', '2nd', '3rd'];

  listOfUsers.forEach((user, index) => {
    const placeP = document.createElement('p');
    placeP.innerText = places[index];
    ranking.appendChild(placeP);
    const playerP = document.createElement('p');
    playerP.innerText = user.userName;
    ranking.appendChild(playerP);
    const pointsP = document.createElement('p');
    
    //check if number of correct answers is not 0
    let percentageScore;
    if (user.numberOfCorrectAnswers){
      percentageScore = Math.round((user.numberOfCorrectAnswers/user.numberOfTotalAnswers)*100);
    }
    else{
      percentageScore = 0;
    }

    pointsP.innerText = `${user.numberOfCorrectAnswers}/${user.numberOfTotalAnswers} (${percentageScore}%)`;
    ranking.appendChild(pointsP);
  });

  return ranking;
}

export default displayRanking;
