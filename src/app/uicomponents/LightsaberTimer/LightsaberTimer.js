function generateLightsaberTimerComponent() {
    const lightsaberDiv = createLightsaberElement();
    const progressDiv = lightsaberDiv.querySelector('.progress-bar');
    const initialWidthOfProgressBar = 100;
    progressDiv.style.width = `${initialWidthOfProgressBar}%`;

    const totalGameTime = 120;
    let gameTime = totalGameTime;

    let interval = setInterval(() => {
        gameTime--;
        const width = gameTime * initialWidthOfProgressBar / totalGameTime;
        progressDiv.style.width = `${width}%`;
        if (gameTime === 0) { clearInterval(interval); }
    }, 1000);

    return lightsaberDiv;
}

function createLightsaberElement() {
    const lightsaberDiv = document.createElement('div');
    lightsaberDiv.className = 'lightsaber';
    const handleDiv = document.createElement('div');
    handleDiv.className = 'handle';
    lightsaberDiv.appendChild(handleDiv);
    const handleImage = document.createElement('img');
    handleImage.src = "static/assets/ui/LightsaberHandle.png";
    handleImage.alt = 'Handle image';
    handleDiv.appendChild(handleImage);
    const saberDiv = document.createElement('div');
    saberDiv.className = 'saber';
    lightsaberDiv.appendChild(saberDiv);
    const progressDiv = document.createElement('div');
    progressDiv.className = 'progress-bar';
    saberDiv.appendChild(progressDiv);
    return lightsaberDiv;
}

export { generateLightsaberTimerComponent };