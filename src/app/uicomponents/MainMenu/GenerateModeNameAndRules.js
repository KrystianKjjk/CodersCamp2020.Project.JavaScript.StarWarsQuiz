import createGameModeName from '../GameModeName/GameModeName.js'
import displayText from '../../GameRules.js'
import {GameModes} from '../../Consts.js'
import RULESTEXTS from '../../ConstRulesTexts.js'

//generate divs with mode name and rules with appropriate text
const generateModeNameAndRules = (modeName) => {
    const people = GameModes.PEOPLE;
    const vehicles = GameModes.VEHICLES;
    const starships = GameModes.STARSHIPS;

    let ruleText;
    switch (modeName) {
        case people:
            ruleText = RULESTEXTS.PEOPLERULES;
            break;
        case vehicles:
            ruleText = RULESTEXTS.VEHICLESRULES;
            break;
        case starships:
            ruleText = RULESTEXTS.STARSHIPSRULES;
            break;
        default:
            ruleText = RULESTEXTS.DEFAULTRULES;
     }

     

    const nameModeDiv = createGameModeName(modeName);
    const rulesDiv = displayText(ruleText);

    const modeNameAndRules = {
        nameModeDiv: nameModeDiv,
        rulesDiv: rulesDiv
    };

    return modeNameAndRules;
}

export default generateModeNameAndRules;