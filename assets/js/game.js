let playerName = window.prompt("What's your Name?");
let playerHealth = 100;
let playerAttack = 10;

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

let fight = function () {
    
    if (playerHealth > 0) {
        enemyHealth = enemyHealth - playerAttack;

        window.alert (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " HP remaining!");
    }

    if (enemyHealth > 0){
        playerHealth = playerHealth - enemyAttack;

    window.alert (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " HP remaining!");
    }

}

while (playerHealth > 0 && enemyHealth > 0) {
    fight ();
};

if (enemyHealth <=0) {
    window.alert(enemyName + " has been knocked out");
}

if (playerHealth <=0) {
    window.alert("You have been knocked out! GAME OVER!")
}
