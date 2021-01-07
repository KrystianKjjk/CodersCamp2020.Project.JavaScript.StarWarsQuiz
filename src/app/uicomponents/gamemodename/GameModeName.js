import {GameModes} from '../../Consts.js'

const createGameModeName = (modeName) => {
    const people = GameModes.PEOPLE;
    const vehicles = GameModes.VEHICLES;
    const starships = GameModes.STARSHIPS;
    const start = 'Default';

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
        case start:
            gameModeNameDiv.textContent = 'Select game mode';
            break;
        default:
            throw 'Mode name argument was not passed to the createGameModeName component or the argument was invalid';
    }
    return gameModeNameDiv;
}

export default createGameModeName;
