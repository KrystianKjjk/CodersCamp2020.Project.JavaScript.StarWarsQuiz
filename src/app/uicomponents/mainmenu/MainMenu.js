import createMainMenuOptions from "../mainmenuoptions/MainMenuOptions.js"
import logoStarWars from "../../logoStarWars.js"
import peopleImageToRecognize from "../../PeopleImageToRecognize.js"
import generateModeNameAndRules from './generateModeNameAndRules.js'
import {GameModes} from '../../Consts.js'


async function mainMenu () {
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.className = 'mainMenu';

    //first initialize all elements with the default values
    //then callback function from main menu options will pull the new game name and rules

    
    //creating logo, appending and setting grid position
    const logo = logoStarWars();
    mainMenuDiv.appendChild(logo);
    logo.style.gridArea = "a";

    //creating main menu options bar, appending and setting grid position
    const mainMenuOptions = createMainMenuOptions(generateModeNameAndRules);
    mainMenuDiv.appendChild(mainMenuOptions);
    mainMenuOptions.style.gridArea = "b";

    //creating image, appending and setting grid position
    let randomImage = await returnImageBase64();
    console.log(randomImage);

    const imageToRecognize = peopleImageToRecognize(randomImage);
    mainMenuDiv.appendChild(imageToRecognize);
    imageToRecognize.style.gridArea = "c";

    //creating mode name container and rules container with default texts
    const modeNameAndRules = generateModeNameAndRules(GameModes.DEFAULT);
    const nameDiv = modeNameAndRules[0];
    const rulesDiv =  modeNameAndRules[1];   

    //appending mode name container and positioning
    mainMenuDiv.appendChild(nameDiv); 
    
    //appending rules container and positioning
    mainMenuDiv.appendChild(rulesDiv);   

    return mainMenuDiv;    
}

async function getDefaultImageBlobById() {
    const image = await fetch(`../../../../static/assets/img/modes/default/people.jpg`)
    return image.blob();
}

function convertBlobToBase64(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
            const base64data = reader.result.substr(reader.result.indexOf(',') + 1);
            resolve(base64data);
        }
    });
}

async function returnImageBase64(){
    const imageBlob = await getDefaultImageBlobById();
    const imageBase64 = await convertBlobToBase64(imageBlob);
    return imageBase64;
}

export default mainMenu;