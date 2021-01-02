function displayRanking(listOfUsers) {
  if (listOfUsers.length > 3) {
    throw Error('List of users cannot have more than three players.');
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
    playerP.innerText = user.name;
    ranking.appendChild(playerP);
    const pointsP = document.createElement('p');
    pointsP.innerText = user.points;
    ranking.appendChild(pointsP);
  });

  return ranking;
}

export default displayRanking;
