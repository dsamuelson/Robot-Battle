debugger;
let randomNumber = function(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

let getPlayerName = function () {
    let name = prompt("What is your robot's name?");
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");
    }
    return name;
};

let playerInfo = {
    name: getPlayerName(),
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

let fightOrSkip = function () {
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    } else if (promptFight === "fight") {
        return false;
    } else {
        window.alert("You must choose either FIGHT or SKIP!");
        return fightOrSkip();
    }
};

// fight function
let fight = function(enemy) { 
    var isPlayerTurn = true;

    if (Math.random() > .5) {
        isPlayerTurn = false;
    }

  while (playerInfo.health > 0 && enemy.health > 0){
      if (isPlayerTurn) {
        if (fightOrSkip()) {
            break;
        } 
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
      } else {
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
      }
      isPlayerTurn = !isPlayerTurn;
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
    let shopOptionPrompt = window.prompt("Would you like to 1) REFILL your health, 2) UPGRADE your attack, or 3) LEAVE the store? Please enter one: '1 or REFILL', '2 or UPGRADE', or '3 or LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
        case "1":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
        case "2":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
        case "3":
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

    window.alert("The game has now ended. Let's see how you did!");

    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    // if player has more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } 
    else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
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
