var readlineSync = require('readline-sync');

var playerName = readlineSync.question('May I please have your name? We will need it for the tombstone. ');

const welcomeMessage = `Welcome, ${playerName}, to the DOOM ROOM!! Will you make it out alive or meet your doom?!`;
console.log(welcomeMessage);


let isAlive = true;
let hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn(`These are your gruesome choices: Press 1 to put your hand in this totally NOT creepy, sketchy hole, Press 2 to grab that key looking thing, or, Press 3 to Open the door: `, {limit: '$<1-3>'});
    
    switch (menuOptions){
        case "1":
            console.log(`${playerName}, didn't Mama ever tell you not to put your hand in random holes?! You're dead. Game and life: OVER!` );
            isAlive = false;
            break;
        case "2":
            if (menuOptions == 2 && hasKey == false){
                console.log(`Good job, ${playerName}! You found the key!! Now let's get the hell out of here!!`);
                hasKey = true;
            } else if (menuOptions == 2 && hasKey == true){
                console.log(`Hey! You already have the key. Stop wasting time!!`);
                hasKey = true;
            }
            break;
        case "3":
            if (menuOptions == 3 && hasKey == false){
                console.log(`This must be a bad neighborhood cause the door is locked. Have you seen a key sitting around anywhere?`);
                hasKey = false;
            } else if (menuOptions == 3 && hasKey == true){
                console.log(`Congratulations ${playerName}!! Your favorite band must be the Bee Gee's cause you are STAYIN ALIVE!!`);
                hasKey = true;
                isAlive = false;
            }
            break;
    }
}