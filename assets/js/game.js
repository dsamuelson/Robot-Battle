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
        playerMoney = playerMoney - 2;
        console.log(playerMoney);
        break;
        }
        else {
        fight();
        }
    }


    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
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

        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } 
    
  }
};

// run fight function to start game
for (let i = 0; i < enemyNames.length; i++ ) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
        let pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle. GAME OVER!");
        break;
    }
}
