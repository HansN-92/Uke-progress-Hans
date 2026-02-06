function youWin(){
    changeGameViewWindow("combatWonWindow");
    coins += 20 + 10 * stageNumber;
    updateView();
    
}

function setName(){
    playerName = document.getElementById("myInput").value;
    console.log(playerName);
    /* updateView(); trenger den kalles opp?? ser ikke sånn ut */
} 

function nextStage(){
    changeGameViewWindow("gameCombatWindow");
    stageNumber += 1;
    strength += stageNumber * strengthStageGrowth;
    trollHP += stageNumber * trollHPStageGrowth;
    playerHP += stageNumber * playerHPStageGrowth;
    trollDMG += stageNumber * trollDMGStageGrowth;
    updateView();
}

function youLost(){
    if(playerHP <= 0){
        changeGameViewWindow("combatLostWindow");
        updateView();
    }
}

function campActionForage(){
    if(playerCampActions >= 1){
        playerCampActions -= 1;
        berries += Math.floor(Math.random() * 10) +1;
        updateView();
    }
}
function campActionHunt(){
    if(playerCampActions >= 1){
        playerCampActions -= 1;
        meats += Math.floor(Math.random() * 3) +1;
        updateView();
    }
}
function campActionCook(){
    if(playerCampActions >= 1 && meats >= 1){
        playerCampActions -= 1;
        meats -= 1;
        bigMeals += 1;
        updateView();
    }
}

function campRest(){
    playerHP = maxPlayerHP;
    stamina = maxStamina;
    nextStage();
    updateView();
}

function afterCombatLoot(){
    
}


/*    function restartGame(){
playerName = "";
trollHP = 1000;
stamina = 20;
coins = 0;
strength = 10;
weapon = "";
staminaCost = 1;
berries = 10;
meats = 5;
bigMeals = 2;
maxStamina = 50;
weaponStrengthBonus = 0;
updateView()
    <button id="restartButton" onclick="restartGame()">Restart</button>  
}
*/
