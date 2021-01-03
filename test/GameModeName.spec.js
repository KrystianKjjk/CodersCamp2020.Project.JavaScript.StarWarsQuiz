import createGameModeName from "../src/app/GameModeName.js";

let sampleModeName = 'People'; 

describe('Game Mode Name component test', () => {
    it('check if mode name component was created', () => {
        document.body.appendChild(createGameModeName(sampleModeName));
        expect(document.body.querySelector(".gameModeContainer")).toBeTruthy();
    })
    it('check if the container contains the mode name', () => {
        expect(document.body.querySelector(".gameModeContainer").innerHTML).toBe('Who is this character?');
    })
    it('check if the error will be thrown if function argument was not passed', () =>{
        document.body.innerHTML = ''; //removing the previously created div
        expect(createGameModeName).toThrowError();
    })
})
