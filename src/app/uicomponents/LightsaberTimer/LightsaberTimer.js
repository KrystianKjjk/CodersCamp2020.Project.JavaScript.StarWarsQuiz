function generateLightsaberTimerComponent() {

    const lightsaberDiv = document.createElement('div');
    lightsaberDiv.className = 'lightsaber';
    lightsaberDiv.style.width = '1000px';
    const handleDiv = document.createElement('div');
    handleDiv.className = 'handle';
    handleDiv.style.position = 'absolute';
    handleDiv.style.width = '16%';
    handleDiv.style.height = '49px';
    handleDiv.style.left = '8px';
    lightsaberDiv.appendChild(handleDiv);
    const handleImage = document.createElement('img');
    handleImage.src = "/static/assets/ui/LightsaberHandle.png";
    handleImage.alt = 'Handle image';
    handleDiv.appendChild(handleImage);
    const saberDiv = document.createElement('div');
    saberDiv.style.position = 'absolute';
    saberDiv.style.width = '84%';
    saberDiv.style.height = '26px';
    saberDiv.style.left = '282px';
    saberDiv.style.top = '10px';
    saberDiv.style.background = '#BCBCBC';
    saberDiv.style.borderRadius = '8px';
    saberDiv.style.boxShadow = 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)';
    saberDiv.className = 'saber';
    lightsaberDiv.appendChild(saberDiv);
    const progressDiv = document.createElement('div');
    progressDiv.className = 'progress-bar';
    progressDiv.style.position = 'relative';
    progressDiv.style.height = '26px';
    progressDiv.style.background = '#FFFFFF';
    progressDiv.style.borderRadius = '8px';
    progressDiv.style.boxShadow = '10px -5px 15px #FF0000, 10px 5px 15px #FF0000, inset 0px 5px 4px rgba(255, 0, 0, 0.25)';
    progressDiv.style.width = '100%';
    saberDiv.appendChild(progressDiv);


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