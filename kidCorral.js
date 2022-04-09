const readlineSync = require("readline-sync");

const name = readlineSync.question("Every parent has a name besides 'Mom' or 'Dad', so what's yours? ");

readlineSync.question("Well hello " + name + ", Welcome to KID CORRAL! It's bed time and all the kids have been put down for the night. So obviously that means the night is yours to do whatever the hell you want with, without interuption....right?? Press 'Enter' to find out");

const wildKiddos = ["Jasper", "Devy", "Auggie", "Ophelia"];
const reward = ["A delicious slice of cheesecake", "A slightly bigger than average glass of wine", "A chance to watch your own TV shows for once", "A chance for a long hot bubble bath"];
var prize = [];
let userEnergy = 40;
const options = ["Walk", "Exit", "Print"];
let pickUp = reward[Math.floor(Math.random() * reward.length)];

function game(){
    const parentingPower = Math.floor(Math.random() * (6 - 2 + 1) + 3);
    const wildKiddo = wildKiddos[Math.floor(Math.random() * wildKiddos.length)];
    let wildKiddosEnergy = 20;
    const wildKiddosPower = Math.floor(Math.random() * (5 - 4 + 1) + 4);

    const index = readlineSync.keyInSelect(options, "What would you like to do next?");

    if (options[index] == "Exit") {
        return userEnergy = 0;
    } 
    else if (options[index] == "Print"){
        console.log(name + ": \n" + userEnergy + "\nReward: " + pickUp);
    } 
    else if (options[index] === "Walk"){
        let key = Math.random();
        if (key <= .5) {
            console.log("(In my best Dave Grohl voice) Learning to walk agaaaaaaain....");
        } 
        else if (key >= .5) {
            console.log("Goddammit!! A wild " + wildKiddo + " just popped out of no where!");

            while(wildKiddosEnergy > 0 && userEnergy > 0) {
                const user = readlineSync.question("What the hell should we do? Enter 'r' to run or 'p' to parent: ");

                switch (user){
                    case 'r': 
                        const run = Math.random();
                        if(run < .5) {
                            console.log("Before you can run away, " + wildKiddo + " attacks you with: " + wildKiddosPower + " points of wild kid power!");
                        }
                        else {
                            console.log("RUN, FORREST RUN!!");
                            break;
                        }
                    
                    case 'p':
                        
                        wildKiddosEnergy -= parentingPower;
                        console.log("You parented " + wildKiddo + " with " + parentingPower + " points of parenting power!");

                        userEnergy -= wildKiddosPower;
                        console.log("The wild child just attacked you with: " + wildKiddosPower + " points of wild kiddo power!");

                        if (wildKiddosEnergy <= 0){
                            console.log("You finally got " + wildKiddo + " to sleep!! Doing so earned you: " + pickUp);
                            let loot = Math.random();
                            if (loot <= .4){
                                prize.push(pickUp);
                            }
                        } 
                        else if(userEnergy <= 0){
                            console.log(wildKiddo + " has defeated you. It's going to be a loooooong night.");
                        }
                }
            }
        }
    }
}

while(userEnergy > 0){
    game();
}