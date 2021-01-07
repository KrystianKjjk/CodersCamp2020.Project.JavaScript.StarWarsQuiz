function generateTextTimerComponent() {
    const timerDiv = document.createElement('div');

    let gameTime = 61;
    let getTime = setInterval(() => {

        const timeObject = generateMinutesAndSeconds(gameTime);
        timerDiv.innerHTML = 'Time left: ' + timeObject.minutes + 'm ' + timeObject.seconds + 's';
        if (gameTime === 0) { clearInterval(getTime); }
        gameTime = gameTime - 1;
    }, 1000);

    return timerDiv;
}

function generateMinutesAndSeconds(gameTimeInSeconds) {

    const minutes = Math.floor(gameTimeInSeconds / 60);
    const seconds = gameTimeInSeconds - minutes * 60;
    return { minutes, seconds };
}

export { generateTextTimerComponent };