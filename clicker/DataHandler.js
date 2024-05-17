

function saveGameData() {
    const gameData = {
        
    blockHP: blockHP,
    maxHP: maxHP,
cashPerBlock: cashPerBlock,
damage: damage,
cash: cash,
upgradeCostCash: upgradeCostCash,
upgradeCostDamage: upgradeCostDamage,
upgradeCostDamage2: upgradeCostDamage2,
upgradeCostDamage3: upgradeCostDamage3,
upgradeCostAutoClickDamage3: upgradeCostAutoClickDamage3,
upgradeCostCash4: upgradeCostCash4,
upgradeCostAutoClickDamage4: upgradeCostAutoClickDamage4,
upgradeCostCash5: upgradeCostCash5,
upgradeCostAutoClickDamage5: upgradeCostAutoClickDamage5,
PupgradeCostCash1: PupgradeCostCash1,
xp: xp,
level: level,
prestigeMultiplier: prestigeMultiplier,
PupgradeCostDamage1: PupgradeCostDamage1,
upgradeCostCash6: upgradeCostCash6,
autoClickDamage: autoClickDamage,
upgradeCostDamage4: upgradeCostDamage4,
autoClickCost: autoClickCost,
upgradeCostAutoClickDamage: upgradeCostAutoClickDamage,
upgradeCostAutoClickDamage2: upgradeCostAutoClickDamage2,
upgradeCostCash2: upgradeCostCash2,
prestigeLevel: prestigeLevel,
upgradeCostCash3: upgradeCostCash3,
upgradeCostDamage5: upgradeCostDamage5,
prestigeCost: prestigeCost,
totalCash: totalCash,
PupgradeCostAutoClickDamage1: PupgradeCostAutoClickDamage1,
totallevel: totallevel,


upgradeCostCashPerSec: upgradeCostCashPerSec,
        cashPerSecond: cashPerSecond,

        
        unlockedUpgrades: {
            upgradeAutoClickDamage: !document.getElementById('upgradeAutoClickDamage').disabled,
            upgradeCashPerBlock2: !document.getElementById('upgradeCashPerBlock2').disabled,
            upgradeAutoClickDamage2: !document.getElementById('upgradeAutoClickDamage2').disabled,
            upgradeDamage2: !document.getElementById('upgradeDamage2').disabled
        }
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
}

function loadGameData() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
        const gameData = JSON.parse(savedData);
        maxHP = gameData.maxHP;
        blockHP = gameData.blockHP;
        cashPerBlock = gameData.cashPerBlock;
        damage = gameData.damage;
        cash = gameData.cash;
        upgradeCostCash = gameData.upgradeCostCash;
        upgradeCostCash4 = gameData.upgradeCostCash4;
        upgradeCostDamage = gameData.upgradeCostDamage;
        upgradeCostDamage2 = gameData.upgradeCostDamage2;
        upgradeCostDamage3 = gameData.upgradeCostDamage3;
        prestigeMultiplier = gameData.prestigeMultiplier;
        upgradeCostDamage4 = gameData.upgradeCostDamage4;
        upgradeCostAutoClickDamage4 = gameData.upgradeCostAutoClickDamage4;
        PupgradeCostDamage1 = gameData.PupgradeCostDamage1;
        upgradeCostCash5 = gameData.upgradeCostCash5;
        upgradeCostDamage5 = gameData.upgradeCostDamage5;
        PupgradeCostCash1 = gameData.PupgradeCostCash1;
        xp = gameData.xp;
        level = gameData.level;
        autoClickDamage = gameData.autoClickDamage;
        autoClickCost = gameData.autoClickCost;
        upgradeCostAutoClickDamage = gameData.upgradeCostAutoClickDamage;
        upgradeCostAutoClickDamage2 = gameData.upgradeCostAutoClickDamage2;
        upgradeCostAutoClickDamage3 = gameData.upgradeCostAutoClickDamage3;
        upgradeCostAutoClickDamage5 = gameData.upgradeCostAutoClickDamage5;
        upgradeCostCash6 = gameData.upgradeCostCash6;
        upgradeCostCash2 = gameData.upgradeCostCash2;
        prestigeLevel = gameData.prestigeLevel;
        prestigeCost = gameData.prestigeCost;
        upgradeCostCash3 = gameData.upgradeCostCash3;
        totalCash = gameData.totalCash;
        totallevel = gameData.totallevel;

        PupgradeCostAutoClickDamage1 = gameData.PupgradeCostAutoClickDamage1
        upgradeCostCashPerSec = gameData.upgradeCostCashPerSec;
        cashPerSecond = gameData.cashPerSecond;

        updateHealthBar();
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('currentHP').textContent = blockHP;
        document.getElementById('prestigeMultiplier2').textContent = prestigeMultiplier
        document.getElementById('damageAmount').textContent = damage;
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('upgradeCostCash').textContent = upgradeCostCash;
        document.getElementById('PupgradeCostDamage1').textContent = PupgradeCostDamage1;
        document.getElementById('PupgradeCostCash1').textContent = PupgradeCostCash1;
        document.getElementById('PupgradeCostAutoClickDamage1').textContent = PupgradeCostAutoClickDamage1;
        document.getElementById('upgradeCostCashPerSec').textContent = upgradeCostCashPerSec;
        document.getElementById('cashPerSecondAmount').textContent = cashPerSecond;
        document.getElementById('upgradeCostCash3').textContent = upgradeCostCash3;
        document.getElementById('upgradeCostCash4').textContent = upgradeCostCash4;
        document.getElementById('upgradeCostDamage').textContent = upgradeCostDamage;
        document.getElementById('upgradeCostDamage2').textContent = upgradeCostDamage2;
        document.getElementById('upgradeCostDamage3').textContent = upgradeCostDamage3;
        document.getElementById('upgradeCostDamage4').textContent = upgradeCostDamage4;
        document.getElementById('totalcashAmount').textContent = totalCash;
        document.getElementById('upgradeCostCash5').textContent = upgradeCostCash5;
        document.getElementById('upgradeCostCash6').textContent = upgradeCostCash6;

        document.getElementById('upgradeCostAutoClickDamage5').textContent = upgradeCostAutoClickDamage5;
        document.getElementById('upgradeCostAutoClickDamage4').textContent = upgradeCostAutoClickDamage4;
        document.getElementById('upgradeCostDamage5').textContent = upgradeCostDamage5;
        document.getElementById('cTotalLevel').textContent = totallevel
        document.getElementById('level').textContent = 'Level: ' + level;
        document.getElementById('currentXP').textContent = xp;
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('autoClickCost').textContent = autoClickCost;
        document.getElementById('upgradeCostAutoClickDamage').textContent = upgradeCostAutoClickDamage;
        document.getElementById('upgradeCostAutoClickDamage2').textContent = upgradeCostAutoClickDamage2;
        document.getElementById('upgradeCostAutoClickDamage3').textContent = upgradeCostAutoClickDamage3;
        document.getElementById('upgradeCostCash2').textContent = upgradeCostCash2;
        document.getElementById('prestigeLevel').textContent = prestigeLevel;

        if (level >= 2) {
            document.getElementById('upgradeAutoClickDamage').removeAttribute('disabled');
            document.getElementById('upgradeCashPerBlock2').removeAttribute('disabled');
        }
        if (level >= 3) {
            document.getElementById('upgradeAutoClickDamage2').removeAttribute('disabled');
            document.getElementById('upgradeDamage2').removeAttribute('disabled');
        }

        if (level >= 4) {
            document.getElementById('upgradeCashPerBlock3').removeAttribute('disabled');
            document.getElementById('upgradeDamage3').removeAttribute('disabled');
         
        }

        if (level >= 5) {
            document.getElementById('upgradeAutoClickDamage3').removeAttribute('disabled');
            document.getElementById('upgradeCashPerBlock4').removeAttribute('disabled');
         
        }

        if (level >= 6) {
            document.getElementById('upgradeDamage4').removeAttribute('disabled');

         
        }

        if (level >= 7) {
            document.getElementById('upgradeAutoClickDamage4').removeAttribute('disabled');
            document.getElementById('upgradeCashPerBlock5').removeAttribute('disabled');

         
        }

        if (level >= 8) {
            document.getElementById('upgradeDamage5').removeAttribute('disabled');
        }

        if (level >= 9) {
            document.getElementById('upgradeAutoClickDamage5').removeAttribute('disabled');
            document.getElementById('upgradeCashPerBlock6').removeAttribute('disabled');
         
        }

        if (level >= 10) {
            document.getElementById('prestigeButton').removeAttribute('disabled');
            
        }

        if (prestigeLevel >= 1) {
            document.getElementById('PupgradeDamage1').removeAttribute('disabled');
            document.getElementById('PupgradeCashPerBlock1').removeAttribute('disabled');
            document.getElementById('upgradeCashPerSecond').removeAttribute('disabled');

        }
    }

    if (prestigeLevel >= 2) {
        document.getElementById('PupgradeAutoClickDamage1').removeAttribute('disabled');
    }
}








