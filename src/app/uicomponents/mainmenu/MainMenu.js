import createMainMenuOptions from "../mainmenuoptions/MainMenuOptions.js"
import logoStarWars from "../../logoStarWars.js"
import peopleImageToRecognize from "../../PeopleImageToRecognize.js"
import generateModeNameAndRules from './generateModeNameAndRules.js'
import {GameModes} from '../../Consts.js'
import redButton from '../../RedButton.js'
import whiteIconButton from '../../WhiteIconButton.js'
import displayRanking from '../../Ranking.js'


async function mainMenu () {
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.className = 'mainMenu';

    const images = document.createElement('div');
    images.className = 'images';
    images.style.gridArea= "a";
    mainMenuDiv.appendChild(images);

    const menus = document.createElement('div');
    menus.className = 'menus';
    menus.style.gridArea= "b";
    mainMenuDiv.appendChild(menus);



    //first initialize all elements with the default values
    //then callback function from main menu options will pull the new game name and rules

    
    //creating logo, appending and setting grid position
    const logo = logoStarWars();
    images.appendChild(logo);

    //creating main menu options bar, appending and setting grid position
    const mainMenuOptions = createMainMenuOptions(generateModeNameAndRules);
    menus.appendChild(mainMenuOptions);

    //creating image, appending and setting grid position
    let randomImage = await returnImageBase64();

    const imageToRecognize = peopleImageToRecognize(randomImage);
    images.appendChild(imageToRecognize);
    imageToRecognize.style.gridArea = "c";

    //creating mode name container and rules container with default texts
    const modeNameAndRules = generateModeNameAndRules('Default');
    const nameDiv = modeNameAndRules[0];
    const rulesDiv =  modeNameAndRules[1];   

    //appending mode name container and positioning
    menus.appendChild(nameDiv); 
    
    //appending rules container and positioning
    menus.appendChild(rulesDiv);   

    //creating buttons
    const rulesRankingButton = redButton('hall of fame',switchRuleswithRanking);
    menus.appendChild(rulesRankingButton);


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

function switchRuleswithRanking () {
    const RulesDisplayed = document.body.querySelector('#howToPlay');
    const RankingDisplayed = document.body.querySelector('#theBestPlayers');
    const menuDiv = document.body.querySelector('.menus');

    if(RulesDisplayed){
        //USERS TO BE ADDED HERE FROM THE FUNCTION RETURNING THE USERS LIST
        const rankingDiv = displayRanking(
        { name: 'Ania', points: '15/20' },
        { name: 'Mateusz', points: '14/30' },
        { name: 'Julia', points: '10/30' },
        { name: 'Leia Organa', points: '1/23' }
        );
        RulesDisplayed = menuDiv.replaceChild(rankingDiv,RulesDisplayed);
    }
    else {
        const isModeButtonActive = document.body.querySelector('.active');
        let rulesDiv;
        if(isModeButtonActive){
            rulesDiv = generateModeNameAndRules(isModeButtonActive.innerHTML);
        }
        else{
            rulesDiv = generateModeNameAndRules(GameModes.DEFAULT);
        }
        RankingDisplayed = menuDiv.replaceChild(rulesDiv,RankingDisplayed);
    }
}

export default mainMenu;