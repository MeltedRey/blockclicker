
let upgradeCostCash = 10; 
let upgradeCostDamage = 10; 
let upgradeCostDamage2 = 100; 
let upgradeCostDamage3 = 300; 
let upgradeCostDamage4 = 400; 
let upgradeCostDamage5 = 600;
let autoClickCost = 10; 
let autoClickInterval = null; 
let upgradeCostAutoClickDamage = 50; 
let upgradeCostAutoClickDamage2 = 100; 
let upgradeCostAutoClickDamage3 = 300; 
let upgradeCostAutoClickDamage4 = 600; 
let upgradeCostAutoClickDamage5 = 1000; 
let upgradeCostCash2 = 50; 
let upgradeCostCash3 = 200; 
let upgradeCostCash4 = 300; 
let upgradeCostCash5 = 600; 
let upgradeCostCash6 = 1000; 


function upgradeDamage() {
    if (cash >= upgradeCostDamage) {
        damage++;
        cash -= upgradeCostDamage;
        upgradeCostDamage *= 2; 
        document.getElementById('damageAmount').textContent = damage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostDamage').textContent = upgradeCostDamage;
    } else {
        alert("Not enough cash to upgrade damage!");
    }
}

function buyAutoClickUpgrade() {
    if (cash >= autoClickCost) {
        autoClickDamage += 1; 
        cash -= autoClickCost; 
        autoClickCost *= 2; 
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('autoClickCost').textContent = autoClickCost;
     
        startAutoClick(); 
    } else {
        alert("Not enough cash to buy auto click upgrade!");
    }
}

function startAutoClick() {
    if (!autoClickInterval) {
        autoClickInterval = setInterval(autoClickBlock, 1000); 
    }
}

function autoClickBlock() {
    blockHP -= autoClickDamage;
    if (blockHP <= 0) {
        destroyBlock();
    }
    updateHealthBar();
}

function upgradeCashPerBlock() {
    if (cash >= upgradeCostCash) {
        cashPerBlock++;
        cash -= upgradeCostCash;
        upgradeCostCash *= 2; 
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostCash').textContent = upgradeCostCash; 
    } else {
        alert("Not enough cash to upgrade cash per block!");
    }
}


function upgradeAutoClickDamage() {
    if (level < 2) {

        alert("Must be at least level 2 to upgrade auto click damage!");
        return;
    }
    
    if (cash >= upgradeCostAutoClickDamage) {
        autoClickDamage += 5; 
        cash -= upgradeCostAutoClickDamage; 
        upgradeCostAutoClickDamage *= 2; 
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostAutoClickDamage').textContent = upgradeCostAutoClickDamage;
    } else {
        alert("Not enough cash to upgrade auto click damage!");
    }
}

function upgradeDamage4() {
    if (level < 6) {
    
        alert("Must be at least level 6 to upgrade damage!");
        return;
    }
    
    if (cash >= upgradeCostDamage4) {
        damage += 20 
        cash -= upgradeCostDamage4; 
        upgradeCostDamage4 *= 2; 
        document.getElementById('damageAmount').textContent = damage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostDamage4').textContent = upgradeCostDamage4;
    } else {
        alert("Not enough cash to upgrade damage!");
    }
}

function upgradeDamage5() {
    if (level < 8) {
        
        alert("Must be at least level 8 to upgrade damage!");
        return;
    }
    
    if (cash >= upgradeCostDamage5) {
        damage += 40 
        cash -= upgradeCostDamage5; 
        upgradeCostDamage5 *= 2; 
        document.getElementById('damageAmount').textContent = damage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostDamage5').textContent = upgradeCostDamage5;
    } else {
        alert("Not enough cash to upgrade damage!");
    }
}

function upgradeDamage2() {
    if (level < 3) {
      
        alert("Must be at least level 3 to upgrade damage!");
        return;
    }
    
    if (cash >= upgradeCostDamage2) {
        damage += 5 
        cash -= upgradeCostDamage2; 
        upgradeCostDamage2 *= 2; 
        document.getElementById('damageAmount').textContent = damage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostDamage2').textContent = upgradeCostDamage2;
    } else {
        alert("Not enough cash to upgrade damage!");
    }
}

function upgradeDamage3() {
    if (level < 4) {
      
        alert("Must be at least level 4 to upgrade damage!");
        return;
    }
    
    if (cash >= upgradeCostDamage3) {
        damage += 10
        cash -= upgradeCostDamage3; 
        upgradeCostDamage3 *= 2; 
        document.getElementById('damageAmount').textContent = damage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostDamage3').textContent = upgradeCostDamage3;
    } else {
        alert("Not enough cash to upgrade damage!");
    }
}

