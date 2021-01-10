function generateLightsaberTimerComponent() {

    const lightsaberDiv = document.createElement('div');
    lightsaberDiv.className = 'lightsaber';
    const handleDiv = document.createElement('div');
    handleDiv.className = 'handle';
    lightsaberDiv.appendChild(handleDiv);
    const handleImage = document.createElement('img');
    handleImage.src = "/static/assets/ui/LightsaberHandle.png";
    handleImage.alt = 'Handle image';
    handleDiv.appendChild(handleImage);
    const saberDiv = document.createElement('div');
    lightsaberDiv.appendChild(saberDiv);
    saberDiv.className = 'saber';
    const progressDiv = document.createElement('div');
    saberDiv.appendChild(progressDiv);
    progressDiv.className = 'progress-bar';


    let begWidth = 100;
    let gameTime = 120;
    const totalGameTime = 120;

    let interval = setInterval(() => {
        gameTime--;

        const width = gameTime * begWidth / totalGameTime;

        progressDiv.style.width = `${width}%`;
        if (gameTime === 0) { clearInterval(interval); }
    }, 1000);

    return lightsaberDiv;
}

export { generateLightsaberTimerComponent };