function trollMainAttack(){
    playerHP -= trollDMG;
    updateView();
}

function trollSpecialAttack(){
    if(trollHP <= 0.1 * trollMAXHP && trollSpecialAction <=1){
        playerHP -= trollDMG * 2;
        trollSpecialAction -= 1;
        }
    updateView();
}

function trollHPRegen(){
    if(trollHP <= 0.5 * trollMAXHP){
        trollHP += 0.1 * trollMAXHP;
    }
        else if(trollHP <= 0.25 * trollMAXHP){
            trollHP += 0.2 * trollMAXHP;
        }
    updateView();
}