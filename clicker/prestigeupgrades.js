let PupgradeCostDamage1 = 400;
let PupgradeCostCash1 = 400;
let upgradeCostCashPerSec = 100;
let cashPerSecond = 1; 

let PupgradeCostAutoClickDamage1 = 300; 


let cashPerSecondInterval = null;


function PupgradeDamage1() {
    if (prestigeLevel < 1) {
        
        alert("Must be at least prestigeLevel 1 to upgrade damage!");
        return;
    }
    
    if (cash >= PupgradeCostDamage1) {
        damage += 10 
        cash -= PupgradeCostDamage1; 
        PupgradeCostDamage1 *= 2; 
        document.getElementById('damageAmount').textContent = damage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('PupgradeCostDamage1').textContent = PupgradeCostDamage1;
    } else {
        alert("Not enough cash to upgrade damage!");
    }
}


function PupgradeCashPerBlock1() {
    if (prestigeLevel < 1) {
     
        alert("Must be at least prestigeLevel 1 to upgrade Cash PerBlock!");
        return;
    }
    
    if (cash >= PupgradeCostCash1) {
        cashPerBlock += 10; 
        cash -= PupgradeCostCash1; 
        PupgradeCostCash1 *= 2; 
        document.getElementById('cashPerBlockAmount').textContent = cashPerBlock;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('PupgradeCostCash1').textContent = PupgradeCostCash1;
    } else {
        alert("Not enough cash to upgrade CashPerBlock!");
    }
}

function upgradeCashPerSecond() {
    if (prestigeLevel < 1) {
        
        alert("Must be at least prestigeLevel 1 to upgrade damage!");
        return;
    }
    if (cash >= upgradeCostCashPerSec) {
        cashPerSecond++; 
        cash -= upgradeCostCashPerSec; 
        upgradeCostCashPerSec *= 2; 
        document.getElementById('cashPerSecondAmount').textContent = cashPerSecond; 
        document.getElementById('cashAmount').textContent = cash; 
        document.getElementById('upgradeCostCashPerSec').textContent = upgradeCostCashPerSec; 

        startCashPerSecond();
    } else {
        alert("Not enough cash to upgrade cash per second!");
    }
}




function PupgradeAutoClickDamage1() {
    if (prestigeLevel < 2) {
    
        alert("Must be at least prestigeLevel 2 to upgrade auto click damage!");
        return;
    }
    
    if (cash >= PupgradeCostAutoClickDamage1) {
        autoClickDamage += 15; 
        cash -= PupgradeCostAutoClickDamage1; 
        PupgradeCostAutoClickDamage1 *= 2; 
        document.getElementById('autoClickDamage').textContent = autoClickDamage;
        document.getElementById('cashAmount').textContent = cash;
        document.getElementById('PupgradeCostAutoClickDamage1').textContent = PupgradeCostAutoClickDamage1;
    } else {
        alert("Not enough cash to upgrade auto click damage!");
    }
}







function startCashPerSecond() {
    if (!cashPerSecondInterval) {
        cashPerSecondInterval = setInterval(generateCashPerSecond, 1000);
    }
}

function generateCashPerSecond() {
    cash += cashPerSecond; 
    document.getElementById('cashAmount').textContent = cash; 
}


