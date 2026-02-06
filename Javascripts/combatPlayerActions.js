function hitTroll(){
    if (stamina >= staminaCost)
    {
    trollHP -= strength;
    stamina -= staminaCost;
    trollSpecialAttack();
    trollMainAttack();
    trollHPRegen();
    updateView();
    }
    if (trollHP <= 0){youWin()};
}
    
function pickUpWeapon(newWeapon, newStrength, newStaminaCost){
    strength -= weaponStrengthBonus;
    weapon = newWeapon;
    weaponStrengthBonus = newStrength;
    strength += weaponStrengthBonus;
    staminaCost = newStaminaCost;
    updateView();
}

function eatFood(food, newStamina){
    if (berries >= 1)
    if (stamina < maxStamina)
    {
    berries -= 1;
    stamina = Math.min(stamina + newStamina, maxStamina);
    updateView();
    }
}
function eatMeat(food, newStamina){
    if (meats >= 1)
    if (stamina < maxStamina)
    {
    meats -= 1;
    stamina = Math.min(stamina + newStamina, maxStamina);
    updateView();
    }
}
function eatMeal(food, newStamina){
    if (bigMeals >= 1)
    if (stamina < maxStamina)
    {
    bigMeals -= 1;
    stamina = Math.min(stamina + newStamina, maxStamina);
    updateView();
    }
}
