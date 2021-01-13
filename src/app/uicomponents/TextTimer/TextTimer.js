function generateTextTimerComponent() {
    const timerDiv = document.createElement('div');
    timerDiv.className = 'text-timer';
    let gameTime = 120;
    changeTimeFormatAndSaveIntoDiv(gameTime, timerDiv);

    let interval = setInterval(() => {
        gameTime--;
        changeTimeFormatAndSaveIntoDiv(gameTime, timerDiv);
        console.log(gameTime);
        if (gameTime === 0) { clearInterval(interval); }
    }, 1000);

    return timerDiv;
}

function changeTimeFormatAndSaveIntoDiv(gameTime, timerDiv) {
    const timeObject = convertGameTimeToMinutesAndSeconds(gameTime);
    timerDiv.innerHTML = 'Time Left: ' + timeObject.minutes + 'm ' + timeObject.seconds + 's';
}

function convertGameTimeToMinutesAndSeconds(gameTimeInSeconds) {
    const minutes = Math.floor(gameTimeInSeconds / 60);
    const seconds = gameTimeInSeconds - minutes * 60;
    return { minutes, seconds };
}

export { generateTextTimerComponent };