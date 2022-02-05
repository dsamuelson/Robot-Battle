let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 50;
let playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

const enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
let enemyHealth = 50;
let enemyAttack = 12;

// fight function
let fight = function(enemyName) {

  
  while (playerHealth > 0 && enemyHealth > 0){
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip && playerMoney > 2) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 2);
        console.log(playerMoney);
        break;
        }
        else {
        fight();
        }
    }


    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = Math.max(0, enemyHealth - playerAttack);
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        playerMoney += 20;

        break;
        
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

        playerHealth = Math.max(0, playerHealth - enemyAttack);
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
        endGame();
        break;
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } 
    
  }
};

// run fight function to start game
let startGame = function() {
    playerHealth = 100;
    playerAttack = 50;
    playerMoney = 10;
    for (let i = 0; i < enemyNames.length; i++ ) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            let pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1 ) {
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
            if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 HP for 7 dollars.");
                playerMoney -= 7;
                playerHealth += 20;
                break;
            } else {
                window.alert("You don't have enough money!");
            }
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerMoney -= 7;
                playerAttack += 6;
                break;
            } else {
                window.alert("You don't have enough money!");
            }
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
    if (playerHealth > 0) {
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
