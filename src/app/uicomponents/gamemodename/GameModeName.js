import MODES from "../GameModes.js"

const createGameModeName = (modeName) => {
    const people = MODES[0];
    const vehicles = MODES[1];
    const starships = MODES[2];

    const gameModeNameDiv = document.createElement('div');
    gameModeNameDiv.className = 'gameModeContainer';

    switch (modeName) {
        case people:
            gameModeNameDiv.textContent = 'Who is this character?';
            break;
        case vehicles:
            gameModeNameDiv.textContent = 'Do you recognize this vehicle?';
            break;
        case starships:
            gameModeNameDiv.textContent = 'Do you recognize this starship?';
            break;
        default:
            gameModeNameDiv.textContent = 'Unknown game mode';
            throw 'Mode name argument was not passed to the createGameModeName component or the argument was invalid'
    }
    return gameModeNameDiv;    
}

export default createGameModeName;
