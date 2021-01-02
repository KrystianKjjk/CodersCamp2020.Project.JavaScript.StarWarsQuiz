const createGameModeName = (modeName) => {
    const gameModeNameDiv = document.createElement('div');
    gameModeNameDiv.className = 'gameModeContainer';
    
    switch (modeName) {
        case 'People':
            gameModeNameDiv.textContent = 'Who is this character?';
            break;
        case 'Vehicles':
            gameModeNameDiv.textContent = 'Do you recognize this vehicle?';
            break;
        case 'Starships':
            gameModeNameDiv.textContent = 'Do you recognize this starship?';
            break;
        default:
            gameModeNameDiv.textContent = 'Unknown game mode';
            throw 'Mode name argument was not passed to the createGameModeName component!'
    }

    document.body.appendChild(gameModeNameDiv); 
    return gameModeNameDiv;
}

export default createGameModeName;