function upgradeCashPerBlock3() {
    if (level < 4) {
        
                alert("Must be at least Level 4 to upgrade Cash PerBlock!");
        return;
    }
    
    if (cash >= upgradeCostCash3) {
        cashPerBlock += 10; 
        cash -= upgradeCostCash3; 
        upgradeCostCash3 *= 2; 
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostCash3').textContent = upgradeCostCash3;
    } else {
        alert("Not enough cash to upgrade CashPerBlock!");
    }
}

function upgradeCashPerBlock4() {
    if (level < 5) {
    
                alert("Must be at least Level 5 to upgrade Cash PerBlock!");
        return;
    }
    
    if (cash >= upgradeCostCash4) {
        cashPerBlock += 20; 
        cash -= upgradeCostCash4; 
        upgradeCostCash4 *= 2; 
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostCash4').textContent = upgradeCostCash4;
    } else {
        alert("Not enough cash to upgrade CashPerBlock!");
    }
}

function upgradeCashPerBlock5() {
    if (level < 7) {
     
                alert("Must be at least Level 7 to upgrade Cash PerBlock!");
        return;
    }
    
    if (cash >= upgradeCostCash5) {
        cashPerBlock += 40; 
        cash -= upgradeCostCash5; 
        upgradeCostCash5 *= 2; 
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostCash5').textContent = upgradeCostCash5;
    } else {
        alert("Not enough cash to upgrade CashPerBlock!");
    }
}

function upgradeCashPerBlock6() {
    if (level < 9) {
       
                alert("Must be at least Level 9 to upgrade Cash PerBlock!");
        return;
    }
    
    if (cash >= upgradeCostCash6) {
        cashPerBlock += 60; 
        cash -= upgradeCostCash6; 
        upgradeCostCash6 *= 2; 
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostCash6').textContent = upgradeCostCash6;
    } else {
        alert("Not enough cash to upgrade CashPerBlock!");
    }
}

function upgradeAutoClickDamage2() {
    if (level < 2) {
        
        alert("Must be at least level 2 to upgrade auto click damage!");
        return;
    }
    
    if (cash >= upgradeCostAutoClickDamage2) {
        autoClickDamage += 10; 
        cash -= upgradeCostAutoClickDamage2; 
        upgradeCostAutoClickDamage2 *= 2; 
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostAutoClickDamage2').textContent = upgradeCostAutoClickDamage2;
    } else {
        alert("Not enough cash to upgrade auto click damage!");
    }
}

function upgradeAutoClickDamage3() {
    if (level < 5) {
       
        alert("Must be at least level 5 to upgrade auto click damage!");
        return;
    }
    
    if (cash >= upgradeCostAutoClickDamage3) {
        autoClickDamage += 20; 
        cash -= upgradeCostAutoClickDamage3; 
        upgradeCostAutoClickDamage3 *= 2; 
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostAutoClickDamage3').textContent = upgradeCostAutoClickDamage3;
    } else {
        alert("Not enough cash to upgrade auto click damage!");
    }
}

function upgradeAutoClickDamage4() {
    if (level < 7) {
        
        alert("Must be at least level 7 to upgrade auto click damage!");
        return;
    }
    
    if (cash >= upgradeCostAutoClickDamage4) {
        autoClickDamage += 40; 
        cash -= upgradeCostAutoClickDamage4; 
        upgradeCostAutoClickDamage4 *= 2; 
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostAutoClickDamage4').textContent = upgradeCostAutoClickDamage4;
    } else {
        alert("Not enough cash to upgrade auto click damage!");
    }
}

function upgradeAutoClickDamage5() {
    if (level < 9) {
    
        alert("Must be at least level 9 to upgrade auto click damage!");
        return;
    }
    
    if (cash >= upgradeCostAutoClickDamage5) {
        autoClickDamage += 60; 
        cash -= upgradeCostAutoClickDamage5; 
        upgradeCostAutoClickDamage5 *= 2; 
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostAutoClickDamage5').textContent = upgradeCostAutoClickDamage5;
    } else {
        alert("Not enough cash to upgrade auto click damage!");
    }
}

function upgradeCashPerBlock2() {
    if (level < 2) {
                alert("Must be at least Level 2 to upgrade Cash PerBlock!");
        return;
    }
    
    if (cash >= upgradeCostCash2) {
        cashPerBlock += 5; 
        cash -= upgradeCostCash2; 
        upgradeCostCash2 *= 2; 
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('upgradeCostCash2').textContent = upgradeCostCash2;
    } else {
        alert("Not enough cash to upgrade auto click damage!");
    }
}

