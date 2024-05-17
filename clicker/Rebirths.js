let prestigeLevel = 0; 
let prestigeCost = 0; 
let prestigeMultiplier = 1;



function prestige() {
    if (level >= 10) {
        location.reload();
        prestigeLevel++;
        prestigeMultiplier += 0.5; 
        cashPerBlock = 1
        blockHP = 10; 
        maxHP = 10; 
        damage = 1;
        PupgradeCostAutoClickDamage1 = 300;
        cash = 0; 
        upgradeCostCash = 10; 
        upgradeCostDamage = 10; 
        upgradeCostDamage2 = 100; 
        upgradeCostDamage3 = 300; 
        upgradeCostDamage5 = 600;
        upgradeCostCash3 = 200;
        upgradeCostCash4 = 300; 
        upgradeCostDamage4 = 400; 
        PupgradeCostCash1 = 400;
        upgradeCostCashPerSec = 100;
        cashPerSecond = 1; 
        upgradeCostAutoClickDamage4 = 600; 
        upgradeCostAutoClickDamage5 = 1000;
        PupgradeCostDamage1 = 400;
        upgradeCostCash5 = 600; 
        upgradeCostAutoClickDamage3 = 300;
        upgradeCostCash6 = 1000;
        xp = 0;
        level = 1;
        autoClickDamage = 0; 
        autoClickCost = 10; 
        autoClickInterval = null; 
        upgradeCostAutoClickDamage = 50; 
        upgradeCostAutoClickDamage2 = 100; 
        upgradeCostCash2 = 50;
        updateLevel(); 
        updateXP(); 
        updateCash(); 
        document.getElementById('prestigeButton').disabled = true; 
        updatePrestigeLevel(); 
        updatePrestigeCost(); 
    } else {
        alert("You need to reach level 10 to prestige.");
    }
    updatePrestigeLevel(); 
}

function updatePrestigeLevel() {
    document.getElementById('prestigeLevel').textContent = prestigeLevel;
}

function updatePrestigeCost() {
    prestigeCost *= 2; 
    document.getElementById('prestigeCost').textContent = prestigeCost;
}