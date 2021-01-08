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

    const header = document.createElement('div');
    header.className = 'header';
    mainMenuDiv.appendChild(header);

    const mainsection = document.createElement('div');
    mainsection.className = 'mainsection';
    mainMenuDiv.appendChild(mainsection);

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    //first initialize all elements with the default values
    //then callback function from main menu options will pull the new game name and rules

    
    //creating logo, appending and setting grid position
    const logo = logoStarWars();
    header.appendChild(logo);

    //creating main menu options bar, appending and setting grid position
    const mainMenuOptions = createMainMenuOptions(generateModeNameAndRules);
    header.appendChild(mainMenuOptions);

    //creating image, appending and setting grid position

    const image = document.createElement('div');
    image.className = 'image';

    let randomImage = await returnImageBase64();
    const imageToRecognize = peopleImageToRecognize(randomImage);
    image.appendChild(imageToRecognize);
    mainsection.appendChild(image);

    //creating mode name container and rules container with default texts
    const nameRulesRanking = document.createElement('div');
    nameRulesRanking.className = 'namerulesranking';
    mainsection.appendChild(nameRulesRanking);

    const modeNameAndRules = generateModeNameAndRules('Default');
    const nameDiv = modeNameAndRules[0];
    const rulesDiv =  modeNameAndRules[1];   

    //appending mode name container and positioning
    nameRulesRanking.appendChild(nameDiv); 
    
    //appending rules container and positioning
    nameRulesRanking.appendChild(rulesDiv);   

    //creating buttons
    const icon =  document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-users');
    const rulesRankingButton = whiteIconButton('Hall of Fame', icon ,switchRuleswithRanking);
  

    const playButton = redButton('Play the Game', function (){
        console.log('Placeholder for play the game button');
    })

    const buttonsSpacer = document.createElement('div');
    buttonsSpacer.style.width = '2rem';


    buttons.appendChild(rulesRankingButton);
    buttons.appendChild(buttonsSpacer);
    buttons.appendChild(playButton);
    nameRulesRanking.appendChild(buttons);


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
    let RulesDisplayed = document.body.querySelector('#howToPlay');
    let RankingDisplayed = document.body.querySelector('#theBestPlayers');
    let menuDiv = document.body.querySelector('.gameModeContainer').parentNode;

    if(RulesDisplayed){        
    //USERS TO BE ADDED HERE FROM THE FUNCTION RETURNING THE USERS LIST
        const data = [
        { name: 'Ania', points: '15/20' },
        { name: 'Mateusz', points: '14/30' },
        { name: 'Julia', points: '10/30' }
        ];
        const rankingDiv = displayRanking(data);
        RulesDisplayed = menuDiv.replaceChild(rankingDiv,RulesDisplayed);
    }
    else {
        const isModeButtonActive = document.body.querySelector('.active');
        let rulesDiv;
        if(isModeButtonActive){
            rulesDiv = generateModeNameAndRules(isModeButtonActive.innerHTML);
        }
        else{
            rulesDiv = generateModeNameAndRules('Default');
        }
        RankingDisplayed = menuDiv.replaceChild(rulesDiv[1],RankingDisplayed);
    }
}

export default mainMenu;