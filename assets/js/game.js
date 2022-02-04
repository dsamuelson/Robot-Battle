var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

const enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function(enemyName) {

  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
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
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    else {
      fight();
    }
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

// run fight function to start game
for (var i = 0; i < enemyNames.length; i++ ) {
    fight(enemyNames[i]);
}
