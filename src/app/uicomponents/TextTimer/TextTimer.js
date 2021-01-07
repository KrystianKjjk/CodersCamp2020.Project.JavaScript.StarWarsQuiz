function generateTextTimerComponent() {
    const timerDiv = document.createElement('div');

    let gameTime = 10;
    let getTime = setInterval(() => {

        const timeObject = generateMinutesAndSeconds(gameTime);
        //timerDiv.innerHTML = ;
        console.log(timeObject.minutes + ':' + timeObject.seconds);
        if (gameTime === 0) { clearInterval(getTime); }
        gameTime = gameTime - 1;
    }, 1000);

    //uzyskany czas umiescic w divie i zwrocic ten div z funkcji
    return timerDiv;
}

function generateMinutesAndSeconds(gameTimeInSeconds) {

    const minutes = Math.floor(gameTimeInSeconds / 60);
    const seconds = gameTimeInSeconds - minutes * 60;
    return { minutes, seconds };
}

export { generateTextTimerComponent };