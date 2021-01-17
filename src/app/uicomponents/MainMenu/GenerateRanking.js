import {getUserRankInLocalStorage} from '../../logic/UserRankInLocalStorage/UserRankInLocalStorage.js'
import noModeSelectedModal from '../QuizGameMode/NoModeSelectedModal.js'
import displayRanking from '../../Ranking';

function generateRankingContainer() {
    let ranking;

    let selectedMode = 0;
    try {
        selectedMode = document.querySelector(".active").innerHTML;
    } catch (error) {
        noModeSelectedModal();
    }

    if (selectedMode != 0) {
        const rankingData = getUserRankInLocalStorage(selectedMode);

        if(rankingData.length >= 1 ){
            const rankingDiv = displayRanking(rankingData);
            ranking = rankingDiv;
        }  
        else{
            const emptyRanking = document.createElement('div');
            emptyRanking.id = "emptyRanking";
            const emptyRankingText = document.createElement('h2');
            emptyRankingText.innerText = `Leaderboard for the ${selectedMode} mode is empty...`
            emptyRanking.appendChild(emptyRankingText); 
            ranking = emptyRanking;
        }          
    }
    return ranking;
}

export default generateRankingContainer;