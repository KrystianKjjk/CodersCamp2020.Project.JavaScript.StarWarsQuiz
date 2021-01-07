function generateTextTimerComponent() {
    const timerDiv = document.createElement('div');
    const textNode = document.createTextNode('AAA');
    timerDiv.appendChild(textNode);

    //utworzyć zmienna, do ktorej bedzie przypisany czas gry w sek 
    // let gameTime = 120;
    // generateMinutesAndSeconds(gameTime);

    //uzyskany czas umiescic w divie i zwrocic ten div z funkcji
    return timerDiv;
}

//utworzyc funkcje, ktora bedzie nam zwracac liczbe min i sek
function generateMinutesAndSeconds(gameTimeInSeconds) {
    let minutes = 2;
    let seconds;
    setInterval(function() {
        minutes = Math.floor(gameTime / 60);


    }, 1000);
    //utworzyc zmienna, w ktorej beda sie znajdowac minuty pozostalego czasu gry zaokrąglone w dol
    //liczbe minut uzyskujemy: gameTIME/60  i zaokraglic w dol do liczby calkowitej
    //utworzyc zmienna, w ktorej beda sie znajdowac sekundy pozostalego czasu gry
    //seconds=gameTime-minutes*60
}
export { generateTextTimerComponent };