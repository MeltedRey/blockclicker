let blockHP = 10; 
let maxHP = 10; 
let cashPerBlock = 1
let damage = 1;
let autoClickDamage = 0; 
let cash = 0;
let totalCash = 0;
let xp = 0;
let level = 1;
let totallevel = 1;



function clickBlock(event) {
    let damageDealt = damage;
    blockHP -= damage;
    if (blockHP <= 0) {
        destroyBlock();
    }
    updateHealthBar();

    document.getElementById('block').classList.add('clicked');


    clickSound.currentTime = 0;
    clickSound.play();

  
    let x = event.clientX;
    let y = event.clientY;

    showDamagePopup(damageDealt, x, y);

    setTimeout(function() {
        document.getElementById('block').classList.remove('clicked');
    }, 100);
}

function showDamagePopup(damageAmount, x, y) {

    let popup = document.createElement('div');
    popup.className = 'damage-popup';
    popup.textContent = damageAmount;

    popup.style.left = x + 'px';
    popup.style.top = y + 'px';

    document.body.appendChild(popup);


    setTimeout(function() {
        document.body.removeChild(popup);
    }, 1000);
}




function destroyBlock() {
    blockHP = maxHP; 
    xp += 1; 
    cash += cashPerBlock * prestigeMultiplier; 
    totalCash += cashPerBlock * prestigeMultiplier;

    document.getElementById('cashAmount').textContent = cash; 
    document.getElementById('totalcashAmount').textContent = totalCash;
    document.getElementById('cashPerBlockAmount').textContent =  cashPerBlock.toString();

    if (xp >= 200) {
        levelUp(); 
        clickSound2.currentTime = 0;
        clickSound2.play();
    
    }
    updateXP(); 
    updateHealthBar();
}

window.onload = function() {
    loadGameData(); 
    startAutoSave(); 
};

function startAutoSave() {
    setInterval(function() {
        saveGameData();
    }, 6); 
}

 function resetData() {
    localStorage.removeItem('gameData');
    location.reload(); 
}


function levelUp() {
    if (level < 10) {
        level++;
        totallevel++; 
        xp = 0; 
        document.getElementById('level').textContent = 'Level: ' + level;
        document.getElementById('cTotalLevel').textContent = totallevel;
        switch(level) {
            case 1:
                maxHP = 10;
                break;
            case 2:
                maxHP = 50;
                document.getElementById('upgradeAutoClickDamage').removeAttribute('disabled');
                document.getElementById('upgradeCashPerBlock2').removeAttribute('disabled');
                
                break;
            case 3:
                maxHP = 100;
                document.getElementById('upgradeAutoClickDamage2').removeAttribute('disabled');
                document.getElementById('upgradeDamage2').removeAttribute('disabled');
                break;
            case 4:
                maxHP = 500;
                document.getElementById('upgradeCashPerBlock3').removeAttribute('disabled');
                document.getElementById('upgradeDamage3').removeAttribute('disabled');
                break;
            case 5:
                maxHP = 800;
                document.getElementById('upgradeAutoClickDamage3').removeAttribute('disabled');
                document.getElementById('upgradeCashPerBlock4').removeAttribute('disabled');
                break;
            case 6:
                maxHP = 2000;
                document.getElementById('upgradeDamage4').removeAttribute('disabled');
                break;
            case 7:
                maxHP = 5000;
                document.getElementById('upgradeAutoClickDamage4').removeAttribute('disabled');
                document.getElementById('upgradeCashPerBlock5').removeAttribute('disabled');
                break;
            case 8:
                maxHP = 8000;
                document.getElementById('upgradeDamage5').removeAttribute('disabled');
                break;
            case 9:
                maxHP = 10000;
                document.getElementById('upgradeAutoClickDamage5').removeAttribute('disabled');
                document.getElementById('upgradeCashPerBlock6').removeAttribute('disabled');
                break;
            case 10:
                maxHP = 20000;
                document.getElementById('prestigeButton').disabled = false; 
                break;
            default:
                break;
        }

        blockHP = maxHP;

        setBlockColor(level);

        updateHealthBar();
    } else {
        
    }
}








function setBlockColor(level) {
    const blockElement = document.getElementById('block');
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'pink', 'brown', 'gray'];
    
    blockElement.style.backgroundColor = colors[level - 1];
}

function updateHealthBar() {
    const currentHP = Math.min(blockHP, maxHP); 
    const healthPercentage = (currentHP / maxHP) * 100; 
    document.getElementById('healthBar').style.width = healthPercentage + '%';
    document.getElementById('currentHP').textContent = currentHP;
}

function updateXP() {
    document.getElementById('currentXP').textContent = xp;
}

function resetData() {
    localStorage.removeItem('gameData');
    localStorage.removeItem('redeemedCodes');
    location.reload(); 
 
    blockHP = 10;
    maxHP = 10;
    cashPerBlock = 1;
    damage = 1;
    cash = 0;
    upgradeCostCash = 10;
    upgradeCostDamage = 10;
    upgradeCostDamage2 = 100;
    xp = 0;
    level = 1;
    autoClickDamage = 0;
    autoClickCost = 10;
    autoClickInterval = null;
    upgradeCostAutoClickDamage = 50;
    upgradeCostAutoClickDamage2 = 100;
    upgradeCostAutoClickDamage4 = 600; 
    upgradeCostAutoClickDamage5 = 1000; 
    PupgradeCostAutoClickDamage1 = 300;
    PupgradeCostDamage1 = 400;
upgradeCostCash5 = 600; 
    upgradeCostCash4 = 300; 
    upgradeCostCashPerSec = 100;
    cashPerSecond = 1; 
    upgradeCostAutoClickDamage3 = 300;
    PupgradeCostCash1 = 400;
    upgradeCostCash6 = 1000;
    upgradeCostDamage5 = 600;
    upgradeCostDamage4 = 400; 
    upgradeCostDamage3 = 300;
    upgradeCostCash3 = 200;
    prestigeMultiplier = 1;
    upgradeCostCash2 = 50;
    prestigeLevel = 0;
    prestigeCost = 0;
    updateLevel();
    updateXP();
    updateCash();
    document.getElementById('prestigeButton').disabled = true;
    updatePrestigeLevel();
    updatePrestigeCost();
}






