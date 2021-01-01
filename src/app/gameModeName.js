const createGameModeName = (modeName) => {
    let gameModeNameDiv = document.createElement('div');
    gameModeNameDiv.className = 'gameModeContainer';
    
    switch (modeName) {
        case 'People':
            gameModeNameDiv.id = 'people';
            gameModeNameDiv.textContent = 'Who is this character?';
            break;
        case 'Vehicles':
            gameModeNameDiv.id = 'vehicles';
            gameModeNameDiv.textContent = 'Do you recognize this vehicle?';
            break;
        case 'Starships':
            gameModeNameDiv.id = 'starships';
            gameModeNameDiv.textContent = 'Do you recognize this starship?';
            break;
        default:
            gameModeNameDiv.id = 'unknown';
            gameModeNameDiv.textContent = 'Unknown game mode';
            throw 'Mode name argument was not passed to the createGameModeName component!'
    }

    document.body.appendChild(gameModeNameDiv); 
    return gameModeNameDiv;
}

let test = 'People';
createGameModeName(test);

export default createGameModeName;