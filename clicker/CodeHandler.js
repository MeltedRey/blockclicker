let clickSound3 = new Audio('error.mp3');
let clickSound4 = new Audio('noerror.mp3');
let clickSound = new Audio('Button.mp3');
let clickSound2 = new Audio('LevelUp.mp3');


function redeemCode() {
    const codeInput = document.getElementById('codeInput').value.trim().toLowerCase();


    let redeemedCodes = [];
    try {
        const redeemedCodesStr = localStorage.getItem('redeemedCodes');
        if (redeemedCodesStr) {
            redeemedCodes = JSON.parse(redeemedCodesStr) || [];
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }

  
    const codeRewards = {
        "super1234": { cash: 100, message: "You've received 100 cash." },
        "freecash": { cash: 200, message: "You've received 200 cash." },
        "beta": { cash: 200, message: "You've received 200 cash." },
        "newgame": { cash: 200, message: "You've received 200 cash." },
        "freeupgrade": { cash: 0, message: "You've received 10 + Damage." },
        "maxlevel": { level: 10, expirationDuration: { days: 23, hours: 0, minutes: 0, seconds: 0 }, message: "You've received 10 Free Levels." },
       
        "superlongdevcodelikeuperlongyes": { level: 10, cash: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, message: "You've received inf cash" }
    };

    if (codeInput) {
        if (codeInput in codeRewards) {
            if (!redeemedCodes.includes(codeInput)) {
                const reward = codeRewards[codeInput];
                if (codeInput === "maxlevel") {
                    const lastRedeemed = localStorage.getItem('maxlevelRedeemedTime');
                    if (lastRedeemed) {
                        const now = new Date().getTime();
                        const elapsedSeconds = Math.floor((now - lastRedeemed) / 1000);
                        const expirationSeconds = reward.expirationDuration.days * 24 * 60 * 60
                            + reward.expirationDuration.hours * 60 * 60
                            + reward.expirationDuration.minutes * 60
                            + reward.expirationDuration.seconds;
                        if (elapsedSeconds >= expirationSeconds) {
                            alert("Sorry, the code has expired.");
                            return;
                        }
                    }
                    localStorage.setItem('maxlevelRedeemedTime', new Date().getTime());
                }
                if ('cash' in reward) {
                    cash += reward.cash;
                }
                if ('level' in reward) {
                    level = reward.level;
                }
                if (codeInput === "freeupgrade") {
                    damage += 10;
                }
                clickSound4.currentTime = 0;
                clickSound4.play();
                alert(`Code '${codeInput}' redeemed successfully! ${reward.message}`);
                redeemedCodes.push(codeInput);
                localStorage.setItem('redeemedCodes', JSON.stringify(redeemedCodes));
                location.reload();
            } else {
                clickSound3.currentTime = 0;
                clickSound3.play();
                alert("This code has already been redeemed.");
            }
        } else {
            clickSound3.currentTime = 0;
            clickSound3.play();
            alert("Invalid code.");
            


        }
    } else {
        alert("Please enter a code.");
    }


    updateCash();
    updateLevel();
}


