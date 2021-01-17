import createMainMenuOptions from "../MainMenuOptions/MainMenuOptions.js"
import logoStarWars from "../LogoStarWars/LogoStarWars.js"
import peopleImageToRecognize from "../../uicomponents/PeopleImageToRecognize/PeopleImageToRecognize.js"
import generateModeNameAndRules from './GenerateModeNameAndRules.js'
import {StartMode} from '../../Consts.js'
import redButton from '../RedButton/RedButton.js'
import whiteIconButton from '../WhiteIconButton/WhiteIconButton.js'
import {returnImageBase64} from './GetSampleImage.js'
import generateRankingContainer from './GenerateRanking.js'
import apikeyModal from './ApikeyModal'

async function mainMenu(runGameMode) {

    //creating containers for main menu elements
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.className = 'mainMenu';

    const header = document.createElement('div');
    header.className = 'header';
    mainMenuDiv.appendChild(header);

    const mainsection = document.createElement('div');
    mainsection.className = 'mainsection';
    mainMenuDiv.appendChild(mainsection);

    //creating logo, appending to the header
    const logo = logoStarWars();
    header.appendChild(logo);

    //creating main menu options bar, appending to header
    const mainMenuOptions = createMainMenuOptions(generateModeNameAndRules);
    header.appendChild(mainMenuOptions);

    //creating sample image using imported Justyna's functions, appending to main section
    const image = document.createElement('div');
    image.className = 'image';
    let startImage = await returnImageBase64();
    const imageToRecognize = peopleImageToRecognize(startImage);
    image.appendChild(imageToRecognize);
    mainsection.appendChild(image);

    //creating mode name container and rules container with default texts
    const nameRulesRanking = document.createElement('div');
    nameRulesRanking.className = 'namerulesranking';
    mainsection.appendChild(nameRulesRanking);

    const modeNameAndRules = generateModeNameAndRules(StartMode);
    nameRulesRanking.appendChild(modeNameAndRules.nameModeDiv);
    nameRulesRanking.appendChild(modeNameAndRules.rulesDiv);

    //creating buttons
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-users');
    const rulesRankingButton = whiteIconButton('Hall of Fame', icon, switchRuleswithRanking);
    
    //Play the Game button
    const playButton = redButton('Play the Game', apikeyModal, runGameMode);

    //creating a 'spacer' div to separate the buttons
    const buttonsSpacer = document.createElement('div');
    buttonsSpacer.style.width = '2rem';
    buttons.appendChild(rulesRankingButton);
    buttons.appendChild(buttonsSpacer);
    buttons.appendChild(playButton);
    nameRulesRanking.appendChild(buttons);

    //finally - returning full mainMenuDiv
    return mainMenuDiv;
}

//callback function for hall of fame button to switch rules with ranking
function switchRuleswithRanking() {
    let RulesDisplayed = document.body.querySelector('#howToPlay');
    let RankingDisplayed = document.body.querySelector('.namerulesranking > div:nth-child(2)');
    let menuDiv = document.body.querySelector('.gameModeContainer').parentNode;
    const buttonText = event.target;

    if (RulesDisplayed) {
        let rankingDiv = generateRankingContainer();
        if(rankingDiv){
            RulesDisplayed = menuDiv.replaceChild(rankingDiv, RulesDisplayed);
            buttonText.innerHTML = 'Game Rules';
        }
    } else {
        const isModeButtonActive = document.body.querySelector('.active');
        let rules;
        if (isModeButtonActive) {
            rules = generateModeNameAndRules(isModeButtonActive.innerHTML);
        } else {
            rules = generateModeNameAndRules('Default');
        }
        RankingDisplayed = menuDiv.replaceChild(rules.rulesDiv, RankingDisplayed);
        buttonText.innerHTML = 'Hall of Fame';
    }
}

//remember it's an async function returned :)
export default mainMenu;