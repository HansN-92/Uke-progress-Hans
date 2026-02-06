
/* test start */

const page = document.getElementById("spill");
let currentpage = "gameCombatWindow";

updateView();

function updateView(){
    let html = "";

    if(currentpage == "mainMenu") html = mainMenu();
    else if(currentpage == "gameCombatWindow") html = gameCombatWindow();
    else if(currentpage == "combatWonWindow") html = combatWonWindow();
    else if(currentpage == "combatLostWindow") html = combatLostWindow();
    else if(currentpage == "shopWindow") html = shopWindow();
    else if(currentpage == "nextRoundSelectWindow") html = nextRoundSelectWindow();
    else if(currentpage == "campRestWindow") html = campRestWindow(); 


    page.innerHTML = html;
}

function changeGameViewWindow(element){
    currentpage = element;
    updateView();
}

function mainMenu(){
    return /*HTML*/ `
        <input id="myInput" onchange="setName()">
        <button id="start" onclick="changeGameViewWindow('gameCombatWindow')">Start</button>

`;
}

function gameCombatWindow(){
    return /*HTML*/ `
        <h2>Velkommen ${playerName}</h2>
        <br>
        <h3>Stage: ${stageNumber}</h3>
        <br>
        <p id="trollHPHUD" class="infoHUD"><img class="img" src="troll.jpg">TrollHP: ${trollHP} </p>
        <p id="coinsHUD" class="infoHUD">Coins: ${coins}</p>
        <p id="staminaHUD" class="infoHUD">Stamina: ${stamina}</p>
        <p id="maxStaminaHUD" class="infoHUD">Max Stamina: ${maxStamina}</p>
        <p id="staminaCostHUD" class="infoHUD">Stamina Cost: ${staminaCost}</p>
        <p id="strengthHUD" class="infoHUD">Strength: ${strength}</p>
        <p id="weaponHUD" class="infoHUD">Weapon: ${weapon}</p>
        <p id="berryHUD" class="infoHUD">Berry: ${berries} <button id="berryButton" class="eatFoodButton" onclick="eatFood('Berry', 10)">Eat Berry +10</button></p>
        <p id="meatHUD" class="infoHUD">Meat: ${meats} <button id="meatButton" class="eatFoodButton" onclick="eatMeat('Meat', 25)">Eat Meat +25</button></p>
        <p id="mealHUD" class="infoHUD">Big Meal: ${bigMeals} <button id="mealButton" class="eatFoodButton" onclick="eatMeal('BigMeal', 50)">Eat Big Meal +50</button></p>
        <p id="playerHPHUD" class="infoHUD">HP: ${playerHP} </p>


        <button id="attackButton" onclick="hitTroll()">Attack</button>

        <button id="hammerButton" class="weaponPickUp" onclick="pickUpWeapon('Hammer', 20, 3)">Pick up Hammer +20str Stam cost 3</button>
        <button id="axeButton" class="weaponPickUp" onclick="pickUpWeapon('Axe', 50, 5)">Pick up Axe +50str Stam cost 5</button>
        <button id="sawButton" class="weaponPickUp" onclick="pickUpWeapon('Chainsaw', 150, 15)">Pick up Chainsaw +150str Stam cost 15</button>
        `;
}
    
function combatWonWindow(){
    return /*HTML*/ `
        <h2>You Win</h2>
        <br>
        <button id="shopButton" onclick="changeGameViewWindow('shopWindow')">Shop</button>
        <button id="nextStageButton" onclick="changeGameViewWindow('nextRoundSelectWindow')">Next</button>
`;
}

function combatLostWindow(){
    return /*HTML*/ `
        lol you ded hahahaa
`;
}

function shopWindow(){
    return /*HTML*/ `
        i slow dev dont come here
`;
}

function nextRoundSelectWindow(){
    return /*HTML*/ `
        <button id="" onclick="nextStage()">Next Stage</button>
        <button id="" onclick="afterCombatLoot()">Loot</button>
        <button id="" onclick="changeGameViewWindow('campRestWindow')">Long Rest</button>

`;
}

function campRestWindow(){
    return /*HTML*/ `
        <button id="campForageButton" onclick="campActionForage()">Forage</button>
        <button id="campHuntButton" onclick="campActionHunt()">Hunt</button>
        <button id="campCookButton" onclick="campActionCook()">Cook</button>
        <button id="campRestButton" onclick="campRest()">Rest</button>
        <br>
        <p id="berryHUDCamp" class="infoHUDCamp">Berry: ${berries} </p>
        <p id="meatHUDCamp" class="infoHUDCamp">Meat: ${meats} </p>
        <p id="mealHUDCamp" class="infoHUDCamp">Big Meal: ${bigMeals} </p>
        <p id="playerHPHUDCamp" class="infoHUDCamp">HP: ${playerHP} </p>
        <p id="playerHPHUDCamp" class="infoHUDCamp">Camp Actions: ${playerCampActions} </p>
`;
}

/* test end*/
