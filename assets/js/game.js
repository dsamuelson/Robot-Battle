


let randomNumber = function(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

let playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
       
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -=7;
        }
    }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

let enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// fight function
let fight = function(enemy) {

  
  while (playerInfo.health > 0 && enemy.health > 0){
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip && playerInfo.money > 2) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 2);
        console.log(playerInfo.money);
        break;
        }
        else {
        fight();
        }
    }


    if (promptFight === "fight" || promptFight === "FIGHT") {
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        playerInfo.money += 20;

        break;
        
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check player's health
        if (playerInfo.health <= 0) {
        endGame();
        break;
        } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
        // if player choses to skip
    } 
    
  }
};

// run fight function to start game
let startGame = function() {
    playerInfo.reset();
    for (let i = 0; i < enemyInfo.length; i++ ) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            let pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1 ) {
                let storeConfirm = window.confirm("The fight is over, visit the store before Continuing?");
                if (storeConfirm) {
                    shop();
                }
            }
        }
    }
    endGame();
};

let shop = function () {
    let shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

let endGame = function () {
    if (playerInfo.health > 0) {
        window.alert("Congratulations, your robot won!");
    } else {
        window.alert("Your Robot was destroyed in battle");
    }
    let playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing!");
    }
};



// Start game when page loads
startGame();
